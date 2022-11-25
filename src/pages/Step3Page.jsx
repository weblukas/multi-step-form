import React from 'react';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import Stepper from '../components/Stepper/Stepper';
import style from './Step3Page.module.scss';
import Heading from '../components/Heading/Heading';
import Paragraph from '../components/Paragraph/Paragraph';
import Multiselect from '../components/Multiselect/Multiselect';

const Step3Page = () => {
    return (
        <div className={style.servicesContainer}>
            <div className={style.flexContainer}>
                <Stepper progress="3" />
                <ProgressBar progress="3" />
            </div>
            <Heading content="What kind of services you Need?" className={style.headingSmall} />
            <Paragraph
                content="Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concluda-
                turque usu, facete detracto patrioque an per, lucilius pertinacia eu vel."
            />
            <Multiselect />
        </div>
    );
};

export default Step3Page;
