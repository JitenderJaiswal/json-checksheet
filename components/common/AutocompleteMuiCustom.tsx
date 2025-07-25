import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface ifeildType {
  id: string;
  option_name: string;
}

const AutocompleteMuiCustom = ({
  id,
  option_name,
  option_name_2,
  onChange,
  value,
  arrayofObj,
  label,
  sx,
  ...rest
}: {
  id: string;
  value: string | {};
  option_name: string;
  arrayofObj: [] | any;
  label?: string;
  variant?: 'standard';
  option_name_2?: string;
  sx?: any;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, value?: any) => void;
}) => {
  return (
    <>
      <Autocomplete
        id={id}
        options={arrayofObj}
        // getOptionLabel={(option) => {
        //   const properties = option_name.split('.');
        //   return (
        //     properties.reduce(
        //       (obj: any, property) => obj?.[property],
        //       option,
        //     ) || ''
        //   );
        // }}
        getOptionLabel={(option: any) =>
          option_name_2
            ? `${option?.[option_name] || ''} ${option?.[option_name_2] || ''}`
            : option?.[option_name] || ''
        }
        isOptionEqualToValue={(option: any, value: any) =>
          option?.[option_name] === value?.[option_name] || true
        }
        // isOptionEqualToValue={(option, value) => {
        //   const properties = option_name.split('.');
        //   const optionValue = properties.reduce(
        //     (obj: any, property) => obj?.[property],
        //     option,
        //   );
        //   const selectedValue = properties.reduce(
        //     (obj: any, property) => obj?.[property],
        //     value,
        //   );
        //   return optionValue === selectedValue || true;
        // }}
        value={value}
        onChange={(e: any, value) => onChange(e, value)}
        renderInput={(params) => (
          <TextField
            {...params}
            InputProps={{
              ...params.InputProps,
              disableUnderline: true,
            }}
            label={label}
            {...rest}
          />
        )}
        sx={{ ...sx }}
      />
    </>
  );
};

export default AutocompleteMuiCustom;
