import React, { useState } from 'react';
import { TableBody, TableCell, TableRow } from '@mui/material';
import axios from 'axios';
import useDebounce from '../../../../../hooks/useDebounce';
import { TableCustom, StatePagination } from '../../../../../components/common';
import formatDate from '../../../../../components/common/formatDate';
import { CustomIconButton } from '../../../../../components/common/button/CustomIconButton';
import { useNavigate } from 'react-router-dom';
import Add from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import StateCustomTable from '../../../../../components/common/StateCustomTable';

interface Customer {
  customer_name: string;
}
interface IPart {
  _id?: string;
  part_number: string | null;
  isSubmitted: 'draft' | 'publish';
  isAdminRequestNo: number | null;
  part_name: string | null;
  customer_id: {
    customer_name: string | null; //| Customer;
  };
  key_contact: string | null;
  core_team: string | null;
  supplier: string | null;
  supplier_code: string | null;
  notes: string | null;
  date_orig: moment.Moment;
  createdAt?: Date;
  supplier_approval_date: moment.Moment;
  Other_approval_date: moment.Moment;
  model_id: {
    model_name: string | null;
  };
}
const tableHeaderObj = [
  [
    { text: '#', rowspan: 1, colspan: 1 },
    { text: 'Item Number', rowspan: 1, colspan: 1 },
    { text: 'Item Name/Description', rowspan: 1, colspan: 1 },
    { text: 'Model Name', rowspan: 1, colspan: 1 },
    { text: 'Created At', rowspan: 1, colspan: 1 },
    { text: 'Action', rowspan: 1, colspan: 1 },
  ],
];

const filterOptions = [{ value: 'part_number', name: 'A-Z' }];

const PartTable = (props: any) => {
  const { moduleData } = props;
  const [page, setPage] = useState(1);
  const [partData, setPartData] = useState<IPart[]>([]);
  const [perPage, setPerPage] = useState();
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState<string>('');
  const [filter, setFilter] = useState<string>('part_number');
  const navigate = useNavigate();
  const [render, setRender] = useState(false);
  const fetchPartData = () => {
    axios
      .get(
        `/api/addPartRoute/byDocType/publish?page=${page}&sortBy=${filter}&search=${search}&perPage=${10}`
      )
      .then((res) => {
        setPerPage(res.data?.perPage);
        setPartData(res.data?.result);
        setTotalPages(res.data?.pages);
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
                  <TableCell align="center">{item.part_number}</TableCell>
                  <TableCell align="center">{item.part_name}</TableCell>
                  <TableCell align="center">
                    {item?.model_id?.model_name}
                  </TableCell>
                  <TableCell align="center">
                    {formatDate(item?.createdAt || '')}
                  </TableCell>
                  <TableCell align="center">
                    {moduleData.part_id?._id === item._id ? (
                      <CustomIconButton
                        sx={{ p: 0 }}
                        tooltipTitle={'remove'}
                        onClick={() => {
                          moduleData.part_id = null;
                          setRender((prev) => !prev);
                        }}
                      >
                        <RemoveIcon style={{ color: '#c92a2a' }} />
                      </CustomIconButton>
                    ) : (
                      <CustomIconButton
                        sx={{ p: 0 }}
                        tooltipTitle={'add'}
                        onClick={() => {
                          moduleData.part_id = item;
                          setRender((prev) => !prev);
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

export default PartTable;
