import { createContext, useContext, useState } from 'react';

const FormContext = createContext()

export function useFormContext() {
    return useContext(FormContext);
}

export function FormProvider({children}){

    const [person, setPerson] = useState()
    function getPerson(formData){
        setPerson(formData)
    }

    return(
        <FormContext.Provider value={person}>
            {children}
        </FormContext.Provider>
    )
}