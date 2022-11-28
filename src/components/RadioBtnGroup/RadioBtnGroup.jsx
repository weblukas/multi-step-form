import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import style from './RadioBtnGroup.module.scss';

const RadioBtnGroup = ({ handleChange, value }) => {
    return (
        <FormControl>
            <RadioGroup
                aria-labelledby="web design group"
                defaultValue="webDesign1"
                name="radio-buttons-group"
                value={value}
                onChange={handleChange}
            >
                <div className={style.radioBtnContainer}>
                    <FormControlLabel
                        value="webDesign1"
                        control={<Radio />}
                        label="Web Design"
                    />
                </div>
                <div className={style.radioBtnContainer}>
                    <FormControlLabel
                        value="webDesign2"
                        control={<Radio />}
                        label="Web Design"
                    />
                </div>
                <div className={style.radioBtnContainer}>
                    <FormControlLabel
                        value="webDesign3"
                        control={<Radio />}
                        label="Web Design"
                    />
                </div>
                <div className={style.radioBtnContainer}>
                    <FormControlLabel
                        value="webDesign4"
                        control={<Radio />}
                        label="Web Design"
                    />
                </div>
            </RadioGroup>
        </FormControl>
    );
};

export default RadioBtnGroup;
