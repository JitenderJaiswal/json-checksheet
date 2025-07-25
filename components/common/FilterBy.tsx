import MenuItem from '@mui/material/MenuItem';
import { SelectChangeEvent } from '@mui/material/Select';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '../../hooks/UseQuery';
import CustomSelect from './SelectField';

interface option {
  name: string | number;
  value: string | number;
}
interface IProps {
  options: option[];
  name?: string;
  variant?: 'filled' | 'standard' | 'outlined';
  label?: string;
  sx?: any;
}

const FilterBy = ({
  options,
  sx,
  variant = 'filled',
  name = 'filter',
  label = 'Filter',
}: IProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const filter = useQuery(name);
  const handleChange = (e: SelectChangeEvent) => {
    const parsedQuery = queryString.parse(location.search);
    parsedQuery[name] = e.target.value;
    const query = queryString.stringify(parsedQuery);
    navigate(`${location.pathname}?${query}`);
  };
  return (
    <CustomSelect
      name="filter"
      sx={{
        width: { xs: '100%', sm: 'auto' },
        maxWidth: '300px',
        minWidth: '150px',
        ...sx,
      }}
      onChange={(e: any) => handleChange(e)}
      label={label}
      value={filter}
      variant={variant}
    >
      <MenuItem value="">None</MenuItem>
      {options?.map((option) => (
        <MenuItem value={option.value} key={option.name}>
          {option.name}
        </MenuItem>
      ))}
    </CustomSelect>
  );
};

export default FilterBy;
