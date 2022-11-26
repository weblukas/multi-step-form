import React, { useState } from 'react';
import Button from '../components/Button/Button';
import SeviceCard from '../components/ServiceCard/ServiceCard';
import HorizontalDivider from '../components/HorizontalDivider/HorizontalDivider';
import style from './Step1Page.module.scss';
import { useNavigate } from 'react-router-dom';
import Heading from '../components/Heading/Heading';
import Stepper from '../components/Stepper/Stepper';
import Paragraph from '../components/Paragraph/Paragraph';
import Radio from '@mui/material/Radio';
import StandaloneRadio from '../components/StandaloneRadio/StandaloneRadio';

const Step1Page = () => {
    const navigate = useNavigate();
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    };

    return (
        <div>
            <div className={style.servicesContainer}>
                <Stepper progress="1" />
                <Heading content="What kind of Services You need?" className={style.headingBig} />
                <Paragraph
                    content="Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque
                    usu, facete detracto patrioque an per, lucilius pertinacia eu vel."
                />
                <div className={style.cardsContainer}>
                    <SeviceCard image="diagram.png" title="Corporate Services">
                        <StandaloneRadio
                            checked={selectedValue === 'corporate services'}
                            handleChange={handleChange}
                            value="corporate services"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'corporate services' }}
                        />
                    </SeviceCard>
                    <SeviceCard image="switch.png" title="Freelancing Services">
                        <StandaloneRadio
                            checked={selectedValue === 'freelancing services'}
                            handleChange={handleChange}
                            value="freelancing services"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'freelancing servieces' }}
                        />
                    </SeviceCard>
                    <SeviceCard image="web-development.png" title="Development">
                        <StandaloneRadio checked={selectedValue === 'development'} handleChange={handleChange} value="development" name="radio-buttons" inputProps={{ 'aria-label': 'development' }} />
                    </SeviceCard>
                </div>
                <HorizontalDivider />
                <Button handleClick={() => navigate('/step-2')} />
            </div>
        </div>
    );
};

export default Step1Page;
