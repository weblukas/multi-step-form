import React from 'react';
import Button from '../components/Button/Button';
import CheckboxCard from '../components/CheckboxCard/CheckboxCard';
import HeroImg from '../components/HeroImg/HeroImg';
import HorizontalDivider from '../components/HorizontalDivider/HorizontalDivider';
import style from './Step_1.module.scss';

const Step_1 = () => {
    return (
        <div className={style.page}>
            <HeroImg />
            <div className={style.servicesContainer}>
                <span className={style.stepProgress}>Step 1</span>
                <h1>What kind of Services You need?</h1>
                <p>Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque <br/>usu, facete detracto patrioque an per, lucilius pertinacia eu vel.</p>
                <div className={style.cardsContainer}>
                    <CheckboxCard image="diagram.png" title="Corporate Services" />
                    <CheckboxCard image="switch.png" title="Freelancing Services" />
                    <CheckboxCard image="web-development.png" title="Development" />
                </div>
                <HorizontalDivider />
                <Button />
            </div>
        </div>
    );
};

export default Step_1;
