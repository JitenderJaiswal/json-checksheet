import React, { useState } from 'react';
import { TableBody, TableCell, TableRow } from '@mui/material';
import axios from 'axios';
import Add from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import StateCustomTable from '../../components/common/StateCustomTable';
import useDebounce from '../../hooks/useDebounce';
import { StatePagination, TableCustom } from '../../components/common';
import formatDate from '../../components/common/formatDate';
import { CustomIconButton } from '../../components/common/button/CustomIconButton';

const tableHeaderObj = [
  [
    { text: '#', rowspan: 1, colspan: 1 },
    { text: 'Item Number', rowspan: 1, colspan: 1 },
    { text: 'Item Name/Description', rowspan: 1, colspan: 1 },
    { text: 'Created At', rowspan: 1, colspan: 1 },
    { text: 'Action', rowspan: 1, colspan: 1 },
  ],
];

const filterOptions = [{ value: 'part_name', name: 'A-Z' }];

const PickRiPart = (props: any) => {
  const { moduleData } = props;
  const [page, setPage] = useState(1);
  const [partData, setPartData] = useState<any>([]);
  const [perPage, setPerPage] = useState();
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState<string>('');
  const [filter, setFilter] = useState<string>('part_name');
  const [render, setRender] = useState(false);
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
            partData.map((item: any, index: number) => (
              <React.Fragment key={item?._id}>
                <TableRow>
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{item?.part_number}</TableCell>
                  <TableCell align="center">{item?.part_name}</TableCell>
                  <TableCell align="center">
                    {formatDate(item?.createdAt || '')}
                  </TableCell>
                  <TableCell align="center">
                    {moduleData.ri_part_id === item?._id ? (
                      <CustomIconButton
                        sx={{ p: 0 }}
                        tooltipTitle={'remove'}
                        onClick={() => {
                          moduleData.ri_part_id = null;
                          moduleData.partName = null;
                          moduleData.partNumber = null;
                          moduleData.customerName = null;
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
                          moduleData.ri_part_id = item?._id;
                          moduleData.partName = item?.part_name;
                          moduleData.partNumber = item?.part_number;
                          moduleData.customerName =
                            item?.customer_id?.customer_name;

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

export default PickRiPart;
