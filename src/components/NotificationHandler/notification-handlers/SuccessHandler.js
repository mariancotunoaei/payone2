import React from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { clearSpecifiedSuccessMsgs } from 'actions/notifications';

const SuccessHandler = (props) => {
    const successMsgs = useSelector((state) => state.notifications.successMsgs) || [];
    successMsgs.forEach(succ => {
        toast.success(succ.message, {
            toastId: succ.id,
            position: 'top-right',
            autoClose: props.displayTime || 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            onClose: () => clearSpecifiedSuccessMsgs([succ])
        });
    });

    return <></>;
};

export default SuccessHandler;
