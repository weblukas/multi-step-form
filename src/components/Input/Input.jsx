import React from 'react'
import { TextField } from '@mui/material'
import style from './Input.module.scss'

const Input = ({label}) => {
  return (
    <TextField id="outlined-basic" label={label} variant="outlined" className={style.input} />
  )
}

export default Input