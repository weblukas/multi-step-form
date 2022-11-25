import React from 'react';
import style from './Button.module.scss';

const Button = ({ handleClick }) => {
    return (
        <button type="submit" className={style.button} onClick={handleClick}>
            Next
        </button>
    );
};

export default Button;
