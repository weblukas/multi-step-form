import React, { useState, useRef, createContext, useContext } from 'react';
import { TextField } from '@mui/material';
import { Controller, useFormContext, useWatch } from 'react-hook-form';
import style from './Form.module.scss';
import Subheading from '../Subheading/Subheading';
import CustomRadio from '../CustomRadio/CustomRadio';
import UploadBox from '../UploadBox/UploadBox';
import HorizontalDivider from '../HorizontalDivider/HorizontalDivider';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';


const Form = () => {
    const emailValidation =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
        const[errorMsg, setErrorMsg] = useState(false)

    const {
        handleSubmit,
        control,
        watch,
        formState: { errors }
    } = useFormContext({
        defaultValues: {
            firstAndLastName: '',
            emailAddress: '',
            phone: ''
        }
    });

    const [person, setPerson] = useState({
        PersonName: '',
        PersonAddress: '',
        PersonPhone: ''
    });

    const onSubmit = (data) => {
        const { firstAndLastName, emailAddress, phone } = data;
        setPerson({
            PersonName: firstAndLastName,
            PersonAddress: emailAddress,
            PersonPhone: phone
        });

        console.log(person);
    };

    const formRef = useRef(null);

    const submitForm = () => {
        if (formRef.current) {
            formRef.current.dispatchEvent(
                new Event('submit', { cancelable: true, bubbles: true })
            );
        }
    };

    const navigate = useNavigate();

   
  
    const handleNext = () => {
        if(errors.firstAndLastName === true){
            console.log('błąd')
            setErrorMsg(true)
        }else{
            navigate('/step-3');
            console.log('nie ma błedu')
        }
    };


    return (
        <>
            <form
                ref={formRef}
                onSubmit={handleSubmit(onSubmit)}
                className={style.form}
            >
                <Controller
                    name="firstAndLastName"
                    control={control}
                    rules={{ required: true, maxLength: 30 }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            value={person.firstAndLastName}
                            label="First and last Name"
                            className={style.input}
                        />
                    )}
                />
                <Controller
                    name="emailAddress"
                    control={control}
                    rules={{ required: true, pattern: emailValidation }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            value={person.emailAddress}
                            label="Email Address"
                            className={style.input}
                        />
                    )}
                />
                <Controller
                    name="phone"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            value={person.phone}
                            label="Phone"
                            type="number"
                            className={style.input}
                        />
                    )}
                />
                {errors.firstAndLastName && <p>name is not valid</p>}
                {errors.emailAddress && <p>email address is not valid</p>}
                {errors.phone && <p>phone number is not valid</p>}
                {errorMsg && <p>please fill up the form</p>}
            </form>
            <Subheading>Gender</Subheading>  
            <CustomRadio  />
            <h2>Upload Documents</h2>
                <UploadBox />
                <HorizontalDivider className={style.horizontalDivider} />
                <div className={style.btnContainer}>
                   
            <Button
                        size="small"
                        variant="primary"
                        handleClick={handleNext}
                        className={style.button}
                    >
                        Next
                    </Button>
                
                </div>           
        </>
    );
};

export default Form;
