import React from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { clearSpecifiedInfoMsgs } from 'actions/notifications';

const InfoHandler = (props) => {
    const infos = useSelector((state) => state.notifications.infoMsgs) || [];
    infos.forEach(info => {
        toast.info(info.message, {
            toastId: info.id,
            position: 'top-right',
            autoClose: props.displayTime || 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            onClose: () => clearSpecifiedInfoMsgs([info])
        });
    });

    return <></>;
};

export default InfoHandler;
