import React from 'react';
import style from './Paragraph.module.scss';

const Paragraph = ({ content }) => {
    return <p className={style.paragraph}>{content}</p>;
};

export default Paragraph;
