import React, { useState, useRef, createContext, useContext } from 'react';
import { TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import style from './Form.module.scss';


const Form = () => {
    const emailValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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

    const FormContext = createContext();

    function useFormContext() {
        return useContext(FormContext);
    }

    function FormProvider({ children }) {
        return <FormContext.Provider value={person}>{children}</FormContext.Provider>;
    }

    const [person, setPerson] = useState({
        PersonName: '',
        PersonAddress: '',
        PersonPhone: ''
    });

    // luka@wp.pl
    const onSubmit = (data) => {
        const { firstAndLastName, emailAddress, phone } = data;
        setPerson({ PersonName: firstAndLastName, PersonAddress: emailAddress, PersonPhone: phone });

        console.log(person);
    };

    const formRef = useRef(null);

    const submit = () => {
        if (formRef.current) {
            formRef.current.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
        }
    };

    return (
        <>
            <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="firstAndLastName"
                    control={control}
                    rules={{ required: true, maxLength: 30 }}
                    render={({ field }) => <TextField {...field} label="First and last Name" className={style.input} />}
                />
                <Controller
                    name="emailAddress"
                    control={control}
                    rules={{ required: true, pattern: emailValidation }}
                    render={({ field }) => <TextField {...field} label="Email Address" className={style.input} />}
                />
                <Controller name="phone" control={control} rules={{ required: true }} render={({ field }) => <TextField {...field} label="Phone" type="number" className={style.input} />} />
                {errors.firstAndLastName && <p>name is not valid</p>}
                {errors.emailAddress && <p>email address is not valid</p>}
                {errors.phone && <p>phone number is not valid</p>}
            </form>

            {/* <button type='button' onClick={submit}>submit</button> */}
        </>
    );
};

export default Form;
