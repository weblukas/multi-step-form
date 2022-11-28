import React from 'react';
import style from './Heading.module.scss';

const Heading = ({ children, fontSize }) => {
    return <h1 className={`${style.heading} ${style[fontSize]}`}>{children}</h1>;
};

export default Heading;
