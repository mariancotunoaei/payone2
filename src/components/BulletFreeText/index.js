import React from 'react';

import './index.scss';
import { getStringWithLinks } from 'actions/utils';


const BulletFreeText = ({ label, urls }) => {
    const string = getStringWithLinks(label, urls);

    return (
        <div className='bullet-free-text-wrapper'>
            <ul>
                <li dangerouslySetInnerHTML={{ __html: string }} />
            </ul>
        </div>
    );
};

export default BulletFreeText;
