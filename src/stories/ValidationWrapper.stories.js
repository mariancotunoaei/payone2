import React from 'react';
import ValidationWrapper from './ValidationWrapper';

export default {
    title: 'UX-Components/ValidationWrapper',
    component: ValidationWrapper
};

const Template = args => <ValidationWrapper {...args} />;

export const InvalidMessages = Template.bind({});
InvalidMessages.args = {
    showValidations: ['Some string']
};
