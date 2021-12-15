import React from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { clearSpecifiedErrorMsgs } from 'actions/notifications';

const ErrorHandler = (props) => {
    const errors = useSelector((state) => state.notifications.errorMsgs) || [];
    errors.forEach(err => {
        toast.error(err.message, {
            toastId: err.id,
            position: 'top-right',
            autoClose: props.displayTime || 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            onClose: () => clearSpecifiedErrorMsgs([err])
        });
    });

    return <></>;
};

export default ErrorHandler;
