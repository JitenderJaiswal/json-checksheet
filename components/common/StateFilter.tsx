import MenuItem from '@mui/material/MenuItem';
import CustomSelect from './SelectField';

interface option {
  name: string | number;
  value: string | number;
}
interface IProps {
  options: option[];
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  label?: string;
  sx?: any;
}

const StateFilter = ({
  sx,
  label = 'Filter',
  options,
  filter,
  setFilter,
}: IProps) => {
  return (
    <CustomSelect
      name="filter"
      sx={sx}
      onChange={(e: any) => setFilter(e.target.value)}
      label={label}
      value={filter}
      variant="filled"
    >
      <MenuItem value="">None</MenuItem>
      {options.map((option) => (
        <MenuItem value={option.value} key={option.name}>
          {option.name}
        </MenuItem>
      ))}
    </CustomSelect>
  );
};

export default StateFilter;
