import React, { useState } from 'react';
import { Checkbox, TableBody, TableCell, TableRow } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Add from '@mui/icons-material/Add';

import useDebounce from '../../hooks/useDebounce';
import { TableCustom, StatePagination } from '../common';
import formatDate from '../common/formatDate';
import { CustomIconButton } from '../common/button/CustomIconButton';
import StateCustomTable from '../common/StateCustomTable';
import { useQuery } from '../../hooks/UseQuery';
import { IPart } from '../../pages/addparts/AddEditPart';

const tableHeaderObj = [
  [
    { text: '#', rowspan: 1, colspan: 1 },
    { text: 'Part Name', rowspan: 1, colspan: 1 },
    { text: 'Model Name', rowspan: 1, colspan: 1 },
    { text: 'Created At', rowspan: 1, colspan: 1 },
    { text: 'Action', rowspan: 1, colspan: 1 },
  ],
];

const filterOptions = [{ value: 'part_name', name: 'A-Z' }];

const PpapList = ({
  type,
  link,
  handleUpdatePart,
  riPartIds,
}: {
  type?: string;
  link?: string;
  handleUpdatePart?: (id: string) => void;
  riPartIds?: string[];
}) => {
  const [page, setPage] = useState(1);
  const [partData, setPartData] = useState<IPart[]>([]);
  const [perPage, setPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState<string>('');
  const [filter, setFilter] = useState<string>('part_name');
  const navigate = useNavigate();

  const category = useQuery('category');
  const customer = useQuery('customer');
  const model = useQuery('model');

  const fetchPartData = async () => {
    const res: any = await axios
      .get(
        `/api/addPartRoute/viewPpapPart/publish?page=${page}&customer=${customer}&category=${category}&model=${model}&search=${search}&perPage=${10}`
      )
      .catch((err) => {
        console.log(err);
      });
    setPerPage(res.data?.perPage);
    setPartData(res.data?.result);
    setTotalPages(res.data?.pages);
  };

  const handleCheckingDuplicatePart = (
    id: any,
    part_name: any,
    vender_name: any
  ) => {
    axios
      .get(`/api/pdiStandard/duplicatepart/${id}`)
      .then((res) => {
        if (res?.data?.isDuplicate === true) {
          alert(
            'report for this part exists already. please choose another part'
          );
        } else {
          navigate(
            `${link}?partName=${part_name}&ri_part_id=${id}&supplierName=${vender_name}&isView=false`
          );
        }
      })
      .catch((err) => console.log(err));
  };

  useDebounce(fetchPartData, 300, [page, filter, search]);

  return (
    <StateCustomTable
      filterOptions={filterOptions}
      {...{ search, setSearch, filter, setFilter }}
      label="Search Part"
    >
      <TableCustom tableHeaderObj={tableHeaderObj}>
        <TableBody>
          {partData &&
            partData.map((item: IPart, index: number) => (
              <React.Fragment key={index}>
                <TableRow>
                  <TableCell align="center" width={10}>
                    {perPage * (+page - 1) + index + 1}
                  </TableCell>

                  <TableCell align="center">{item?.part_name}</TableCell>

                  <TableCell align="center">
                    {item?.model_id?.model_name}
                  </TableCell>

                  <TableCell align="center">
                    {formatDate(item?.createdAt || '')}
                  </TableCell>

                  <TableCell align="center">
                    {type === 'choose' && handleUpdatePart && riPartIds ? (
                      <Checkbox
                        checked={riPartIds.includes(item._id || '')}
                        onChange={() => handleUpdatePart(item._id || '')}
                      />
                    ) : (
                      <CustomIconButton
                        sx={{ p: 0 }}
                        tooltipTitle={'select'}
                        onClick={() => {
                          console.log('onclikc');
                          handleCheckingDuplicatePart(
                            item._id,
                            item?.part_name,
                            item.vendor_id?.vender_name
                          );
                        }}
                      >
                        <Add style={{ color: '#343a40' }} />
                      </CustomIconButton>
                    )}
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
        </TableBody>
      </TableCustom>

      <StatePagination page={page} totalPage={totalPages} setPage={setPage} />
    </StateCustomTable>
  );
};

export default PpapList;
