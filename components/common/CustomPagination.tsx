import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { Pagination } from '@mui/material';

import { useQuery } from '../../hooks/UseQuery';
import { Stack } from '@mui/system';
import { useEffect } from 'react';

const CustomPagination = ({ totalPage }: { totalPage: number }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const page = useQuery('page') || 1;

  useEffect(() => {
    if (page !== 1) {
      handlePage(1);
    }
  }, [totalPage]);

  const handlePage = (page: number) => {
    const parsedQuery = queryString.parse(location.search);
    parsedQuery.page = page.toString();
    const query = queryString.stringify(parsedQuery);
    navigate(`${location.pathname}?${query}`);
  };
  return (
    <Stack mt={5} alignItems="center">
      <Pagination
        variant="outlined"
        page={+page}
        count={totalPage}
        onChange={(_, page) => handlePage(page)}
      />
    </Stack>
  );
};

export default CustomPagination;
