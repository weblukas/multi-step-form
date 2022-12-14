import React from 'react';
import style from './ProgressBar.module.scss';

const ProgressBar = ({ progress }) => {
    const progressStyle = {
        width: `${progress * 20}%`,
        transition: 'width 1s ease-in-out'
    };
    return (
        <div>
            <span>{progress} of 5 Completed</span>
            <div className={style.progressBar}>
                <div
                    style={progressStyle}
                    className={style.innerProgress}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;
