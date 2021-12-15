import React from 'react';

const NewLine = ({ numberOfSpaces }) => {

    const breaks = Array.from(Array(Number(numberOfSpaces) || 0));

    return (
        <>
            {
                breaks.map((item, index) => {
                    return <br key={index} />;
                })
            }
        </>
    );
};

export default NewLine;
