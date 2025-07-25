import React from 'react';

interface InputFieldType {
  id: string;
  name: string;
  html_for: string;
  label_name: string;
  input_type: string;
  value?: any;
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  focusType: 'onchange' | 'onblur';
  disabled?: boolean;
}

const InputHtmlCustom = ({
  id,
  name,
  value,
  label_name,
  focusType,
  html_for,
  input_type,
  handleOnBlur,
  handleOnChange,
  ...rest
}: InputFieldType) => {
  return (
    <>
      {focusType === 'onchange' && (
        <>
          <label htmlFor={html_for}>{label_name}</label>
          <input
            id={id}
            name={name}
            type={input_type}
            onChange={handleOnChange}
            value={value || ''}
            {...rest}
          />
        </>
      )}
      {focusType === 'onblur' && (
        <>
          <label htmlFor={html_for}>{label_name}</label>
          <input
            id={id}
            name={name}
            type={input_type}
            onBlur={handleOnBlur}
            defaultValue={value || ''}
            {...rest}
          />
        </>
      )}
    </>
  );
};

export default InputHtmlCustom;
