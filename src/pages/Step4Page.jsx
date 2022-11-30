import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { budget, support } from '../data';
import style from './Step4Page.module.scss';
import MultiSelect from '../components/MultiSelect/MultiSelect';
import FormGroup from '@mui/material/FormGroup';

import Stepper from '../components/Stepper/Stepper';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import Heading from '../components/Heading/Heading';
import Paragraph from '../components/Paragraph/Paragraph';
import HorizontalDivider from '../components/HorizontalDivider/HorizontalDivider';
import Subheading from '../components/Subheading/Subheading';
import CheckboxComponent from '../components/CheckboxComponent/CheckboxComponent';
import Button from '../components/Button/Button';
import Textarea from '../components/Textarea/Textarea';

const Step4Page = () => {
    const [selectedBudget, setSelectedBudget] = useState();
    const [checked, setChecked] = React.useState({
        semanticCoding: false,
        mobileApp: false,
        mobileDesign: false
    });
    const [textMsg, setTextMsg] = React.useState('');
    const navigate = useNavigate();
    const { semanticCoding, mobileApp, mobileDesign } = checked;

    const selectStyles = {
        control: (style) => ({ ...style, height: 75 })
    };

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
    };

    const handleTextarea = (e) => {
        setTextMsg(e.target.value);
    };

    return (
        <section className={style.servicesContainer}>
            <div className={style.flexContainer}>
                <Stepper progress="4" />
                <ProgressBar progress="4" />
            </div>
            <Heading fontSize="small">Select your budget</Heading>
            <Paragraph fontSize="medium">
                Tation argumentum et usu, dicit viderer evertitur te has. Eu
                dictas concluda- turque usu, facete detracto patrioque an per,
                lucilius pertinacia eu vel."
            </Paragraph>
            <div className={style.container}>
                <img src="budgetIcon.png" alt="" />
                <Subheading
                    fontSize="large"
                    fontWeight="weight700"
                    color="grey300"
                >
                    Budget
                </Subheading>
            </div>
            <MultiSelect
                options={budget}
                styles={selectStyles}
                defaultValue={budget[0]}
                onChange={handleSelect}
            />
            <div className={style.container}>
                <img src="msg2Icon.png" alt="" />
                <Subheading
                    fontSize="large"
                    fontWeight="weight700"
                    color="grey300"
                >
                    Required Support
                </Subheading>
            </div>
            <MultiSelect
                options={support}
                styles={selectStyles}
                defaultValue={support[0]}
            />
            <Subheading fontSize="large" fontWeight="weight700" color="grey300">
                Optimization and Accessibility
            </Subheading>
            <FormGroup row={true} className={style.formGroup}>
                <CheckboxComponent
                    checked={semanticCoding}
                    onChange={handleChange}
                    name="semanticCoding"
                    inputProps={{ 'aria-label': 'controlled' }}
                    label="Semantic coding"
                />
                <CheckboxComponent
                    checked={mobileApp}
                    onChange={handleChange}
                    name="mobileApp"
                    inputProps={{ 'aria-label': 'controlled' }}
                    label="Mobile APP"
                />
                <CheckboxComponent
                    checked={mobileDesign}
                    onChange={handleChange}
                    name="mobileDesign"
                    inputProps={{ 'aria-label': 'controlled' }}
                    label="Mobile Design"
                />
            </FormGroup>
            <div className={style.textAreaContainer}>
                <Textarea withHeading={true} onChange={handleTextarea} />
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
