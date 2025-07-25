import React, { useState, useEffect } from 'react';
import InputMuiCustom from './InputMuiCustom';

interface Iprops {
  placeholder: string;
  _ref?: any;
  type: string;
  name: string;
  defaultValue?: any;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  helperText?: string;
  InputProps?: object;
  variant?: 'filled' | 'outlined';
  sx?: {};
  defaultvalue: any;
  onUpdate: any;
}
export const ControlledMuiInput = (props: Iprops) => {
  const {
    placeholder,
    _ref,
    type,
    name,
    defaultValue,
    onBlur,
    onChange,
    helperText,
    variant,
    onUpdate,
    ...rest
  } = props;

  const [data, setData] = useState(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
    onUpdate(e.target.value);
  };

  return (
    <InputMuiCustom
      type={type}
      name={name}
      placeholder={placeholder}
      value={data}
      onChange={handleChange}
    />
  );
};
