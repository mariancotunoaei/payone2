import React from 'react';

import './index.scss';

const SectionWrapper = ({ title, description, children, displayCheckbox, hideLabel }) => {
    return (
        <div className='section-wrapper'>
            <div className='section-header'>
                {
                    !hideLabel && (<div className='section-title'> {title} </div>)
                }
                {
                    !hideLabel && (<div className='section-description'> {description} </div>)
                }
            </div>

            {
                !displayCheckbox && <div className='section-body'>
                    {children}
                </div>
            }
            {
                displayCheckbox && <div className='section-body'>
                    <div className='consent-page'>
                        {children}
                    </div>
                </div>
            }
        </div>
    );
};

export default SectionWrapper;
