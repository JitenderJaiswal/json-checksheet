import React from 'react';
import CustomSelect from '../SelectField';
import { DivStyled } from '../../../assets/styles/components/DivStyledLableInputs';
import { SelectChangeEvent } from '@mui/material';

interface Iprop {
  children: any;
  value: string;
  name: string;
  lable: string;
  onChange?:
    | ((event: SelectChangeEvent<unknown>, child: React.ReactNode) => void)
    | undefined;
}
const SelectGridMui = (prop: Iprop) => {
  const { children, value, lable, onChange, name } = prop;
  return (
    <DivStyled>
      <label htmlFor="iso_certified_trader">{lable}</label>
      <div
        style={{
          borderLeft: '2px solid #ced4da',
          paddingLeft: '0.5rem',
          width: '100%',
        }}
      >
        <CustomSelect
          name={name}
          value={value}
          onChange={onChange}
          label={''}
          variant={'standard'}
          disableUnderline={true}
        >
          {children}
        </CustomSelect>
      </div>
    </DivStyled>
  );
};

export default SelectGridMui;
