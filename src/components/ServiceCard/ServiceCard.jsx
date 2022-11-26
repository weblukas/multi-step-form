import React from 'react';
import style from './Card.module.scss';

const SeviceCard = ({ image, title, children }) => {
    return (
        <div className={style.card}>
            {children}
            <img src={image} alt="" className={style.card_image}/>
            <span>{title}</span>
        </div>
    );
};

// proptypes dodaj

export default SeviceCard;
