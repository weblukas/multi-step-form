import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import style from './RadioForm.module.scss';
import { styled } from '@mui/material/styles';

const StyledFormLabel = styled(FormLabel)({
    color: '#5F5F63',
    fontSize: '23px',
    fontWeight: '800'
});

const RadioForm = () => {
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className={style.radioBtnGroupContainer}>
            <FormControl>
                <StyledFormLabel id="row-radio-buttons-group-label">
                    Gender
                </StyledFormLabel>
                <RadioGroup
                    row
                    aria-labelledby="radio-buttons-group-gender"
                    defaultValue="male"
                    name="row-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel
                        value="male"
                        control={<Radio sx={{color: '#6684F2'}}/>}
                        label="Male"
                        sx={{color:'#5F5F63' }}
                    />
                    <FormControlLabel
                        value="female"
                        control={<Radio sx={{color: '#6684F2'}}/>}
                        label="Female"
                        sx={{color:'#5F5F63'}}
                    />
                </RadioGroup>
            </FormControl>
        </div>
    );
};

export default RadioForm;
