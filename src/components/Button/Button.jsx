import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.module.scss';

const Button = ({ handleClick, children, className, size, variant }) => {
    return (
        <button type="submit" className={`${style.button} ${className} ${style[size]} ${style[variant]}`} onClick={handleClick}>
            {children}
        </button>
    );

};

Button.propTypes = {
    handleClick: PropTypes.func,
    children: PropTypes.node,
    size: PropTypes.string,
    className: PropTypes.string,
    variant: PropTypes.string,
};

export default Button;
