import React, { useState } from 'react';
import Button from '../components/Button/Button';
import CheckboxCard from '../components/CheckboxCard/CheckboxCard';
import HorizontalDivider from '../components/HorizontalDivider/HorizontalDivider';
import style from './Step1Page.module.scss';
import { useNavigate } from 'react-router-dom';
import Heading from '../components/Heading/Heading';
import Stepper from '../components/Stepper/Stepper';
import Paragraph from '../components/Paragraph/Paragraph';
import StandaloneRadio from '../components/StandaloneRadio/StandaloneRadio';


const Step1Page = () => {
    const navigate = useNavigate();
    const [selectedValue, setSelectedValue] = useState('')

    const handleChange = (e)=>{
        setSelectedValue(e.target.value)
    }

   
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
                    <CheckboxCard image="diagram.png" title="Corporate Services">
                        <StandaloneRadio value='a' name="radio-buttons" onChange={handleChange} checked={selectedValue === 'a'}/>
                    </CheckboxCard>
                    <CheckboxCard image="switch.png" title="Freelancing Services">
                        <StandaloneRadio value='b' name="radio-buttons" onChange={handleChange} checked={selectedValue === 'b'}/>
                    </CheckboxCard>
                    <CheckboxCard image="web-development.png" title="Development">
                        <StandaloneRadio value='c' name="radio-buttons" onChange={handleChange} checked={selectedValue === 'c'}/>
                    </CheckboxCard>
                </div>
                <HorizontalDivider />
                <Button handleClick={() => navigate('/step-2')} />
            </div>
        </div>
    );
};

export default Step1Page;
