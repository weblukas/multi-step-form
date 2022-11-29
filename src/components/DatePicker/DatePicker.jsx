import React from 'react'
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const DatePicker = () => {

    const [value, setValue] = React.useState(dayjs('2022-04-07'));
  return (
    <div> <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DateTimePicker
      renderInput={(props) => <TextField {...props} />}
      label="DateTimePicker"
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
    />
  </LocalizationProvider></div>
  )
}

export default DatePicker