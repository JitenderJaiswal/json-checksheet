import React from 'react';
import { Typography, FormControlLabel, Checkbox } from '@mui/material';
import styled from 'styled-components';
import moment from 'moment';
import CheckBoxCustomMui from '../../../pages/cp/components/common/ui/CheckBox';
import DatePickerMui from '../DatePickerMui';
import InputMuiCustom from '../inputs/InputMuiCustom';

const StyledTypography = styled(Typography)`
  padding: 8px 8px;
  font-size: 12px !important;
  background-color: #f8f9fa;
  font-weight: 600 !important;
  color: #333;
  flex-grow: 1;
`;

export const DynamicFields: any = {
  label: (field: any) => (
    <StyledTypography variant="subtitle1">{field.content}</StyledTypography>
  ),
  InputMuiCustom: (field: any) => (
    <InputMuiCustom
      type={field.inputType}
      name={field.name}
      placeholder={field.placeholder}
      required={field.required}
      onChange={field.onChange}
      value={field.value}
      disabled={field.disabled}
      variant={field.variant}
    />
  ),
  CheckBoxCustomMui: (field: any) => (
    <CheckBoxCustomMui
      key={field.name}
      name={field.name}
      label={field.label}
      checked={field.checked}
      onClick={field.onClick}
    />
  ),
  DatePickerMui: (field: any) => (
    <DatePickerMui
      label={field.label}
      value={field.value ? moment(field.value) : null}
      onChange={field.onChange}
    />
  ),
};
