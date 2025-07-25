// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// export default function DatePickerMui({
//   label,
//   onChange,
//   value,
//   format,
//   views = ['year', 'month', 'day'],
//    ...rest
// }: {
//   label?: string;
//   onChange: (date?: any) => void;
//   value: string | null | object;
//   InputProps?: object;
//   sx?: object;
//   maxDate?: any;
//   minDate?: any;
//   views?: any;
//   format?: any;
// }) {
//   return (
//     <DatePicker
//       label={label}
//       onChange={(e: any) => onChange(e)}
//       value={value}
//       views={views}
//       format={format || 'DD-MM-YYYY'}
//       {...rest}
//     />
//   );
// }

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';

export default function DatePickerMui({
  label,
  onChange,
  value,
  format,
  views = ['year', 'month', 'day'],
  minDate,
  maxDate,
  ...rest
}: {
  label?: string;
  onChange: (date?: any) => void;
  value: string | null | object;
  InputProps?: object;
  sx?: object;
  maxDate?: any;
  minDate?: any;
  views?: any;
  format?: any;
}) {
  return (
    <DatePicker
      label={label}
      onChange={(e: any) => onChange(e)}
      value={value}
      views={views}
      format={format || 'DD-MM-YYYY'}
      minDate={minDate || null}
      maxDate={maxDate || null}
      // renderInput={(params) => <TextField {...params} />}
      {...rest}
    />
  );
}
