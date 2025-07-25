import { DivStyled } from '../../../assets/styles/components/DivStyledLableInputs';
import DatePickerMui from '../DatePickerMui';
import moment from 'moment';
import CustomSelect from '../SelectField';
import { SelectChangeEvent } from '@mui/material';

interface Iprops {
  html_for: string;
  label_name: string;
  value?: string;
  onChange?:
    | ((event: SelectChangeEvent<unknown>, child: React.ReactNode) => void)
    | undefined;
  last_child?: number;
  first_child?: number;
  disabled?: boolean;
  children: any;
  name: string;
}

const GridSelect = ({
  onChange,
  value,
  name,
  html_for,
  label_name,
  last_child,
  first_child,
  children,
}: Iprops) => {
  return (
    <DivStyled last_child={last_child} fist_child={first_child}>
      <label htmlFor={html_for}>{label_name}</label>
      <CustomSelect onChange={onChange} value={value} name={name}>
        {children}
      </CustomSelect>
    </DivStyled>
  );
};

export default GridSelect;
