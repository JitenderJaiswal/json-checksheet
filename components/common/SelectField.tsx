import styled from 'styled-components';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';

const StyledSelect = styled(Select)(({ theme }) => ({
  textTransform: 'uppercase',
  marginTop: '0px !important',
  '.MuiSelect-select': {
    outline: 'none',
  },

  '& .MuiFilledInput-root': {
    backgroundColor: '#fafafa',
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
  },

  '& .MuiInputBase-input': {
    '&:focus': {
      backgroundColor: '#fafafa',
    },
  },
  '& .MuiFilledInput-underline': {
    '&:after': {
      border: '1px solid #c80202',
    },
  },
  '& .MuiFormLabel-root': {
    marginLeft: '5px',
  },
  '& .MuiFormLabel-root.Mui-focused': {
    color: '#c80202',
    marginLeft: '6px',
  },
}));
interface Iprops {
  name: string;
  children: any;
  value: any;
  onChange?:
    | ((event: SelectChangeEvent<unknown>, child: React.ReactNode) => void)
    | undefined;
  label?: string;
  variant?: 'standard' | 'outlined' | 'filled' | undefined;
  disableUnderline?: boolean;
  InputProps?: object;
  sx?: object;
  disabled?: boolean;
}
function CustomSelect(props: Iprops) {
  const {
    children,
    name,
    value,
    label,
    variant,
    disableUnderline,
    sx,
    onChange,
    ...rest
  } = props;
  return (
    <Box sx={sx}>
      <FormControl fullWidth variant={variant}>
        <InputLabel>{label}</InputLabel>
        <StyledSelect
          MenuProps={{ disableScrollLock: true }}
          label={label}
          name={name}
          value={value}
          onChange={onChange}
          disableUnderline={disableUnderline || false}
          {...rest}
        >
          {children}
        </StyledSelect>
      </FormControl>
    </Box>
  );
}
export default CustomSelect;
