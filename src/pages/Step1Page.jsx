import React from 'react';
import Button from '../components/Button/Button';
import CheckboxCard from '../components/CheckboxCard/CheckboxCard';
import HeroImg from '../components/HeroImg/HeroImg';
import HorizontalDivider from '../components/HorizontalDivider/HorizontalDivider';
import style from './Step1Page.module.scss';
import { useNavigate } from 'react-router-dom';
import Heading from '../components/Heading/Heading';
import Stepper from '../components/Stepper/Stepper';

const Step1Page = () => {
    const navigate = useNavigate();
    return (
        <div className={style.page}>
            {/* <HeroImg /> */}
            <div className={style.servicesContainer}>
                <Stepper progress="1" />
                <Heading content="What kind of Services You need?" />
                <p>
                    Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque <br />
                    usu, facete detracto patrioque an per, lucilius pertinacia eu vel.
                </p>
                <div className={style.cardsContainer}>
                    <CheckboxCard image="diagram.png" title="Corporate Services" />
                    <CheckboxCard image="switch.png" title="Freelancing Services" />
                    <CheckboxCard image="web-development.png" title="Development" />
                </div>
                <HorizontalDivider />
                <Button handleClick={() => navigate('/step-2')} />
            </div>
        </div>
    );
};

export default Step1Page;
