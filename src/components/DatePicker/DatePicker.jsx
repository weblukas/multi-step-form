import React from 'react'
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import style from './DatePicker.module.scss';
import CalendarIcon from '../CalendarIcon/CalendarIcon';

const DatePicker = ({date, handleDate }) => {

  return (
    <div> <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DateTimePicker
    className={style.picker}
      renderInput={(props) => <TextField {...props} />}
      value={date}
      onChange={handleDate}
      componentsProps={{
    tabs: {
      dateRangeIcon: <CalendarIcon />,
    },
  }}
    />
  </LocalizationProvider></div>
  )
}

export default DatePicker