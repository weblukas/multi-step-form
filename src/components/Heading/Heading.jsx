import React from 'react';
import style from './Heading.module.scss';

const Heading = ({ children, className, variant }) => {
    return <h1 className={`${style.heading} ${className}`}>{children}</h1>;
};

export default Heading;
