import React from 'react';
import Select from 'react-select';

const MSelect = ({ options, styles, defaultValue, onChange }) => {
    return (
        <div>
            <Select
                options={options}
                components={{
                    IndicatorSeparator: () => null
                }}
                styles={styles}
                defaultValue={defaultValue}
                onChange={onChange}
            />
        </div>
    );
};

export default MSelect;
