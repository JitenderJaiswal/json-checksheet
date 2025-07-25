import React, { useState } from 'react';
import { TableBody, TableCell, TableRow } from '@mui/material';
import axios from 'axios';
import useDebounce from '../../../hooks/useDebounce';
import { TableCustom, StatePagination } from '../../common';
import formatDate from '../../common/formatDate';
import { CustomIconButton } from '../../common/button/CustomIconButton';
import { useNavigate } from 'react-router-dom';
import Add from '@mui/icons-material/Add';
import StateCustomTable from '../../common/StateCustomTable';

interface Customer {
  customer_name: string;
}
interface IPart {
  _id?: string;
  part_number: string | null;
  isSubmitted: 'draft' | 'publish';
  isAdminRequestNo: number | null;
  part_name: string | null;
  customer_id?: string | null | Customer | any;
  supplier_id?: string | null | any;
  key_contact: string | null;
  core_team: string | null;
  supplier: string | null;
  supplier_code: string | null;
  notes: string | null;
  date_orig: moment.Moment;
  createdAt?: Date;
  supplier_approval_date: moment.Moment;
  Other_approval_date: moment.Moment;
}
const tableHeaderObj = [
  [
    { text: '#', rowspan: 1, colspan: 1 },
    { text: 'Item Number', rowspan: 1, colspan: 1 },
    { text: 'Item Name/Description', rowspan: 1, colspan: 1 },
    { text: 'Created At', rowspan: 1, colspan: 1 },
    { text: 'Action', rowspan: 1, colspan: 1 },
  ],
];

const filterOptions = [{ value: 'part_number', name: 'A-Z' }];

const SupervisorPartTable = ({ link }: { link: string }) => {
  const [page, setPage] = useState(1);
  const [partData, setPartData] = useState<IPart[]>([]);
  const [perPage, setPerPage] = useState();
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState<string>('');
  const [filter, setFilter] = useState<string>('part_number');
  const navigate = useNavigate();

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
                    {formatDate(item?.createdAt || '')}
                  </TableCell>
                  <TableCell align="center">
                    <CustomIconButton
                      sx={{ p: 0 }}
                      tooltipTitle={'select'}
                      onClick={() =>
                        navigate(
                          `${link}/${item._id}?partName=${item.part_name}&partNumber=${item.part_number}&customerName=${item?.customer_id?.customer_name}&supplierName=${item?.supplier_id?.supplier_name}&isView=false`
                        )
                      }
                    >
                      <Add style={{ color: '#343a40' }} />
                    </CustomIconButton>
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

export default SupervisorPartTable;
