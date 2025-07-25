import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const TextFieldCustom = styled(TextField)(({ theme }) => ({
  width: '100%',
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(0.3),
      padding: '7px',
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
      marginLeft: '6px',
    },
    '& .MuiFormLabel-root.Mui-focused': {
      color: '#c80202',
      marginLeft: '6px',
    },
  },
}));

interface iprops {
  placeholder: string;
  value?: string | number | undefined | null;
  _ref?: any;
  type: string;
  name: string;
  defaultValue?: string | number | null | undefined;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  helperText?: string;
  InputProps?: object;
  variant?: 'filled' | 'outlined';
  autoComplete?: 'true' | 'false';
  sx?: {};
}

const InputMuiCustom = (props: iprops) => {
  const {
    placeholder,
    value,
    _ref,
    type,
    name,
    defaultValue,
    onBlur,
    onChange,
    autoComplete,
    helperText,
    variant,
    sx,
    ...rest
  } = props;

  return (
    <div>
      {onBlur ? (
        <TextFieldCustom
          name={name}
          variant={variant ? variant : 'filled'}
          label={placeholder}
          type={type}
          onBlur={onBlur}
          inputRef={_ref}
          defaultValue={defaultValue}
          helperText={helperText}
          autoComplete={autoComplete || 'false'}
          sx={sx}
          {...rest}
        />
      ) : (
        <TextFieldCustom
          name={name}
          variant={variant ? variant : 'filled'}
          value={value ?? ''}
          label={placeholder}
          type={type}
          onChange={onChange}
          inputRef={_ref}
          helperText={helperText}
          autoComplete={autoComplete}
          sx={sx}
          {...rest}
        />
      )}
    </div>
  );
};

export default InputMuiCustom;
