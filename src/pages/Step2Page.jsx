import React from 'react';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import Stepper from '../components/Stepper/Stepper';

const Step2Page = () => {
    return (
        <div>
            <Stepper progress="2" />
            <ProgressBar progress="2" />
        </div>
    );
};

export default Step2Page;
