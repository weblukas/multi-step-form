import React from 'react';
import Radio from '@mui/material/Radio';
import { styled } from '@mui/material/styles';

const PlansRadioBtn = ({checkedRadio, handleChange, value, name}) => {
    const StyledRadio = styled(Radio)({
        position: 'absolute',
        top: '16px',
        left: '29px',
        color: '#6B59D3',
        width: '37px',
        height: '37px',

    });

    return (
        <StyledRadio
            checked={checkedRadio}
            onClick={handleChange}
            value={value}
            name={name}
        />
    );
};

export default PlansRadioBtn;
