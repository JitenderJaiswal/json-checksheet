import { Pagination, Stack } from '@mui/material';

interface IProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPage: number;
}

const StatePagination = ({ page, totalPage, setPage }: IProps) => {
  return (
    <Stack mt={5} alignItems="center">
      <Pagination
        variant="outlined"
        page={+page}
        count={totalPage}
        onChange={(_, page) => setPage(page)}
      />
    </Stack>
  );
};

export default StatePagination;
