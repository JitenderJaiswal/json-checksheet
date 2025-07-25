import { DivStyled } from '../../../assets/styles/components/DivStyledLableInputs';
// import TimePicker from '../TimePicker';
import { TimePicker } from '@mui/x-date-pickers';
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
}

const GridTimePicker = ({
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
      <TimePicker onChange={onChange} value={moment(value)} />
    </DivStyled>
  );
};

export default GridTimePicker;
