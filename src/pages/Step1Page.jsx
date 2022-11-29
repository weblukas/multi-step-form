import React, { useState } from 'react';
import Button from '../components/Button/Button';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import HorizontalDivider from '../components/HorizontalDivider/HorizontalDivider';
import style from './Step1Page.module.scss';
import { useNavigate } from 'react-router-dom';
import Heading from '../components/Heading/Heading';
import Stepper from '../components/Stepper/Stepper';
import Paragraph from '../components/Paragraph/Paragraph';
import StandaloneRadio from '../components/StandaloneRadio/StandaloneRadio';

const Step1Page = () => {
    const navigate = useNavigate();
    const [selectedValue, setSelectedValue] = useState('corporate services');

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    };

    return (
        <section>
            <div className={style.servicesContainer}>
                <Stepper progress="1" />
                <Heading fontSize="large">
                    What kind of Services You need?
                </Heading>
                <Paragraph fontSize="big">
                    Tation argumentum et usu, dicit viderer evertitur te has. Eu
                    dictas concludaturque usu, facete detracto patrioque an per,
                    lucilius pertinacia eu vel.
                </Paragraph>

                <div className={style.cardsContainer}>
                    <ServiceCard image="diagram.png" title="Corporate Services">
                        <StandaloneRadio
                            className={style.radioBtn}
                            checked={selectedValue === 'corporate services'}
                            handleChange={handleChange}
                            value="corporate services"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'corporate services' }}
                        />
                    </ServiceCard>
                    <ServiceCard
                        image="switch.png"
                        title="Freelancing Services"
                    >
                        <StandaloneRadio
                            className={style.radioBtn}
                            checked={selectedValue === 'freelancing services'}
                            handleChange={handleChange}
                            value="freelancing services"
                            name="radio-buttons"
                            inputProps={{
                                'aria-label': 'freelancing servieces'
                            }}
                        />
                    </ServiceCard>
                    <ServiceCard
                        image="web-development.png"
                        title="Development"
                    >
                        <StandaloneRadio
                            className={style.radioBtn}
                            checked={selectedValue === 'development'}
                            handleChange={handleChange}
                            value="development"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'development' }}
                        />
                    </ServiceCard>
                </div>
                <HorizontalDivider className={style.horizontalDivider} />
                <Button
                    className={style.button}
                    size="medium"
                    variant="primary"
                    handleClick={() => navigate('/step-2')}
                >
                    Next
                </Button>
            </div>
        </section>
    );
};

export default Step1Page;
