import React, { useState } from 'react';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import Stepper from '../components/Stepper/Stepper';
import style from './Step3Page.module.scss';
import Heading from '../components/Heading/Heading';
import Paragraph from '../components/Paragraph/Paragraph';
import Textarea from '../components/Textarea/Textarea';
import HorizontalDivider from '../components/HorizontalDivider/HorizontalDivider';
import Button from '../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { languages } from '../data';
import Subheading from '../components/Subheading/Subheading';
import MultiSelect from '../components/MultiSelect/MultiSelect';
import RadioBtnGroup from '../components/RadioBtnGroup/RadioBtnGroup';

const Step3Page = () => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [radioValue, setRadioValue] = React.useState('');
    const [textMsg, setTextMsg] = React.useState('');
    const navigate = useNavigate();

    const selectStyles = {
        control: (style) => ({ ...style, height: 75 })
    };

    const handleNext = () => {
        navigate('/step-4');
    };

    const handleBackward = () => {
        navigate('/step-2');
    };

    const handleSelect = (selectedOption) => {
        setSelectedLanguage(selectedOption);
    };

    const handleChange = (e) => {
        setRadioValue(e.target.value);
    };
    
    const handleTextarea = (e)=>{
        setTextMsg(e.target.value);
    }

    return (
        <section className={style.servicesContainer}>
            <div className={style.flexContainer}>
                <Stepper progress="3" />
                <ProgressBar progress="3" />
            </div>
            <Heading fontSize='small'>
                What kind of services you Need
            </Heading>
            <Paragraph fontSize='medium'>
                Tation argumentum et usu, dicit viderer evertitur te has. Eu
                dictas concluda- turque usu, facete detracto patrioque an per,
                lucilius pertinacia eu vel.
            </Paragraph>
            <RadioBtnGroup handleChange={handleChange} value={radioValue} />
            <Subheading fontSize="small" fontWeight="weight400" color="grey400">
                I want to browse projects in the following languages:
            </Subheading>
            <MultiSelect
                options={languages}
                styles={selectStyles}
                defaultValue={languages[0]}
                onChange={handleSelect}
            />
            <Textarea withHeading={true} onChange={handleTextarea}/>
            <HorizontalDivider className={style.horizontalDivider} />
            <div className={style.btnContainer}>
                <Button
                    className={style.button}
                    size="large"
                    variant="secondary"
                    handleClick={handleBackward}
                >
                    Backward
                </Button>
                <Button
                    className={style.button}
                    size="large"
                    variant="primary"
                    handleClick={handleNext}
                >
                    Forward
                </Button>
            </div>
        </section>
    );
};

export default Step3Page;
