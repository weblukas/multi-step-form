import React, { useState } from 'react';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import Stepper from '../components/Stepper/Stepper';
import Form from '../components/Form/Form';
import Heading from '../components/Heading/Heading';
import style from './Step2Page.module.scss';
import Paragraph from '../components/Paragraph/Paragraph';

const Step2Page = () => {
    return (
        <section className={style.servicesContainer}>
            <div className={style.flexContainer}>
                <Stepper progress="2" />
                <ProgressBar progress="2" />
            </div>
            <Heading fontSize="small">
                What kind of services you are quiz?
            </Heading>
            <Paragraph fontSize="medium">
                Tation argumentum et usu, dicit viderer evertitur te has. Eu
                dictas concluda- turque usu, facete detracto patrioque an per,
                lucilius pertinacia eu vel.
            </Paragraph>

            <Form />
        </section>
    );
};

export default Step2Page;
