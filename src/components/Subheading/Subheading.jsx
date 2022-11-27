import React from 'react';
import style from './Subheading.module.scss';

const Subheading = ({ children }) => {
    return <h2 className={`${style.subheading}`}>{children}</h2>;
};

export default Subheading;
