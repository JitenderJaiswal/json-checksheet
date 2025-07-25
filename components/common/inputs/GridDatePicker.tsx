import { DivStyled } from '../../../assets/styles/components/DivStyledLableInputs';
import DatePickerMui from '../DatePickerMui';
import moment from 'moment';

interface Iprops {
  html_for: string;
  label_name: string;
  value?: any;
  onChange: (e: any) => void;
  last_child?: number;
  first_child?: number;
  views?: any;
  disabled?: boolean;
  minDate?: any;
  maxDate?: any;
}

const GridDatePicker = ({
  onChange,
  value,
  html_for,
  label_name,
  last_child,
  first_child,
  ...rest
}: Iprops) => {
  return (
    <DivStyled last_child={last_child} fist_child={first_child}>
      <label htmlFor={html_for}>{label_name}</label>
      <DatePickerMui onChange={onChange} value={moment(value)} {...rest} />
    </DivStyled>
  );
};

export default GridDatePicker;
