import React from 'react';
import './index.scss';
import { getStringWithLinks } from 'actions/utils';

const FreeText = ({ label, urls, boldText }) => {
    let displayString = '';

    if (urls) {
        displayString = getStringWithLinks(label, urls);

    } else {
        displayString = label;
    }
    return (
        <div className='freetext-wrapper'>
            <p style={boldText ? {fontWeight: 'bold'} : {fontWeight: 'normal'}}>
                <span dangerouslySetInnerHTML={{ __html: displayString }} />
            </p>
        </div>
    );
};

export default FreeText;
