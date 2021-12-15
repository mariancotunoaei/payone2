import React from 'react';
import WorkflowProgressBar from './WorkflowProgressBar';

export default {
    title: 'UX-Components/WorkflowProgressBar',
    component: WorkflowProgressBar,
};

const Template = args => <WorkflowProgressBar {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    crtChapter: 1,
    totalChapters: 5
};