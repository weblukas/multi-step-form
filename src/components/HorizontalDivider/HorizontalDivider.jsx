import React from 'react';
import style from './HorizontalDivider.module.scss';

const HorizontalDivider = ({ className }) => {
    return <div className={`${style.divider} ${className}`}></div>;
};

export default HorizontalDivider;
