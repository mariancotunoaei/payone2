import React from 'react';
import ErrorHandler from './notification-handlers/ErrorHandler';
import SuccessHandler from './notification-handlers/SuccessHandler';
import InfoHandler from './notification-handlers/InfoHandler';
import WarningHandler from './notification-handlers/WarningHandler';

import { ToastContainer } from 'react-toastify';

import './index.scss';

const NotificationHandler = (props) => {
    return (
        <>
            <SuccessHandler displayTime={3000} />
            <ErrorHandler displayTime={7000} />
            <InfoHandler displayTime={7000} />
            <WarningHandler displayTime={7000} />

            <ToastContainer
                theme='colored'
                position='top-right'
                hideProgressBar
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
            />
        </>
    );
};

export default NotificationHandler;
