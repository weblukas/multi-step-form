import React from 'react';
import Subheading from '../Subheading/Subheading';
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
                <Subheading
                    fontSize="large"
                    fontWeight="weight700"
                    color="grey400"
                >
                    Write Something note
                </Subheading>
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
