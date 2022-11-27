import React from 'react';
import style from './Stepper.module.scss';

const Stepper = ({ progress }) => {
    return <span className={style.stepProgress}>Step {progress}</span>;
};

export default Stepper;
