import React from 'react';
import AutocompleteMuiCustom from '../AutocompleteMuiCustom';
import { DivStyled } from '../../../assets/styles/components/DivStyledLableInputs';

interface Iprops {
  id: string;
  value: string | {};
  option_name: string;
  arrayofObj: [] | any;
  label: string;
  last_child?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, value?: any) => void;
  disabled?: boolean;
  showLabel?:boolean;
}

const AutocompleteGridmui = (props: Iprops) => {
  const {
    id,
    value,
    option_name,
    arrayofObj,
    label,
    onChange,
    last_child,
    disabled,
    showLabel = true
  } = props;

  return (
    <DivStyled last_child={last_child}>
      {/* <label htmlFor="iso_certified_trader">{label}</label> */}
      {showLabel && <label htmlFor="iso_certified_trader">{label}</label>}

      <div
        style={{
          borderLeft: '2px solid #ced4da',
          paddingLeft: '1rem',
          width: '100%',
        }}
      >
        <AutocompleteMuiCustom
          id={id}
          value={value}
          option_name={option_name}
          arrayofObj={arrayofObj}
          variant={'standard'}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
    </DivStyled>
  );
};

export default AutocompleteGridmui;
