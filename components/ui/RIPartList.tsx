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

interface Vendor {
  vender_name: string;
}
interface IPart {
  _id?: string;
  part_name: string | null;
  vendor_id: Vendor;
  key_contact: string | null;
  date_orig: moment.Moment;
  createdAt?: Date;
}
const tableHeaderObj = [
  [
    { text: '#', rowspan: 1, colspan: 1 },
    { text: 'Part Name', rowspan: 1, colspan: 1 },
    { text: 'Vendor Name', rowspan: 1, colspan: 1 },
    { text: 'Created At', rowspan: 1, colspan: 1 },
    { text: 'Action', rowspan: 1, colspan: 1 },
  ],
];

const filterOptions = [{ value: 'part_name', name: 'A-Z' }];

const RIPartList = ({
  link,
  type,
  riPartIds,
  handleUpdatePart,
  isPartIdParam,
}: {
  link?: string;
  type?: string;
  handleUpdatePart?: (id: string) => void;
  riPartIds?: string[];
  isPartIdParam?: boolean;
}) => {
  const [page, setPage] = useState(1);
  const [partData, setPartData] = useState<IPart[]>([]);
  const [perPage, setPerPage] = useState();
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState<string>('');
  const [filter, setFilter] = useState<string>('part_name');
  const navigate = useNavigate();

  const fetchPartData = () => {
    axios
      .get(
        `/api/riDepartment/riPart?page=${page}&sortBy=${filter}&search=${search}&perPage=${10}`
      )
      .then((res) => {
        setPerPage(res.data?.perPage);
        setPartData(res.data?.result);
        setTotalPages(res.data?.pages);
      })
      .catch((err) => console.log(err));
  };

  const handleCheckingDuplicatePart = (
    id: any,
    part_name: any,
    vender_name: any
  ) => {
    axios
      .get(`/api/inspectionStandard/duplicatepart/${id}`)
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
              <React.Fragment key={item?._id}>
                <TableRow>
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{item.part_name}</TableCell>
                  <TableCell align="center">
                    {item.vendor_id?.vender_name}
                  </TableCell>
                  <TableCell align="center">
                    {formatDate(item?.createdAt || '')}
                  </TableCell>
                  {!isPartIdParam && (
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
                  )}
                  
                  {isPartIdParam && (
                    <TableCell align="center">
                      <CustomIconButton
                        sx={{ p: 0 }}
                        tooltipTitle={'select'}
                        onClick={() =>
                          navigate(
                            `${link}/${item._id}?partName=${item.part_name}&supplierName=${item.vendor_id?.vender_name}&isView=false`
                          )
                        }
                      >
                        <Add style={{ color: '#343a40' }} />
                      </CustomIconButton>
                    </TableCell>
                  )}
                </TableRow>
              </React.Fragment>
            ))}
        </TableBody>
      </TableCustom>
      <StatePagination page={page} totalPage={totalPages} setPage={setPage} />
    </StateCustomTable>
  );
};

export default RIPartList;
