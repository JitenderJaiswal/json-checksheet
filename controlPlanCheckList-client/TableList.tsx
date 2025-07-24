import React, { useState } from 'react';
import axios from 'axios';
import { AddButton } from '../../../components/common/button/CustomButtons';
import ChildHeader from '../../../components/ui/ChildHeader';
import { CustomPagination } from '../../../components/common';
import { PersitedDatePicker } from '../../../components/common/persisted/PersitedDatePicker';
import { useQuery } from '../../../hooks/UseQuery';
import useConfirm from '../../../components/common/useConfirm';
import { useNavigate } from 'react-router-dom';
import AdminTable from './components/tablelist/AdminTable';
import useDebounce from '../../../hooks/useDebounce';
import { Stack } from '@mui/material';
import { moduleConstant } from './constant';

const List = () => {
  const date = useQuery('date');
  const [tableData, setTableData] = useState<any[]>([]);
  const [render, setRender] = useState(false);
  const [perPage, setPerPage] = useState<number>(10);
  const [totalPages, setTotalPages] = useState(0);
  const page = useQuery('page') || 1;
  const navigate = useNavigate();
  const [DialogDelete, confirmDelete] = useConfirm(
    'DELETE ',
    'Are you sure you want to delete this document?'
  );

  const fetchData = async () => {
    if (!date) return;
    axios
      .get(
        `${moduleConstant.apiConstant}/monthly/${date}?page=${page}&perPage=${perPage}`
      )
      .then((res) => {
        setTableData(res?.data?.results);
        setPerPage(res?.data?.perPage);
        setTotalPages(res?.data?.pages);
      })
      .catch((err) => console.log(err));
  };

  const deleteDocument = async (id: string) => {
    const ans = await confirmDelete();
    if (!ans) return;
    axios
      .delete(`${moduleConstant.apiConstant}/${id}`)
      .then(() => {
        alert('document deleted successfully');
        setRender((prev) => !prev);
      })
      .catch((err) => {
        console.log(err);
      });
    return;
  };

  useDebounce(fetchData, 500, [page, render, date]);

  return (
    <>
      <ChildHeader text={moduleConstant.heading}>
        <AddButton
          onClick={() => navigate(`${moduleConstant.createNavigation}`)}
          label="NEW CHECKLIST"
        />
      </ChildHeader>
      <Stack
        direction="row"
        sx={{
          justifyContent: 'start',
          alignItems: 'center',
          gap: 2,
          margin: 2,
        }}
      >
        <PersitedDatePicker label="Search By Month" views={['month', 'year']} />
      </Stack>

      <AdminTable
        {...{
          deleteDocument,
          tableData,
          page,
          perPage,
        }}
      />
      <CustomPagination totalPage={totalPages} />
      <DialogDelete isSubmitContent={false} />
    </>
  );
};

export default List;
