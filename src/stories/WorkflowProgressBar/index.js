import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const WorkflowProgressBar = ({ crtChapter, totalChapters }) => {
    return (
        <div className='workflow-progress-bar'>
            {crtChapter} / {totalChapters}
        </div>
    );
};

WorkflowProgressBar.propTypes = {
    crtChapter: PropTypes.number,
    totalChapters: PropTypes.number,
};

export default WorkflowProgressBar;
