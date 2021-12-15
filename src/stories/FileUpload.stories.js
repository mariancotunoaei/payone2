import React from 'react';
import FileUpload from './FileUpload';

export default {
    title: 'UX-Components/FileUpload',
    component: FileUpload,
    argTypes: {
        onChange: { action: 'changed' },
        onTypeError: { action: 'type error triggered' },
    }
};

const Template = args => <FileUpload {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    name: 'input-name',
    label: 'File Upload',
    allowedFileTypes: ["JPG", "PNG", "GIF"],
    extraClassNames: '',
    dragHereTranslation: 'Drag Here',
    uploadedTranslation: 'File Uploaded',
    noFilesUploadedTranslation: 'No files Uploaded',
    disabled: false,
    required: true,
};
