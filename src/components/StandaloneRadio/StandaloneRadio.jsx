import React from 'react';
import Radio from '@mui/material/Radio';
import { styled } from '@mui/material/styles';

const StandaloneRadio = ({ handleChange, checked, value, name }) => {
    const StyledRadio = styled(Radio)({
        position: 'absolute',
        top: '13px',
        right: '17px',
        color: '#E1E1E1'
    });

    return <StyledRadio checked={checked} onChange={handleChange} value={value} name={name} />;
};

export default StandaloneRadio;
