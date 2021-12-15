import React from 'react';
import Button from './Button';

export default {
    title: 'UX-Components/Button',
    component: Button,
    argTypes: {
        type: { options: ['Primary', 'Secondary', 'Tertiary'], control: { type: 'select' } },
        onClick: { action: 'clicked' }
    }
};

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    type: 'Primary',
    children: 'Primary',
    disabled: false
};

export const Secondary = Template.bind({});
Secondary.args = {
    type: 'Secondary',
    children: 'Secondary',
    disabled: false
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    type: 'Tertiary',
    children: 'Tertiary',
    disabled: false
};
