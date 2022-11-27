import React from 'react';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import Stepper from '../components/Stepper/Stepper';
import style from './Step3Page.module.scss';
import Heading from '../components/Heading/Heading';
import Paragraph from '../components/Paragraph/Paragraph';
import Multiselect from '../components/Multiselect/Multiselect';
import Textarea from '../components/Textarea/Textarea';
import HorizontalDivider from '../components/HorizontalDivider/HorizontalDivider';
import Button from '../components/Button/Button';
import { useNavigate } from 'react-router-dom';

const Step3Page = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/step-4');
    };

    const handleBackward = () => {
        navigate('/step-2');
    };
    return (
        <div className={style.servicesContainer}>
            <div className={style.flexContainer}>
                <Stepper progress="3" />
                <ProgressBar progress="3" />
            </div>
            <Heading className={style.headingSmall}>
                What kind of services you Need?
            </Heading>
            <Paragraph>
                content="Tation argumentum et usu, dicit viderer evertitur te
                has. Eu dictas concluda- turque usu, facete detracto patrioque
                an per, lucilius pertinacia eu vel."
            </Paragraph>
            <Multiselect />
            <Textarea />
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
        </div>
    );
};

export default Step3Page;
