import React from 'react';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import Stepper from '../components/Stepper/Stepper';
import Form from '../components/Form/Form';
import Heading from '../components/Heading/Heading';
import style from './Step2Page.module.scss';
import Paragraph from '../components/Paragraph/Paragraph';
import RadioBtnGroup from '../components/RadioBtnGroup/RadioBtnGroup';



const Step2Page = () => {
    return (
        <div className={style.servicesContainer}>
            <div className={style.flexContainer}>
                <Stepper progress="2" />
                <ProgressBar progress="2" />
            </div>
            <Heading content="What kind of services you are quiz?" className={style.headingSmall} />
            <Paragraph
                content="Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concluda-
turque usu, facete detracto patrioque an per, lucilius pertinacia eu vel."
            />
            <Form />
            <RadioBtnGroup />
        </div>
    );
};

export default Step2Page;
