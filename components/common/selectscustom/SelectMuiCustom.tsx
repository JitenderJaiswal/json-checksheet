import React from 'react';
import CustomSelect from '../SelectField';
import { DivStyled } from '../../../assets/styles/components/DivStyledLableInputs';
import { SelectChangeEvent } from '@mui/material';

interface Iprop {
  children: any;
  value: string;
  name: string;
  placeholder: string;
  variant?: 'filled' | 'outlined';
  onChange?: any;
}
const SelectMuiCustom = (prop: Iprop) => {
  const { children, value, onChange, name, placeholder, variant } = prop;
  return (
    <CustomSelect
      name={name}
      value={value}
      onChange={onChange}
      label={placeholder}
      variant={variant ? variant : 'filled'}
      disableUnderline={true}
    >
      {children}
    </CustomSelect>
  );
};

export default SelectMuiCustom;
