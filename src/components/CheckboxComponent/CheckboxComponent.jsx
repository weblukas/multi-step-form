import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import style from './CheckboxComponent.module.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const checkboxTheme = createTheme({
    palette: {
        primary: {
            main: '#6B59D3'
        }
    },
   
});

const CheckboxComponent = ({ onChange, checked, name, inputProps, label }) => {
    return (
        <div className={style.outerContainer}>
            <ThemeProvider theme={checkboxTheme}>
                <FormControlLabel
                    className={`${style.checkboxContainer} ${checked && style.checked}`}
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
            </ThemeProvider>
        </div>
    );
};

export default CheckboxComponent;
