import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import style from './Form.module.scss';

const Form = () => {

    const emailValidation =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm({
        defaultValues: {
            firstAndLastName: '',
            emailAddress: '',
            phone: ''
        }
    });


    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
        <form id='form' onSubmit={handleSubmit(onSubmit)}>
            <Controller name="firstAndLastName" control={control} rules={{ required: true, maxLength: 30  }} render={({ field }) => <TextField {...field}  label="First and last Name" className={style.input} />} />
            <Controller name="emailAddress" control={control} rules={{ required: true, pattern: emailValidation }} render={({ field }) => <TextField {...field} label="Email Address" className={style.input} />} />
            <Controller name="phone" control={control} rules={{ required: true, }} render={({ field }) => <TextField {...field} label="Phone" type="number" className={style.input} />} />
            {errors.firstAndLastName || errors.emailAddress && <p>Correct values</p>}
        </form>

        <button type='submit' form='form'>submit</button>
        </>
    );
};

export default Form;
