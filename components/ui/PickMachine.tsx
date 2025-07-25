import React, { useState } from 'react';
import { TableBody, TableCell, TableRow } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Add from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import useDebounce from '../../hooks/useDebounce';
import { TableCustom, StatePagination } from '../../components/common';
import formatDate from '../../components/common/formatDate';
import { CustomIconButton } from '../../components/common/button/CustomIconButton';
import StateCustomTable from '../../components/common/StateCustomTable';


interface IMachine {
  _id?: string;
  machine_no: string | null;
  machine_name: string | null;
  locationModel_id?:any;
  location2_id?:any;
  location3_id?:any;
  location4_id?:any;
}
const tableHeaderObj = [
  [
    { text: '#', rowspan: 1, colspan: 1 },
    { text: 'Machine Number', rowspan: 1, colspan: 1 },
    { text: 'Machine Name', rowspan: 1, colspan: 1 },
    { text: 'Location', rowspan: 1, colspan: 1 },
    { text: 'Location II', rowspan: 1, colspan: 1 },
    { text: 'Location III', rowspan: 1, colspan: 1 },
    { text: 'Location IV', rowspan: 1, colspan: 1 },
    { text: 'Action', rowspan: 1, colspan: 1 },
  ],
];

const filterOptions = [{ value: 'machine_no', name: 'A-Z' }];

const PickMachine = (props: any) => {
  const { moduleData, machineIdx } = props;
  const [page, setPage] = useState(1);
  const [machineData, setMachineData] = useState<IMachine[]>([]);
  const [perPage, setPerPage] = useState();
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState<string>('');
  const [filter, setFilter] = useState<string>('machine_no');
  const navigate = useNavigate();
  const [render, setRender] = useState(false);
  const fetchPartData = () => {
    axios
      .get(
        `/api/machineRoutes?page=${page}&sortBy=${filter}&search=${search}&perPage=${10}`
      )
      .then((res) => {
        setPerPage(res.data?.perPage);
        setMachineData(res.data?.results);
        setTotalPages(res.data?.pages);
      })
      .catch((err) => console.log(err));
  };

  useDebounce(fetchPartData, 300, [page, filter, search]);

  return (
    <StateCustomTable
      filterOptions={filterOptions}
      {...{ search, setSearch, filter, setFilter }}
      label="Search Machine"
    >
      <TableCustom tableHeaderObj={tableHeaderObj}>
        <TableBody>
          {machineData &&
            machineData.map((item: IMachine, index: number) => (
              <React.Fragment key={item?._id}>
                <TableRow>
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{item.machine_no}</TableCell>
                  <TableCell align="center">{item.machine_name}</TableCell>
                  <TableCell align="center">
                    {item?.locationModel_id?.location_name}
                  </TableCell>
                  <TableCell align="center">
                    {item?.location2_id?.location_name}
                  </TableCell>
                  <TableCell align="center">
                    {item?.location3_id?.location_name}
                  </TableCell>
                  <TableCell align="center">
                    {item?.location4_id?.location_name}
                  </TableCell>
                  <TableCell align="center">
                    {moduleData.machine_id === item._id ? (
                      <CustomIconButton
                        sx={{ p: 0 }}
                        tooltipTitle={'remove'}
                        onClick={() => {
                          moduleData.machine_id = null;
                          moduleData.machineName = null;
                          moduleData.machineNumber = null;
                          moduleData.modelName = null;
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
                          moduleData.machine_id = item?._id;
                          moduleData.machineName = item?.machine_name;
                          moduleData.machineNumber = item?.machine_no;
                          moduleData.modelName =item?.locationModel_id?.location_name || '';
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

export default PickMachine;
