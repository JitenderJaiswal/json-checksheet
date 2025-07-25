import React from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';

const StyleTextFiled = styled(TextField)`
  .MuiFilledInput-root {
    background-color: #fff9db !important;
  }

  .MuiFilledInput-root:hover {
    background-color: #fff9db !important;
  }
  /*  .MuiInputBase-input:focus {
  background-color: #fafafa !important;
} */

  .MuiFilledInput-underline:after {
    border: 1px solid #c80202 !important;
  }

  .MuiFormLabel-root {
    padding: 0rem !important;
  }
`;
const DescriptionTextfield = ({
  onChange,
  value,
  label,
  name,
  minRows,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label?: string;
  name?: string;
  minRows?: any;
}) => {
  return (
    <>
      <StyleTextFiled
        type="text"
        variant="filled"
        name={name ? name : 'description'}
        multiline={true}
        minRows={minRows ? minRows : 12}
        maxRows={20}
        className="textarea-field"
        label={label ? label : 'Complaint Description'}
        style={{
          margin: '1.3rem 0.7rem 0rem 0.5rem',
          paddingRight: '1.2rem',
          width: '100%',
        }}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

export default DescriptionTextfield;
