import moment from 'moment';
import { useLocation, useNavigate } from 'react-router-dom';
import { DatePicker, DateView } from '@mui/x-date-pickers';
import queryString from 'query-string';
import { useQuery } from '../../hooks/UseQuery';

interface IProps {
  label: string;
  views?: readonly DateView[] | undefined;
  format?: string | undefined;
}
const FilterDatePicker = ({ label, views, format }: IProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const date = useQuery('new_date');

  const handleDate = (date: any) => {
    const parsedQuery = queryString.parse(location.search);
    if (date) parsedQuery.new_date = date._d;
    else parsedQuery.new_date = null;
    const query = queryString.stringify(parsedQuery);
    navigate(`${location.pathname}?${query}`);
  };
  return (
    <DatePicker
      onChange={handleDate}
      value={moment(date)}
      views={views}
      label={label}
      format={format}
      slotProps={{ field: { clearable: true } }}
    />
  );
};

export default FilterDatePicker;
