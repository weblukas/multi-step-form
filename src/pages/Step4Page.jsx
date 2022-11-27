import React, { useState } from 'react';
import Stepper from '../components/Stepper/Stepper';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import Heading from '../components/Heading/Heading';
import Paragraph from '../components/Paragraph/Paragraph';
import HorizontalDivider from '../components/HorizontalDivider/HorizontalDivider';
import style from './Step4Page.module.scss';
import MSelect from '../components/Select/Select';
import { budget, support } from '../data';
import Subheading from '../components/Subheading/Subheading';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Step4Page = () => {
    const selectStyles = {
        control: (style) => ({ ...style, height: 75 })
    };

    const[selectedBudget, setSelectedBudget] = useState()
    const [checked, setChecked] = React.useState({
        coding: false,
        mobileApp: false,
        mobileDesign: false
    });

    const handleChange = (e) => {
        setChecked({
            ...checked,
            [e.target.name]: e.target.checked
        });
        
    };

    const handleSelect = (selectedOption)=>{
      setSelectedBudget(selectedOption)
      console.log(selectedBudget)
    }

    const { coding, mobileApp, mobileDesign } = checked;

    return (
        <div className={style.servicesContainer}>
            <div className={style.flexContainer}>
                <Stepper progress="4" />
                <ProgressBar progress="4" />
            </div>
            <Heading>Select your budget</Heading>
            <Paragraph>
                Tation argumentum et usu, dicit viderer evertitur te has. Eu
                dictas concluda- turque usu, facete detracto patrioque an per,
                lucilius pertinacia eu vel."
            </Paragraph>
            <div className={style.container}>
                <img src="budgetIcon.png" alt="" />
                <Subheading>Budget</Subheading>
            </div>
            <MSelect
                options={budget}
                styles={selectStyles}
                defaultValue={budget[0]}
                onChange={handleSelect}
            />
            <div className={style.container}>
                <img src="msg2Icon.png" alt="" />
                <Subheading>Required Support</Subheading>
            </div>
            <MSelect
                options={support}
                styles={selectStyles}
                defaultValue={support[0]}
            />
            <Subheading>Optimization and Accessibility</Subheading>

            <FormGroup className={style.formGroup}>
                <FormControlLabel
                className={style.checkboxContainer}
                    control={
                        <Checkbox
                            checked={coding}
                            onChange={handleChange}
                            name="coding"
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    }
                    label="coding"
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            label="Mobile APP"
                            onChange={handleChange}
                            checked={mobileApp}
                            name="mobileApp"
                        />
                    }
                    label="mobileApp"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            label="Mobile Design"
                            onChange={handleChange}
                            checked={mobileDesign}
                            name="mobileDesign"
                        />
                    }
                    label="mobileDesign"
                />
            </FormGroup>
            <HorizontalDivider className={style.horizontalDivider} />
        </div>
    );
};

export default Step4Page;
