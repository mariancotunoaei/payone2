import React from 'react';
import PropTypes from 'prop-types';
import { FileUploader } from "react-drag-drop-files";
import classNames from 'classnames';

import './index.scss';

const FileUpload = ({ name, label, selectedFile, allowedFileTypes, extraClassNames, required, disabled, dragHereTranslation, uploadedTranslation, noFilesUploadedTranslation, onChange, onTypeError }) => {
    return (
        <>
            {label && (
                <label htmlFor={name} className='label-for-field'>
                    <div> {label} </div>
                    <div className='optional-sign-field-label'> {!required && 'Optional'} </div>
                </label>
            )}
            <FileUploader
                name={name}
                handleChange={e => onChange && onChange(e)}
                types={allowedFileTypes}
                classes={classNames(
                    'file-uploader-control',
                    extraClassNames
                )}
                disabled={disabled}
                onTypeError={(err) => onTypeError && onTypeError(err)}
            >
                <div className='drop-file-area'>
                    {dragHereTranslation}
                </div>
            </FileUploader>
            <p className='uploaded-files-name-container'>
                {selectedFile ? `${uploadedTranslation}: ${selectedFile.name}` : noFilesUploadedTranslation}
            </p>
        </>
    );
};

FileUpload.propTypes = {
    name: PropTypes.string,
    label: PropTypes.oneOf(PropTypes.string, null),
    selectedFile: PropTypes.oneOf(PropTypes.object, null),
    allowedFileTypes: PropTypes.arrayOf(PropTypes.string),
    extraClassNames: PropTypes.string,
    dragHereTranslation: PropTypes.string,
    uploadedTranslation: PropTypes.string,
    noFilesUploadedTranslation: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    onChange: PropTypes.func,
    onTypeError: PropTypes.func,
};

FileUpload.defaultProps = {
    disabled: false,
    required: false
};

export default FileUpload;
