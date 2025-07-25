import React from 'react';
import InputHtmlCustom from './InputHtmlCustom';

import { DivStyled } from '../../../assets/styles/components/DivStyledLableInputs';

interface Iprops {
  id: string;
  name: string;
  html_for: string;
  label_name: string;
  input_type: string;
  value?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  focusType: 'onchange' | 'onblur';
  last_child?: number;
  first_child?: number;
  disabled?: boolean;
}

const GridInputs = ({
  id,
  onChange,
  value,
  focusType,
  html_for,
  label_name,
  name,
  input_type,
  last_child,
  first_child,
  ...rest
}: Iprops) => {
  return (
    <DivStyled last_child={last_child} fist_child={first_child}>
      <InputHtmlCustom
        id={id}
        name={name}
        label_name={label_name}
        input_type={input_type}
        html_for={html_for}
        handleOnChange={onChange}
        handleOnBlur={onChange}
        value={value}
        focusType={focusType}
        {...rest}
      />
    </DivStyled>
  );
};

export default GridInputs;
