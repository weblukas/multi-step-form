import React from 'react';
import Subheading from '../Subheading/Subheading';
import style from './Textarea.module.scss';

const Textarea = ({ withHeading, onChange }) => {

    const heading = withHeading ? (
        <label className={style.textarea_label}>
            <img src="msgIcon.png" alt="" className={style.textarea_msgIcon} />
            <Subheading fontSize="large" fontWeight="weight700" color="grey400">
                Write Something note
            </Subheading>
            {withHeading}
        </label>
    ) : null;

    return (
        <div className={style.flexContainer}>
            {heading}
            <textarea
                placeholder="Hi ciestosolution, I noticed your profile and would like to offer you my project.
We can discuss any details over chat."
                className={style.textarea}
                onChange={onChange}
            ></textarea>
        </div>
    );
};

export default Textarea;
