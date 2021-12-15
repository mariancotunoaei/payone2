import React, { useState } from 'react';

import FileUpload from 'stories/FileUpload';

import './index.scss';

const FileUploadField = (props) => {
    const {
        name,
        label = '',
        dragHereTranslation,
        noFilesUploadedTranslation,
        uploadedTranslation,
        disabled = false,
        className = '',
    } = props;

    const fileTypes = ["JPG", "PNG", "GIF"];

    const [file, setFile] = useState(null);
    
    const handleChange = file => {

        const reader = new FileReader();
        if (file) {
            if (file.size) {
                reader.onload = e => {
                    console.log('filename', file.name)
                    console.log('fileValue', e.target.result)
                };
                reader.readAsDataURL(file);
            } else {
                console.log('The document is empty!')
            }
        }
        
        setFile(file);
    };

    return (
        <div className='file-upload-wrapper'>
            <FileUpload
                name={name}
                label={label}
                selectedFile={file}
                allowedFileTypes={fileTypes}
                extraClassNames={className}
                dragHereTranslation={dragHereTranslation}
                noFilesUploadedTranslation={noFilesUploadedTranslation}
                uploadedTranslation={uploadedTranslation}
                disabled={disabled}
                onChange={handleChange}
                onTypeError={(error) => {
                    console.log('error', error);
                }}
            />
        </div>
    );
};

export default FileUploadField;
