import React from 'react';
import style from './Heading.module.scss';

const Heading = ({ content }) => {
    return <h1 className={style.heading}>{content}</h1>;
};

export default Heading;
