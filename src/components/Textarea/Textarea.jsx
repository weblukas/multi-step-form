import React from 'react';
import style from './Textarea.module.scss';

const Textarea = () => {
    return (
        <div className={style.flexContainer}>
            <label className={style.textarea_label}>
                <img
                    src="msgIcon.png"
                    alt=""
                    className={style.textarea_msgIcon}
                />
                Write Something note
            </label>
            <textarea
                placeholder="Hi ciestosolution, I noticed your profile and would like to offer you my project.
We can discuss any details over chat."
                className={style.textarea}
            ></textarea>
        </div>
    );
};

export default Textarea;
