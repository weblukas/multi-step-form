import { createContext, useContext, useState } from 'react';

const appContext = createContext();

export function useFormContext() {
    return useContext(appContext);
}

export function appProvider({ children }) {
    const [progress, setProgress] = useState(1);
 

    return (
        <appContext.Provider value={person}>{children}</appContext.Provider>
    );
}
