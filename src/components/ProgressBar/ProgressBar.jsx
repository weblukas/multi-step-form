import React from 'react';
import style from './ProgressBar.module.scss';

const ProgressBar = ({ progress }) => {
    return (
        <div>
            <span>{progress} of 3 Completed</span>
            <div className={style.progressBar}>
                <div className={style.innerProgress}></div>
            </div>
        </div>
    );
};

export default ProgressBar;
