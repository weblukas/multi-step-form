import React from 'react';
import style from './ProgressCounter.module.scss';

const ProgressCounter = () => {
    return (
        <div className={style.pcContainer}>
            <img src="ellipse1.png" alt="" className={style.ellipse}/>
            <img src="vector.png" alt="" className={style.vector}/>
            <img src="rectangle2.png" alt="" className={style.rectangle} />
            <span className={style.stepCounter}>1</span>
        </div>
    );
};

export default ProgressCounter;
