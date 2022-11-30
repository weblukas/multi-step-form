import React, { useState, useRef } from 'react';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import style from './Form.module.scss';
import UploadBox from '../UploadBox/UploadBox';
import HorizontalDivider from '../HorizontalDivider/HorizontalDivider';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import RadioForm from '../RadioForm/RadioForm';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const Form = () => {
    const schema = yup.object().shape({
        firstAndLastName: yup.string().min(5).max(30).required(),
        emailAddress: yup.string().email().required(),
        phone: yup.number().min(6).max(18).required(),
    });

    const [errorMsg, setErrorMsg] = useState(false);

    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm({
        defaultValues: {
            firstAndLastName: '',
            emailAddress: '',
            phone: ''
        },
        resolver: yupResolver(schema)
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
        if (errors.firstAndLastName === true) {
            setErrorMsg(true);
        } else {
            navigate('/step-3');
        }
    };
    const handleBlur = () => {
        setErrorMsg(true);
        submitForm();
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
                    render={({ field }) => (
                        <TextField
                            {...field}
                            value={person.firstAndLastName}
                            label="First and last Name"
                            className={style.input}
                            onBlur={handleBlur}
                        />
                    )}
                />
                {errors.firstAndLastName && <p>name is not valid</p>}
                <Controller
                    name="emailAddress"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            value={person.emailAddress}
                            label="Email Address"
                            className={style.input}
                            onBlur={handleBlur}
                        />
                    )}
                />
                {errors.emailAddress && <p>email address is not valid</p>}
                <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            value={person.phone}
                            label="Phone"
                            type="number"
                            className={style.input}
                            onBlur={handleBlur}
                        />
                    )}
                />
                {errors.phone && <p>phone number is not valid</p>}
                {errorMsg && <p>please fill up the form</p>}
            </form>

            <RadioForm />
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
