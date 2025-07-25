import React from 'react';
import DatePickerMui from '../DatePickerMui';
import { DivStyled } from '../../../assets/styles/components/DivStyledLableInputs';
import { SelectChangeEvent } from '@mui/material';

interface Iprop {
  value: string | null | object;
  lable: string;
  //   onChange:
  //     | ((event: SelectChangeEvent<unknown>, child: React.ReactNode) => void)
  //     | undefined
  //     | null;
  onChange: any;
}
const DateGridMui = (prop: Iprop) => {
  const { value, lable, onChange } = prop;

  return (
    <DivStyled>
      <label>{lable}</label>
      <div
        style={{
          borderLeft: '2px solid #ced4da',
          paddingLeft: '0.5rem',
          width: '100%',
        }}
      >
        <DatePickerMui
          onChange={onChange}
          value={value}
          InputProps={{
            disableUnderline: true,
          }}
          // sx={{ border: 'none' }}
        />
      </div>
    </DivStyled>
  );
};

export default DateGridMui;
