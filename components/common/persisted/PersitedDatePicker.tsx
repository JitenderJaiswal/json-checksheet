import React, { useEffect } from 'react';
import moment from 'moment';
import { useLocation } from 'react-router-dom';
import { DatePicker, DateView } from '@mui/x-date-pickers';
import { useQuery } from '../../../hooks/UseQuery';
import { usePersistedDate } from './dateUtils';
import { CustomIconButton } from '../button/CustomIconButton';
import { CiSquareChevLeft } from 'react-icons/ci';
import { CiSquareChevRight } from 'react-icons/ci';

interface IProps {
  label: string;
  views?: readonly DateView[] | undefined;
  format?: string | undefined;
}

const PersitedDatePicker = ({ label, views, format }: IProps) => {
  const location = useLocation();
  const date = useQuery('date');
  const { updateQueryStringWithDate, getNextMonthDate, getPreviousMonthDate } =
    usePersistedDate();

  useEffect(() => {
    if (!date) {
      updateQueryStringWithDate(new Date());
    }
  }, []);

  const handleDateChange = (selectedDate: any) => {
    updateQueryStringWithDate(selectedDate._d);
  };

  const handleNextMonth = () => {
    const nextMonthDate = getNextMonthDate(date);
    updateQueryStringWithDate(nextMonthDate);
  };

  const handlePreviousMonth = () => {
    const previousMonthDate = getPreviousMonthDate(date);
    updateQueryStringWithDate(previousMonthDate);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <DatePicker
        onChange={handleDateChange}
        value={moment(date)}
        views={views}
        label={label}
        format={format}
      />
      <CustomIconButton
        sx={{ p: 0 }}
        tooltipTitle={'Previous Month'}
        onClick={handlePreviousMonth}
      >
        <CiSquareChevLeft style={{ color: '#adb5bd', fontSize: '5rem' }} />
      </CustomIconButton>
      <CustomIconButton
        sx={{ p: 0 }}
        tooltipTitle={'Next Month'}
        onClick={handleNextMonth}
      >
        <CiSquareChevRight style={{ color: '#adb5bd', fontSize: '5rem' }} />
      </CustomIconButton>
    </div>
  );
};

export { PersitedDatePicker };
