import React from 'react';
import style from './Subheading.module.scss';

const Subheading = ({ children, fontSize, fontWeight, color }) => {
    return <h2 className={`${style[color]} ${style[fontSize]} ${style[fontWeight]}`}>{children}</h2>;
};

export default Subheading;
