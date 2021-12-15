import React from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { clearSpecifiedWarningMsgs } from 'actions/notifications';

const WarningHandler = (props) => {
    const warningMsgs = useSelector((state) => state.notifications.warningMsgs) || [];
    warningMsgs.forEach(warn => {
        toast.warn(warn.message, {
            toastId: warn.id,
            position: 'top-right',
            autoClose: props.displayTime || 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            onClose: () => clearSpecifiedWarningMsgs([warn])
        });
    });

    return <></>;
};

export default WarningHandler;
