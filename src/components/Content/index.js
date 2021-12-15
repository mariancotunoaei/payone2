import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import './index.scss';

const Content = (props) => {
    const screenTransitionActivity = useSelector((state) => state.ui.screenTransition) || '';
    return (
        <div
            className={
                classNames(
                    'content',
                    {
                        'entranceFromLeftTransition': screenTransitionActivity === 'entrance-from-left',
                        'entranceFromRightTransition': screenTransitionActivity === 'entrance-from-right',
                        'exitToLeftTransition': screenTransitionActivity === 'exit-to-left',
                        'exitToRightTransition': screenTransitionActivity === 'exit-to-right'
                    }
                )
            }
        > {props.children} </div>
    );
};

export default Content;
