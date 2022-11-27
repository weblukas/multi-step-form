import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import style from './SingleCheckbox.module.scss';

const SingleCheckbox = ({ label, checked, onChange, name }) => {
    return (
        <div className={style.checkboxContainer}>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked}
                        onChange={onChange}
                        name={name}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label={label}
            />
        </div>
    );
};

export default SingleCheckbox;
