import React from 'react';
import Selectbox from './Selectbox';

export default {
    title: 'UX-Components/Selectbox',
    component: Selectbox
};

const Template = args => <Selectbox {...args} />;

export const DropdownField = Template.bind({});
DropdownField.args = {
    name: 'id-for-element',
    label: 'Label for Dropdown',
    isMulti: false,
    value: { label: 'Value 2', value: 'value-2' },
    options: [{
        label: 'Value 1', value: 'value-1'
    }, {
        label: 'Value 2', value: 'value-2'
    }, {
        label: 'Value 3', value: 'value-3'
    }],
    placeholder: 'Some intuitive text',
    required: true,
    showValidations: true,
    notPassedValidations: ['Some warning here!'],
    className: '',
    classNamePrefix: '',
    disabled: false,
    autoFocus: false,
    isSearchable: false,
    isClearable: true
};

export const MultiDropdownField = Template.bind({});
MultiDropdownField.args = {
    name: 'id-for-element',
    label: 'Label for MultiDropdown',
    isMulti: true,
    value: [
        { label: 'Value 2', value: 'value-2' },
        { label: 'Value 3', value: 'value-3' }
    ],
    options: [{
        label: 'Value 1', value: 'value-1'
    }, {
        label: 'Value 2', value: 'value-2'
    }, {
        label: 'Value 3', value: 'value-3'
    }],
    placeholder: 'Some intuitive text',
    required: true,
    showValidations: true,
    notPassedValidations: ['Some warning here!'],
    className: '',
    classNamePrefix: '',
    disabled: false,
    autoFocus: false,
    isSearchable: false,
    isClearable: true
};
