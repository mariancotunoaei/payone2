import React from 'react';

import './index.scss';

const getTotalPrice = (getField) => {
    const pricePerMonthField = getField("product_configuration_screen", "new_customer_section", "price_per_month");
    const terminalField = getField("product_configuration_screen", "new_customer_section", "terminal");
    const simCardField = getField("product_configuration_screen", "new_customer_section", "sim_card");

    let pricePerMonth = pricePerMonthField.value;
    if(!pricePerMonth && pricePerMonth !== 0) {
        pricePerMonth = pricePerMonthField.defaultValue || 0;
    }

    let terminalPriceOptionValue = terminalField.value;
    if(!terminalPriceOptionValue && terminalPriceOptionValue !== 0) {
        terminalPriceOptionValue = terminalField.defaultValue || 0;
    }
    const terminalPriceAssociatedPrice = ((terminalField.options || []).find(o => o.value === terminalPriceOptionValue) || {}).associatedPrice || 0.0;

    let simCardOptionValue = simCardField.value;
    if(!simCardOptionValue && simCardOptionValue !== 0) {
        simCardOptionValue = simCardField.defaultValue || 0;
    }
    const simCardAssociatedPrice = ((simCardField.options || []).find(o => o.value === simCardOptionValue) || {}).associatedPrice || 0.0;
    
    return (Number(pricePerMonth) + Number(terminalPriceAssociatedPrice) + Number(simCardAssociatedPrice)).toFixed(2);
};

const TotalPriceField = ({ storedValue, label, currencySymbol = '€', onGetRelatedField, onChange }) => {
    const totalPrice = getTotalPrice(onGetRelatedField);
    if(totalPrice !== storedValue) {
        onChange && onChange(totalPrice)
    }
    return (
        <div className='total-price-field-wrapper'>
            {label ? `${label}:` : ''} {currencySymbol} {totalPrice}
        </div>
    );
};

export default TotalPriceField;
