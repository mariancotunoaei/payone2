import React from 'react';
import Textbox from './Textbox';
import { AiOutlineCreditCard, AiOutlinePhone } from 'react-icons/ai';
import { MdAlternateEmail } from 'react-icons/md';

export default {
    title: 'UX-Components/Textbox',
    component: Textbox,
    argTypes: {
        category: { options: ['text', 'number', 'email', 'tel'], control: { type: 'radio' } },
        onChange: { action: 'changed' }
    }
};

const Template = args => <Textbox {...args} />;

export const TextField = Template.bind({});
TextField.args = {
    category: 'text',
    name: 'id-for-element',
    label: 'Some label',
    value: 'Some text',
    required: true,
    showValidations: true,
    notPassedValidations: ['Some warning here!'],
    mask: '',
    maskChar: '',
    disabled: false,
    icon: null
};

export const EmailField = Template.bind({});
EmailField.args = {
    category: 'email',
    name: 'id-for-element',
    label: 'Some label',
    value: 'Some email',
    required: true,
    showValidations: true,
    notPassedValidations: ['Some warning here!'],
    mask: '',
    maskChar: '',
    disabled: false,
    icon: <MdAlternateEmail />
};

export const NumberField = Template.bind({});
NumberField.args = {
    category: 'number',
    name: 'id-for-element',
    label: 'Some label',
    value: 12,
    required: true,
    showValidations: true,
    notPassedValidations: ['Some warning here!'],
    mask: '',
    maskChar: '',
    disabled: false,
    icon: null
};

export const PhoneField = Template.bind({});
PhoneField.args = {
    category: 'tel',
    name: 'id-for-element',
    label: 'Some label',
    value: '',
    required: true,
    showValidations: true,
    notPassedValidations: ['Some warning here!'],
    // mask: `+49 99 999 99`,
    // maskChar: ' ',
    disabled: false,
    icon: <AiOutlinePhone />
};

export const CreditCardField = Template.bind({});
CreditCardField.args = {
    name: 'id-for-element',
    label: 'Some label',
    value: '1234567802345678',
    required: true,
    showValidations: true,
    notPassedValidations: ['Some warning here!'],
    mask: `9999 9999 9999 9999`,
    maskChar: ' ',
    disabled: false,
    icon: <AiOutlineCreditCard />
};
