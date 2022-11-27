import React from 'react';
import Stepper from '../components/Stepper/Stepper';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import Heading from '../components/Heading/Heading';
import Paragraph from '../components/Paragraph/Paragraph';
import HorizontalDivider from '../components/HorizontalDivider/HorizontalDivider';
import style from './Step4Page.module.scss';

const Step4Page = () => {
    return (
        <div className={style.servicesContainer}>
            <div className={style.flexContainer}>
                <Stepper progress="3" />
                <ProgressBar progress="3" />
            </div>
            <Heading>Select your budget</Heading>
            <Paragraph>
                Tation argumentum et usu, dicit viderer evertitur te
                has. Eu dictas concluda- turque usu, facete detracto patrioque
                an per, lucilius pertinacia eu vel."
            </Paragraph>

            <HorizontalDivider className={style.horizontalDivider} />
        </div>
    );
};

export default Step4Page;
