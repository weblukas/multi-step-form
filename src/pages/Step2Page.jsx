import React from 'react';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import Stepper from '../components/Stepper/Stepper';
import Form from '../components/Form/Form';
import Heading from '../components/Heading/Heading';
import style from './Step2Page.module.scss';
import Paragraph from '../components/Paragraph/Paragraph';
import RadioBtnGroup from '../components/RadioBtnGroup/RadioBtnGroup';
import Button from '../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import UploadBox from '../components/UploadBox/UploadBox';
import HorizontalDivider from '../components/HorizontalDivider/HorizontalDivider';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';

const Step2Page = () => {
    const navigate = useNavigate();
    const methods = useForm();
    const handleNext = () => {
        navigate('/step-3');
    };
    return (
        <FormProvider {...methods}>
            <div className={style.servicesContainer}>
                <div className={style.flexContainer}>
                    <Stepper progress="2" />
                    <ProgressBar progress="6" />
                </div>
                <Heading className={style.headingSmall}>
                    What kind of services you are quiz?
                </Heading>
                <Paragraph>
                    content="Tation argumentum et usu, dicit viderer evertitur
                    te has. Eu dictas concluda- turque usu, facete detracto
                    patrioque an per, lucilius pertinacia eu vel."
                </Paragraph>

                <Form />
                <RadioBtnGroup />
                <h2>Upload Documents</h2>
                <UploadBox />
                <HorizontalDivider className={style.horizontalDivider} />
                <Button
                    size="small"
                    variant="primary"
                    handleClick={handleNext}
                    className={style.button}
                >
                    Next
                </Button>
            </div>
        </FormProvider>
    );
};

export default Step2Page;
