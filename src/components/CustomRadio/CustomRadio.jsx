import React from 'react'
import Radio from '@mui/material/Radio';
const CustomRadio = () => {
  return (
    <Radio
    
    checked={false}
    value="a"
    name="radio-buttons"
    inputProps={{ 'aria-label': 'A' }}
  />
  )
}

export default CustomRadio