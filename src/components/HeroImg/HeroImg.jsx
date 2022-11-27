import React from 'react';
import ProgressCounter from '../ProgressCounter/ProgressCounter';
import style from './HeroImg.module.scss';

const HeroImg = () => {
    return (
        <div className={style.heroContainer}>
            <ProgressCounter />
            <img src="dog_bigger1.png" alt="" className={style.HeroImg} />
        </div>
    );
};

export default HeroImg;
