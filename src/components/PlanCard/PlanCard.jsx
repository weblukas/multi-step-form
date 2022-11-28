import React, { Children } from 'react';
import style from './PlanCard.module.scss';

const PlanCard = ({img, children}) => {
    return (
        <div className={style.planCard}>
            <img src={img} alt="" />
            {children}
        </div>
    );
};

export default PlanCard;
