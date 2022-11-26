import React from 'react';
import style from './ProgressCounter.module.scss';

const ProgressCounter = () => {
    return (
        <>

        <div className={style.pcContainer}>
            <img src="ellipse1.png" alt="" className={`${style.ellipse} ${style.ellipse1}`}/>
            <img src="vector.png" alt="" className={style.vector}/>
            <img src="rectangle1.png" alt="" className={style.rectangle} />
            <img src="rectangle2.png" alt="" className={style.rectangle} />
            <img src="ellipse2.png" alt="" className={`${style.ellipse} ${style.ellipse2}`}/>
            <img src="rectangle1.png" alt="" className={style.rectangle2} />
            <img src="ellipse2.png" alt="" className={`${style.ellipse} ${style.ellipse3}`}/>
            <span className={`${style.stepCounter} ${style.stepCounter1}`}>1</span>
            <span className={`${style.stepCounter} ${style.stepCounter2}`}>2</span>
            <span className={`${style.stepCounter} ${style.stepCounter3}`}>3</span>
        </div>
        </>
    );
};

export default ProgressCounter;
