import React from 'react';

const Heading = ({ content, className }) => {
    return <h1 className={`style.heading ${className}`}>{content}</h1>;
};

export default Heading;
