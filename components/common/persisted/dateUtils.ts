import moment from 'moment';
import queryString from 'query-string';
import { useNavigate, useLocation } from 'react-router-dom';

export const usePersistedDate = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const updateQueryStringWithDate = (date: any) => {
    const parsedQuery = queryString.parse(location.search);
    parsedQuery.date = date.toString();
    const query = queryString.stringify(parsedQuery);
    navigate(`${location.pathname}?${query}`);
  };

  const getNextMonthDate = (currentDate: any) => {
    return moment(currentDate).add(1, 'month').toString();
  };

  const getPreviousMonthDate = (currentDate: any) => {
    return moment(currentDate).subtract(1, 'month').toString();
  };

  return { updateQueryStringWithDate, getNextMonthDate, getPreviousMonthDate };
};
