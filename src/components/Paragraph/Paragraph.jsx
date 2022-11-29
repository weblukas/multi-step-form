import React from 'react';
import style from './Paragraph.module.scss';

const Paragraph = ({ children, fontSize }) => {
    return (
        <p className={`${style.paragraph} ${style[fontSize]}`}>{children}</p>
    );
};

export default Paragraph;
