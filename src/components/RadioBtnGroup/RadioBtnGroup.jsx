import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import style from './RadioBtnGroup.module.scss'

const RadioBtnGroup = () => {
    return (
        <FormControl >
            <FormLabel id="row-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup row aria-labelledby="radio-buttons-group-label" defaultValue="male" name="row-radio-buttons-group" >
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
            </RadioGroup>
        </FormControl>
    );
};

export default RadioBtnGroup;
