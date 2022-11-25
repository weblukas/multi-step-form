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



const Step2Page = () => {
    const navigate = useNavigate();
    const onSubmit = ()=>{
        navigate('/step-3')
    }
    return (
        <div className={style.servicesContainer}>
            <div className={style.flexContainer}>
                <Stepper progress="2" />
                <ProgressBar progress="6" />
            </div>
            <Heading content="What kind of services you are quiz?" className={style.headingSmall} />
            <Paragraph
                content="Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concluda-
turque usu, facete detracto patrioque an per, lucilius pertinacia eu vel."
            />
            <Form />
            <RadioBtnGroup />
            <h2>Upload Documents</h2>
            <UploadBox />
            <HorizontalDivider />
            <Button handleClick={onSubmit}/>
        </div>
    );
};

export default Step2Page;
