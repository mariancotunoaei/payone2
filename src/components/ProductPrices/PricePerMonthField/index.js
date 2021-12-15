import React, {useEffect} from 'react';

import './index.scss';

const getPricePerMonth = (availableOptions, getField) => {
    let pricePerMonth = 0.0;
    let contractDurationValue = 0.0;
    let transactionVolumeValue = 0.0;

    let contractDurationField, transactionVolumeField;
    if (availableOptions.length) {
        const firstOption = availableOptions[0];

        const contractDurationPath = firstOption.contractDuration.code;
        const [contractDurationChapterCode, contractDurationSectionCode, contractDurationFieldCode] = contractDurationPath.split('.');
        contractDurationField = getField(contractDurationChapterCode, contractDurationSectionCode, contractDurationFieldCode);

        const transactionVolumePath = firstOption.transactionVolume.code;
        const [transactionVolumeChapterCode, transactionVolumeSectionCode, transactionVolumeFieldCode] = transactionVolumePath.split('.');
        transactionVolumeField = getField(transactionVolumeChapterCode, transactionVolumeSectionCode, transactionVolumeFieldCode);

        contractDurationValue = contractDurationField.value;
        if (!contractDurationValue && contractDurationValue !== 0) {
            contractDurationValue = contractDurationField.defaultValue;
        }

        transactionVolumeValue = transactionVolumeField.value;
        if (!transactionVolumeValue && transactionVolumeValue !== 0) {
            transactionVolumeValue = transactionVolumeField.defaultValue;
        }
    }

    const foundOption = availableOptions.find(
        option => option.contractDuration.value == contractDurationValue && option.transactionVolume.value == transactionVolumeValue
    );

    if (foundOption) {
        pricePerMonth = foundOption.pricePerMonth;
    }

    return pricePerMonth.toFixed(2);
};

const PricePerMonthField = ({ storedValue, label, currencySymbol = '€', availableOptions = [], onGetRelatedField, onChange }) => {
    const pricePerMonth = getPricePerMonth(availableOptions, onGetRelatedField);
    if(pricePerMonth !== storedValue) {
        onChange && onChange(pricePerMonth)
    }
    return (
        <div className='price-per-month-field-wrapper'>
            {label ? `${label}:` : ''} {currencySymbol} {pricePerMonth}
        </div>
    );
};

export default PricePerMonthField;
