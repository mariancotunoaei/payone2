import React from 'react';
import { useSelector } from 'react-redux';

// import img from 'assets/loader-animation.gif'
import './index.scss';

const Loader = (props) => {
    const loaderIsOpen = useSelector((state) => state.ui.loader) || false;
    return (
        <div className={'loader ' + (loaderIsOpen ? 'displayed' : 'not-displayed')}>
            <div className={'loader-container'}>
                <div className='loader-image'></div>
            </div>
        </div>
    );
};

export default Loader;
