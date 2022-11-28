import React, { useState, useContext } from 'react';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import Stepper from '../components/Stepper/Stepper';
import Form from '../components/Form/Form';
import Heading from '../components/Heading/Heading';
import style from './Step2Page.module.scss';
import Paragraph from '../components/Paragraph/Paragraph';
import Button from '../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import UploadBox from '../components/UploadBox/UploadBox';
import HorizontalDivider from '../components/HorizontalDivider/HorizontalDivider';
import { useForm, FormProvider } from 'react-hook-form';
import Subheading from '../components/Subheading/Subheading';
import StandaloneRadio from '../components/StandaloneRadio/StandaloneRadio';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CustomRadio from '../components/CustomRadio/CustomRadio';

const Step2Page = () => {

    
    const methods = useForm();
    const [selectedValue, setSelectedValue] = useState('');
    const handleChange = (e) => {
        setSelectedValue(e.target.value);
        console.log(selectedValue);
    };


const theme = createTheme({
    components: {
      // Name of the component
      CustomRadio: {
        styleOverrides: {
          root: {
            backgroundColor: 'red',
          }
          
        },
      },
    },
  });



    return (
        <FormProvider {...methods}>
            <section className={style.servicesContainer}>
                <div className={style.flexContainer}>
                    <Stepper progress="2" />
                    <ProgressBar progress="6" />
                </div>
                <Heading className={style.headingSmall}>
                    What kind of services you are quiz?
                </Heading>
                <Paragraph fontSize="big">
                    Tation argumentum et usu, dicit viderer evertitur te has. Eu
                    dictas concluda- turque usu, facete detracto patrioque an
                    per, lucilius pertinacia eu vel.
                </Paragraph>

                <Form />
                
            </section>
        </FormProvider>
    );
};

export default Step2Page;
