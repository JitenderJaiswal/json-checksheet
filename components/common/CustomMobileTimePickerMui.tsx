import { MobileTimePicker, TimeValidationError } from '@mui/x-date-pickers';

import moment from 'moment';
import React from 'react';

interface Iprops {
  onChange?: (date: any) => void;
  value: moment.Moment | null;
  views: any[];
  ampm: boolean;
  openTo: string;
}
const CustomMobileTimePickerMui = (props: Iprops) => {
  const { value, onChange, openTo, views, ...rest } = props;
  return (
    <>
      <MobileTimePicker
        value={moment(value)}
        onChange={onChange}
        openTo="hours"
        views={views}
        {...rest}
      />
    </>
  );
};

export default CustomMobileTimePickerMui;
