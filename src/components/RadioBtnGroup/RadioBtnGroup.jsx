import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import style from './RadioBtnGroup.module.scss';
import { styled } from '@mui/material/styles';
import { Controller, useFormContext } from 'react-hook-form';

const StyledFormLabel = styled(FormLabel)({
    color: '#5F5F63',
    fontSize: '23px',
    fontWeight: '800'
});

const RadioBtnGroup = () => {
    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useFormContext();
    return (
        <div className={style.radioBtnGroupContainer}>
            <Controller
                render={({ field }) => (
                    <RadioGroup
                        row
                        aria-label="gender"
                        defaultValue="male"
                        {...field}
                    >
                        <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="Male"
                        />
                        <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="Female"
                        />
                    </RadioGroup>
                )}
                name="RadioGroup"
                control={control}
            />
        </div>
    );
};

export default RadioBtnGroup;
