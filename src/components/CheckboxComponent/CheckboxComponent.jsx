import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import style from './CheckboxComponent.module.scss';

const CheckboxComponent = ({ onChange, checked, name, inputProps, label }) => {
    return (
        <div>
            <FormControlLabel
                className={style.checkboxContainer}
                control={
                    <Checkbox
                        checked={checked}
                        onChange={onChange}
                        name={name}
                        inputProps={inputProps}
                    />
                }
                label={label}
            />
        </div>
    );
};

export default CheckboxComponent;
