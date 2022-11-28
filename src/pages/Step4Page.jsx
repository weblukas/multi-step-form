import React, { useState } from 'react';
import Stepper from '../components/Stepper/Stepper';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import Heading from '../components/Heading/Heading';
import Paragraph from '../components/Paragraph/Paragraph';
import HorizontalDivider from '../components/HorizontalDivider/HorizontalDivider';
import style from './Step4Page.module.scss';
import MultiSelect from '../components/MultiSelect/MultiSelect';
import { budget, support } from '../data';
import Subheading from '../components/Subheading/Subheading';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import Textarea from '../components/Textarea/Textarea';

const Step4Page = () => {
    const navigate = useNavigate();
    const selectStyles = {
        control: (style) => ({ ...style, height: 75 })
    };

    const [selectedBudget, setSelectedBudget] = useState();
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

    const handleNext = () => {
        navigate('/step-5');
    };

    const handleSelect = (selectedOption) => {
        setSelectedBudget(selectedOption);
        console.log(selectedBudget);
    };

    const { coding, mobileApp, mobileDesign } = checked;

    return (
        <section className={style.servicesContainer}>
            <div className={style.flexContainer}>
                <Stepper progress="4" />
                <ProgressBar progress="4" />
            </div>
            <Heading fontSize='small'>Select your budget</Heading>
            <Paragraph fontSize='medium'>
                Tation argumentum et usu, dicit viderer evertitur te has. Eu
                dictas concluda- turque usu, facete detracto patrioque an per,
                lucilius pertinacia eu vel."
            </Paragraph>
            <div className={style.container}>
                <img src="budgetIcon.png" alt="" />
                <Subheading fontSize='large' fontWeight='weight700' color='grey300'>Budget</Subheading>
            </div>
            <MultiSelect
                options={budget}
                styles={selectStyles}
                defaultValue={budget[0]}
                onChange={handleSelect}
            />
            <div className={style.container}>
                <img src="msg2Icon.png" alt="" />
                <Subheading fontSize='large' fontWeight='weight700' color='grey300'>Required Support</Subheading>
            </div>
            <MultiSelect
                options={support}
                styles={selectStyles}
                defaultValue={support[0]}
            />
            <Subheading fontSize='large' fontWeight='weight700' color='grey300'>Optimization and Accessibility</Subheading>

            <FormGroup row={true}>
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
                    label="Semantic coding"
                />

                <FormControlLabel
                    className={style.checkboxContainer}
                    control={
                        <Checkbox
                            checked={mobileApp}
                            onChange={handleChange}
                            name="Mobile-APP"
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    }
                    label="mobile APP"
                />
                <FormControlLabel
                    className={style.checkboxContainer}
                    control={
                        <Checkbox
                            label="Mobile Design"
                            onChange={handleChange}
                            checked={mobileDesign}
                            name="mobileDesign"
                        />
                    }
                    label="Mobile Design"
                />
            </FormGroup>
            <div className={style.textAreaContainer}>
                <Textarea />
            </div>
            <HorizontalDivider className={style.horizontalDivider} />
            <div className={style.btnContainer}>
                <Button handleClick={handleNext} size="small" variant="primary">
                    Next
                </Button>
            </div>
        </section>
    );
};

export default Step4Page;
