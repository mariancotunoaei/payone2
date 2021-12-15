export const appStructureExample = {
    "activeScreen": 1,
    "chapters": [
        {
            "code": "product_configuration_screen",
            "sections": [
                {
                    "allowedMultiple": false,
                    "chapterCode": "product_configuration_screen",
                    "code": "language_section",
                    "description": "language_dropdown_label",
                    "fields": [
                        {
                            "breakBefore": false,
                            "chapterCode": "product_configuration_screen",
                            "code": "language_dropdown",
                            "defaultValue": "de-DE",
                            "label": "language_dropdown_label",
                            "options": [
                                {
                                    "label": "en-US",
                                    "parentCode": "language_dropdown",
                                    "value": "en-US"
                                },
                                {
                                    "label": "de-DE",
                                    "parentCode": "language_dropdown",
                                    "value": "de-DE"
                                }
                            ],
                            "readOnly": false,
                            "required": false,
                            "sectionCode": "language_section",
                            "sequence": 1,
                            "type": "onb_standardPicklist"
                        }
                    ],
                    "sequence": 1,
                    "title": "language_dropdown_label"
                },
                {
                    "allowedMultiple": false,
                    "chapterCode": "product_configuration_screen",
                    "code": "already_customer_question_section",
                    "fields": [
                        {
                            "breakBefore": true,
                            "chapterCode": "product_configuration_screen",
                            "code": "already_customer_component",
                            "defaultValue": "no",
                            "label": "already_customer_label",
                            "options": [
                                {
                                    "label": "yes",
                                    "parentCode": "already_customer_component",
                                    "value": "yes"
                                },
                                {
                                    "label": "no",
                                    "parentCode": "already_customer_component",
                                    "value": "no"
                                }
                            ],
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "already_customer_question_section",
                            "sequence": 1,
                            "type": "onb_horizontalRadioButtonsGroup"
                        },
                        {
                            "bold": true,
                            "breakBefore": true,
                            "chapterCode": "product_configuration_screen",
                            "code": "existing_customer",
                            "label": "existing_customer_label",
                            "readOnly": false,
                            "renderConditions": {
                                "args": [
                                    {
                                        "code": "product_configuration_screen.already_customer_question_section.already_customer_component",
                                        "operator": "eq",
                                        "sequence": 1,
                                        "value": "yes"
                                    }
                                ],
                                "formula": "1"
                            },
                            "required": false,
                            "sectionCode": "already_customer_question_section",
                            "sequence": 2,
                            "type": "onb_freeText"
                        }
                    ],
                    "hideLabel": true,
                    "sequence": 2
                },
                {
                    "allowedMultiple": false,
                    "chapterCode": "product_configuration_screen",
                    "code": "new_customer_section",
                    "fields": [
                        {
                            "breakBefore": false,
                            "chapterCode": "product_configuration_screen",
                            "code": "contract_duration",
                            "defaultValue": "60 Monate",
                            "label": "contract_duration_label",
                            "options": [
                                {
                                    "label": "36 Monate",
                                    "parentCode": "contract_duration",
                                    "value": "36 Monate"
                                },
                                {
                                    "label": "60 Monate",
                                    "parentCode": "contract_duration",
                                    "value": "60 Monate"
                                }
                            ],
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "new_customer_section",
                            "sequence": 1,
                            "type": "onb_standardPicklist"
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "product_configuration_screen",
                            "code": "inclusive_volume",
                            "defaultValue": "1.000 €",
                            "label": "inclusive_volume_label",
                            "options": [
                                {
                                    "label": "1.000 €",
                                    "parentCode": "inclusive_volume",
                                    "value": "1.000 €"
                                },
                                {
                                    "label": "2.000 €",
                                    "parentCode": "inclusive_volume",
                                    "value": "2.000 €"
                                },
                                {
                                    "label": "3.000 €",
                                    "parentCode": "inclusive_volume",
                                    "value": "3.000 €"
                                },
                                {
                                    "label": "6.000 €",
                                    "parentCode": "inclusive_volume",
                                    "value": "6.000 €"
                                },
                                {
                                    "label": "9.000 €",
                                    "parentCode": "inclusive_volume",
                                    "value": "9.000 €"
                                },
                                {
                                    "label": "12.000 €",
                                    "parentCode": "inclusive_volume",
                                    "value": "12.000 €"
                                },
                                {
                                    "label": "15.000 €",
                                    "parentCode": "inclusive_volume",
                                    "value": "15.000 €"
                                },
                                {
                                    "label": "20.000 €",
                                    "parentCode": "inclusive_volume",
                                    "value": "20.000 €"
                                }
                            ],
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "new_customer_section",
                            "sequence": 2,
                            "type": "onb_standardPicklist"
                        },
                        {
                            "availableOptions": [
                                {
                                    "contractDuration": {
                                        "code": "product_configuration_screen.new_customer_section.contract_duration",
                                        "value": "36 Monate"
                                    },
                                    "pricePerMonth": 104.9,
                                    "transactionVolume": {
                                        "code": "product_configuration_screen.new_customer_section.inclusive_volume",
                                        "value": "20.000 €"
                                    }
                                },
                                {
                                    "contractDuration": {
                                        "code": "product_configuration_screen.new_customer_section.contract_duration",
                                        "value": "36 Monate"
                                    },
                                    "pricePerMonth": 64.9,
                                    "transactionVolume": {
                                        "code": "product_configuration_screen.new_customer_section.inclusive_volume",
                                        "value": "9.000 €"
                                    }
                                },
                                {
                                    "contractDuration": {
                                        "code": "product_configuration_screen.new_customer_section.contract_duration",
                                        "value": "36 Monate"
                                    },
                                    "pricePerMonth": 84.9,
                                    "transactionVolume": {
                                        "code": "product_configuration_screen.new_customer_section.inclusive_volume",
                                        "value": "15.000 €"
                                    }
                                },
                                {
                                    "contractDuration": {
                                        "code": "product_configuration_screen.new_customer_section.contract_duration",
                                        "value": "36 Monate"
                                    },
                                    "pricePerMonth": 34.9,
                                    "transactionVolume": {
                                        "code": "product_configuration_screen.new_customer_section.inclusive_volume",
                                        "value": "1.000 €"
                                    }
                                },
                                {
                                    "contractDuration": {
                                        "code": "product_configuration_screen.new_customer_section.contract_duration",
                                        "value": "36 Monate"
                                    },
                                    "pricePerMonth": 54.9,
                                    "transactionVolume": {
                                        "code": "product_configuration_screen.new_customer_section.inclusive_volume",
                                        "value": "6.000 €"
                                    }
                                },
                                {
                                    "contractDuration": {
                                        "code": "product_configuration_screen.new_customer_section.contract_duration",
                                        "value": "36 Monate"
                                    },
                                    "pricePerMonth": 39.9,
                                    "transactionVolume": {
                                        "code": "product_configuration_screen.new_customer_section.inclusive_volume",
                                        "value": "2.000 €"
                                    }
                                },
                                {
                                    "contractDuration": {
                                        "code": "product_configuration_screen.new_customer_section.contract_duration",
                                        "value": "36 Monate"
                                    },
                                    "pricePerMonth": 44.9,
                                    "transactionVolume": {
                                        "code": "product_configuration_screen.new_customer_section.inclusive_volume",
                                        "value": "3.000 €"
                                    }
                                },
                                {
                                    "contractDuration": {
                                        "code": "product_configuration_screen.new_customer_section.contract_duration",
                                        "value": "36 Monate"
                                    },
                                    "pricePerMonth": 74.9,
                                    "transactionVolume": {
                                        "code": "product_configuration_screen.new_customer_section.inclusive_volume",
                                        "value": "12.000 €"
                                    }
                                },
                                {
                                    "contractDuration": {
                                        "code": "product_configuration_screen.new_customer_section.contract_duration",
                                        "value": "60 Monate"
                                    },
                                    "pricePerMonth": 34.9,
                                    "transactionVolume": {
                                        "code": "product_configuration_screen.new_customer_section.inclusive_volume",
                                        "value": "2.000 €"
                                    }
                                },
                                {
                                    "contractDuration": {
                                        "code": "product_configuration_screen.new_customer_section.contract_duration",
                                        "value": "60 Monate"
                                    },
                                    "pricePerMonth": 39.9,
                                    "transactionVolume": {
                                        "code": "product_configuration_screen.new_customer_section.inclusive_volume",
                                        "value": "3.000 €"
                                    }
                                },
                                {
                                    "contractDuration": {
                                        "code": "product_configuration_screen.new_customer_section.contract_duration",
                                        "value": "60 Monate"
                                    },
                                    "pricePerMonth": 99.9,
                                    "transactionVolume": {
                                        "code": "product_configuration_screen.new_customer_section.inclusive_volume",
                                        "value": "20.000 €"
                                    }
                                },
                                {
                                    "contractDuration": {
                                        "code": "product_configuration_screen.new_customer_section.contract_duration",
                                        "value": "60 Monate"
                                    },
                                    "pricePerMonth": 59.9,
                                    "transactionVolume": {
                                        "code": "product_configuration_screen.new_customer_section.inclusive_volume",
                                        "value": "9.000 €"
                                    }
                                },
                                {
                                    "contractDuration": {
                                        "code": "product_configuration_screen.new_customer_section.contract_duration",
                                        "value": "60 Monate"
                                    },
                                    "pricePerMonth": 69.9,
                                    "transactionVolume": {
                                        "code": "product_configuration_screen.new_customer_section.inclusive_volume",
                                        "value": "12.000 €"
                                    }
                                },
                                {
                                    "contractDuration": {
                                        "code": "product_configuration_screen.new_customer_section.contract_duration",
                                        "value": "60 Monate"
                                    },
                                    "pricePerMonth": 79.9,
                                    "transactionVolume": {
                                        "code": "product_configuration_screen.new_customer_section.inclusive_volume",
                                        "value": "15.000 €"
                                    }
                                },
                                {
                                    "contractDuration": {
                                        "code": "product_configuration_screen.new_customer_section.contract_duration",
                                        "value": "60 Monate"
                                    },
                                    "pricePerMonth": 49.9,
                                    "transactionVolume": {
                                        "code": "product_configuration_screen.new_customer_section.inclusive_volume",
                                        "value": "6.000 €"
                                    }
                                },
                                {
                                    "contractDuration": {
                                        "code": "product_configuration_screen.new_customer_section.contract_duration",
                                        "value": "60 Monate"
                                    },
                                    "pricePerMonth": 29.9,
                                    "transactionVolume": {
                                        "code": "product_configuration_screen.new_customer_section.inclusive_volume",
                                        "value": "1.000 €"
                                    }
                                }
                            ],
                            "breakBefore": true,
                            "chapterCode": "product_configuration_screen",
                            "code": "price_per_month",
                            "label": "price_per_month_label",
                            "readOnly": false,
                            "required": false,
                            "sectionCode": "new_customer_section",
                            "sequence": 3,
                            "type": "onb_pricePerMonth"
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "product_configuration_screen",
                            "code": "total_price",
                            "label": "total_price_label",
                            "readOnly": false,
                            "required": false,
                            "sectionCode": "new_customer_section",
                            "sequence": 4,
                            "type": "onb_totalPrice"
                        },
                        {
                            "breakBefore": true,
                            "chapterCode": "product_configuration_screen",
                            "code": "terminal",
                            "label": "terminal_label",
                            "options": [
                                {
                                    "associatedPrice": "0.00",
                                    "label": "desk5000",
                                    "parentCode": "terminal",
                                    "value": "desk5000 "
                                },
                                {
                                    "associatedPrice": "3.00",
                                    "label": "move5000",
                                    "parentCode": "terminal",
                                    "value": "move5000"
                                }
                            ],
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "new_customer_section",
                            "sequence": 5,
                            "type": "onb_standardPicklist"
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "product_configuration_screen",
                            "code": "sim_card",
                            "label": "sim_card_label",
                            "options": [
                                {
                                    "associatedPrice": "5.00",
                                    "label": "yes_sim_card",
                                    "parentCode": "sim_card",
                                    "value": "yes_sim_card"
                                },
                                {
                                    "associatedPrice": "0.00",
                                    "label": "no_sim_card",
                                    "parentCode": "sim_card",
                                    "value": "no_sim_card"
                                }
                            ],
                            "readOnly": false,
                            "renderConditions": {
                                "args": [
                                    {
                                        "code": "product_configuration_screen.new_customer_section.terminal",
                                        "operator": "eq",
                                        "sequence": 1,
                                        "value": "move5000"
                                    }
                                ],
                                "formula": "1"
                            },
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "new_customer_section",
                            "sequence": 6,
                            "type": "onb_standardPicklist"
                        },
                        {
                            "bold": true,
                            "breakBefore": true,
                            "chapterCode": "product_configuration_screen",
                            "code": "information_paragraph_1",
                            "label": "information_paragraph_1_label",
                            "readOnly": false,
                            "required": false,
                            "sectionCode": "new_customer_section",
                            "sequence": 7,
                            "type": "onb_freeText",
                            "urls": [
                                "https://static.payone.tools/documents/IPS_PAYONE_PLV-SMB_Only_New_Bundles_Ratingen_ACF_2021-06_DE.pdf#_ga=2.80203479.136219471.1638875171-1860250389.1638875171"
                            ]
                        }
                    ],
                    "hideLabel": true,
                    "renderConditions": {
                        "args": [
                            {
                                "code": "product_configuration_screen.already_customer_question_section.already_customer_component",
                                "operator": "eq",
                                "sequence": 1,
                                "value": "no"
                            }
                        ],
                        "formula": "1"
                    },
                    "sequence": 3
                }
            ],
            "sequence": 1,
            "subtitle": "product_configuration_screen",
            "title": "product_configuration_screen"
        },
        {
            "code": "merchant_details_screen",
            "sections": [
                {
                    "allowedMultiple": false,
                    "chapterCode": "merchant_details_screen",
                    "code": "legal_form_address_section",
                    "description": "legal_form_address_section_label",
                    "fields": [
                        {
                            "breakBefore": false,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_country",
                            "defaultValue": "country_option_de",
                            "label": "merchant_details_country_label",
                            "options": [
                                {
                                    "label": "country_option_de",
                                    "parentCode": "merchant_details_country",
                                    "value": "country_option_de"
                                }
                            ],
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "legal_form_address_section",
                            "sequence": 1,
                            "type": "onb_standardPicklist"
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_legal_form",
                            "label": "merchant_details_legal_form_label",
                            "options": [
                                {
                                    "label": "sole_trader_option",
                                    "parentCode": "merchant_details_legal_form",
                                    "value": "sole_trader_option"
                                },
                                {
                                    "label": "freelancer_option",
                                    "parentCode": "merchant_details_legal_form",
                                    "value": "freelancer_option"
                                },
                                {
                                    "label": "gbr_option",
                                    "parentCode": "merchant_details_legal_form",
                                    "value": "gbr_option"
                                },
                                {
                                    "label": "ag_option",
                                    "parentCode": "merchant_details_legal_form",
                                    "value": "ag_option"
                                },
                                {
                                    "label": "registered_partner_option",
                                    "parentCode": "merchant_details_legal_form",
                                    "value": "registered_partner_option"
                                },
                                {
                                    "label": "eg_option",
                                    "parentCode": "merchant_details_legal_form",
                                    "value": "eg_option"
                                },
                                {
                                    "label": "ek_option",
                                    "parentCode": "merchant_details_legal_form",
                                    "value": "ek_option"
                                },
                                {
                                    "label": "ev_option",
                                    "parentCode": "merchant_details_legal_form",
                                    "value": "ev_option"
                                },
                                {
                                    "label": "gmbh_option",
                                    "parentCode": "merchant_details_legal_form",
                                    "value": "gmbh_option"
                                },
                                {
                                    "label": "kg_option",
                                    "parentCode": "merchant_details_legal_form",
                                    "value": "kg_option"
                                },
                                {
                                    "label": "kgaa_option",
                                    "parentCode": "merchant_details_legal_form",
                                    "value": "kgaa_option"
                                },
                                {
                                    "label": "ohg_option",
                                    "parentCode": "merchant_details_legal_form",
                                    "value": "ohg_option"
                                },
                                {
                                    "label": "stiftung_option",
                                    "parentCode": "merchant_details_legal_form",
                                    "value": "stiftung_option"
                                },
                                {
                                    "label": "gmbh_and_co_kg_option",
                                    "parentCode": "merchant_details_legal_form",
                                    "value": "gmbh_and_co_kg_option"
                                }
                            ],
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "legal_form_address_section",
                            "sequence": 2,
                            "type": "onb_standardPicklist"
                        },
                        {
                            "breakBefore": true,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_firstname",
                            "label": "merchant_details_firstname_label",
                            "readOnly": false,
                            "renderConditions": {
                                "args": [
                                    {
                                        "code": "merchant_details_screen.legal_form_address_section.merchant_details_legal_form",
                                        "operator": "in",
                                        "sequence": 1,
                                        "value": "sole_trader_option|freelancer_option|gbr_option"
                                    }
                                ],
                                "formula": "1"
                            },
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "legal_form_address_section",
                            "sequence": 3,
                            "type": "onb_standardText",
                            "validations": [
                                {
                                    "errorMessage": "max_length_error",
                                    "maxLength": 30,
                                    "parentCode": "merchant_details_firstname",
                                    "type": "maxLength"
                                }
                            ]
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_lastname",
                            "label": "merchant_details_lastname_label",
                            "readOnly": false,
                            "renderConditions": {
                                "args": [
                                    {
                                        "code": "merchant_details_screen.legal_form_address_section.merchant_details_legal_form",
                                        "operator": "in",
                                        "sequence": 1,
                                        "value": "sole_trader_option|gbr_option|freelancer_option"
                                    }
                                ],
                                "formula": "1"
                            },
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "legal_form_address_section",
                            "sequence": 4,
                            "type": "onb_standardText",
                            "validations": [
                                {
                                    "errorMessage": "max_length_error",
                                    "maxLength": 30,
                                    "parentCode": "merchant_details_lastname",
                                    "type": "maxLength"
                                }
                            ]
                        },
                        {
                            "breakBefore": true,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_registered_company_name",
                            "label": "merchant_details_registered_company_name_label",
                            "readOnly": false,
                            "renderConditions": {
                                "args": [
                                    {
                                        "code": "merchant_details_screen.legal_form_address_section.merchant_details_legal_form",
                                        "operator": "in",
                                        "sequence": 1,
                                        "value": "ag_option|registered_partner_option|eg_option|ek_option|ev_option|gmbh_option|kg_option|kgaa_option|ohg_option|gmbh_and_co_kg_option"
                                    }
                                ],
                                "formula": "1"
                            },
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "legal_form_address_section",
                            "sequence": 5,
                            "type": "onb_standardText",
                            "validations": [
                                {
                                    "errorMessage": "max_length_error",
                                    "maxLength": 30,
                                    "parentCode": "merchant_details_registered_company_name",
                                    "type": "maxLength"
                                }
                            ]
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_register_location",
                            "label": "merchant_details_register_location_label",
                            "options": [
                                {
                                    "label": "frankfurt_city",
                                    "parentCode": "merchant_details_register_location",
                                    "value": "frankfurt_city"
                                },
                                {
                                    "label": "berlin_city",
                                    "parentCode": "merchant_details_register_location",
                                    "value": "berlin_city"
                                }
                            ],
                            "readOnly": false,
                            "renderConditions": {
                                "args": [
                                    {
                                        "code": "merchant_details_screen.legal_form_address_section.merchant_details_legal_form",
                                        "operator": "in",
                                        "sequence": 1,
                                        "value": "ag_option|registered_partner_option|eg_option|ek_option|ev_option|gmbh_option|kg_option|kgaa_option|ohg_option|gmbh_and_co_kg_option"
                                    }
                                ],
                                "formula": "1"
                            },
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "legal_form_address_section",
                            "sequence": 6,
                            "type": "onb_standardPicklist"
                        },
                        {
                            "breakBefore": true,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_registration_number_dropdown",
                            "defaultValue": "hra_option",
                            "label": "merchant_details_registration_number_dropdown_label",
                            "options": [
                                {
                                    "label": "hra_option",
                                    "parentCode": "merchant_details_registration_number_dropdown",
                                    "value": "hra_option"
                                },
                                {
                                    "label": "hrb_option",
                                    "parentCode": "merchant_details_registration_number_dropdown",
                                    "value": "hrb_option"
                                },
                                {
                                    "label": "partnership_option",
                                    "parentCode": "merchant_details_registration_number_dropdown",
                                    "value": "partnership_option"
                                },
                                {
                                    "label": "cooperative_register_option",
                                    "parentCode": "merchant_details_registration_number_dropdown",
                                    "value": "cooperative_register_option"
                                },
                                {
                                    "label": "club_register_option",
                                    "parentCode": "merchant_details_registration_number_dropdown",
                                    "value": "club_register_option"
                                }
                            ],
                            "readOnly": false,
                            "renderConditions": {
                                "args": [
                                    {
                                        "code": "merchant_details_screen.legal_form_address_section.merchant_details_legal_form",
                                        "operator": "in",
                                        "sequence": 1,
                                        "value": "ek_option|kg_option|ohg_option|gmbh_and_co_kg_option"
                                    }
                                ],
                                "formula": "1"
                            },
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "legal_form_address_section",
                            "sequence": 7,
                            "type": "onb_standardPicklist"
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_registration_number_text",
                            "label": "merchant_details_registration_number_text_label",
                            "readOnly": false,
                            "renderConditions": {
                                "args": [
                                    {
                                        "code": "merchant_details_screen.legal_form_address_section.merchant_details_legal_form",
                                        "operator": "in",
                                        "sequence": 1,
                                        "value": "ek_option|kg_option|ohg_option|gmbh_and_co_kg_option|gmbh_and_co_kg_option"
                                    }
                                ],
                                "formula": "1"
                            },
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "legal_form_address_section",
                            "sequence": 8,
                            "type": "onb_standardText",
                            "validations": [
                                {
                                    "errorMessage": "postal_code_invalid_format_error",
                                    "parentCode": "merchant_details_registration_number_text",
                                    "pattern": "^([0-9]*)$",
                                    "type": "regex"
                                },
                                {
                                    "errorMessage": "max_length_error",
                                    "maxLength": 10,
                                    "parentCode": "merchant_details_registration_number_text",
                                    "type": "maxLength"
                                }
                            ]
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_company_name",
                            "label": "merchant_details_company_name_label",
                            "readOnly": false,
                            "renderConditions": {
                                "args": [
                                    {
                                        "code": "merchant_details_screen.legal_form_address_section.merchant_details_legal_form",
                                        "operator": "eq",
                                        "sequence": 1,
                                        "value": "stiftung_option"
                                    }
                                ],
                                "formula": "1"
                            },
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "legal_form_address_section",
                            "sequence": 9,
                            "type": "onb_standardText",
                            "validations": [
                                {
                                    "errorMessage": "max_length_error",
                                    "maxLength": 30,
                                    "parentCode": "merchant_details_company_name",
                                    "type": "maxLength"
                                }
                            ]
                        },
                        {
                            "breakBefore": true,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_registered_company_name1",
                            "label": "merchant_details_registered_company_name_label",
                            "readOnly": false,
                            "renderConditions": {
                                "args": [
                                    {
                                        "code": "merchant_details_screen.legal_form_address_section.merchant_details_legal_form",
                                        "operator": "in",
                                        "sequence": 1,
                                        "value": "gmbh_and_co_kg_option"
                                    }
                                ],
                                "formula": "1"
                            },
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "legal_form_address_section",
                            "sequence": 10,
                            "type": "onb_standardText"
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_register_location1",
                            "label": "merchant_details_register_location_label",
                            "options": [
                                {
                                    "label": "frankfurt_city",
                                    "parentCode": "merchant_details_register_location1",
                                    "value": "frankfurt_city"
                                },
                                {
                                    "label": "berlin_city",
                                    "parentCode": "merchant_details_register_location1",
                                    "value": "berlin_city"
                                }
                            ],
                            "readOnly": false,
                            "renderConditions": {
                                "args": [
                                    {
                                        "code": "merchant_details_screen.legal_form_address_section.merchant_details_legal_form",
                                        "operator": "eq",
                                        "sequence": 1,
                                        "value": "gmbh_and_co_kg_option"
                                    }
                                ],
                                "formula": "1"
                            },
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "legal_form_address_section",
                            "sequence": 11,
                            "type": "onb_standardPicklist"
                        },
                        {
                            "breakBefore": true,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_registration_number_dropdown2",
                            "defaultValue": "partnership_option",
                            "label": "merchant_details_registration_number_text_label",
                            "options": [
                                {
                                    "label": "hra_option",
                                    "parentCode": "merchant_details_registration_number_dropdown2",
                                    "value": "hra_option"
                                },
                                {
                                    "label": "hrb_option",
                                    "parentCode": "merchant_details_registration_number_dropdown2",
                                    "value": "hrb_option"
                                },
                                {
                                    "label": "partnership_option",
                                    "parentCode": "merchant_details_registration_number_dropdown2",
                                    "value": "partnership_option"
                                },
                                {
                                    "label": "cooperative_register_option",
                                    "parentCode": "merchant_details_registration_number_dropdown2",
                                    "value": "cooperative_register_option"
                                },
                                {
                                    "label": "club_register_option",
                                    "parentCode": "merchant_details_registration_number_dropdown2",
                                    "value": "club_register_option"
                                }
                            ],
                            "readOnly": false,
                            "renderConditions": {
                                "args": [
                                    {
                                        "code": "merchant_details_screen.legal_form_address_section.merchant_details_legal_form",
                                        "operator": "in",
                                        "sequence": 1,
                                        "value": "registered_partner_option"
                                    }
                                ],
                                "formula": "1"
                            },
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "legal_form_address_section",
                            "sequence": 12,
                            "type": "onb_standardPicklist"
                        },
                        {
                            "breakBefore": true,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_registration_number_dropdown1",
                            "defaultValue": "hrb_option",
                            "label": "merchant_details_registration_number_dropdown_label",
                            "options": [
                                {
                                    "label": "hra_option",
                                    "parentCode": "merchant_details_registration_number_dropdown1",
                                    "value": "hra_option"
                                },
                                {
                                    "label": "hrb_option",
                                    "parentCode": "merchant_details_registration_number_dropdown1",
                                    "value": "hrb_option"
                                }
                            ],
                            "readOnly": false,
                            "renderConditions": {
                                "args": [
                                    {
                                        "code": "merchant_details_screen.legal_form_address_section.merchant_details_legal_form",
                                        "operator": "in",
                                        "sequence": 1,
                                        "value": "gmbh_and_co_kg_option|kgaa_option|ag_option|gmbh_option"
                                    }
                                ],
                                "formula": "1"
                            },
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "legal_form_address_section",
                            "sequence": 13,
                            "type": "onb_standardPicklist"
                        },
                        {
                            "breakBefore": true,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_registration_number_dropdown3",
                            "defaultValue": "club_register_option",
                            "label": "merchant_details_registration_number_text_label",
                            "options": [
                                {
                                    "label": "hra_option",
                                    "parentCode": "merchant_details_registration_number_dropdown3",
                                    "value": "hra_option"
                                },
                                {
                                    "label": "hrb_option",
                                    "parentCode": "merchant_details_registration_number_dropdown3",
                                    "value": "hrb_option"
                                },
                                {
                                    "label": "partnership_option",
                                    "parentCode": "merchant_details_registration_number_dropdown3",
                                    "value": "partnership_option"
                                },
                                {
                                    "label": "cooperative_register_option",
                                    "parentCode": "merchant_details_registration_number_dropdown3",
                                    "value": "cooperative_register_option"
                                },
                                {
                                    "label": "club_register_option",
                                    "parentCode": "merchant_details_registration_number_dropdown3",
                                    "value": "club_register_option"
                                }
                            ],
                            "readOnly": false,
                            "renderConditions": {
                                "args": [
                                    {
                                        "code": "merchant_details_screen.legal_form_address_section.merchant_details_legal_form",
                                        "operator": "in",
                                        "sequence": 1,
                                        "value": "ev_option"
                                    }
                                ],
                                "formula": "1"
                            },
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "legal_form_address_section",
                            "sequence": 14,
                            "type": "onb_standardPicklist"
                        },
                        {
                            "breakBefore": true,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_registration_number_dropdown4",
                            "defaultValue": "cooperative_register_option",
                            "label": "merchant_details_registration_number_text_label",
                            "options": [
                                {
                                    "label": "hra_option",
                                    "parentCode": "merchant_details_registration_number_dropdown4",
                                    "value": "hra_option"
                                },
                                {
                                    "label": "hrb_option",
                                    "parentCode": "merchant_details_registration_number_dropdown4",
                                    "value": "hrb_option"
                                },
                                {
                                    "label": "partnership_option",
                                    "parentCode": "merchant_details_registration_number_dropdown4",
                                    "value": "partnership_option"
                                },
                                {
                                    "label": "cooperative_register_option",
                                    "parentCode": "merchant_details_registration_number_dropdown4",
                                    "value": "cooperative_register_option"
                                },
                                {
                                    "label": "club_register_option",
                                    "parentCode": "merchant_details_registration_number_dropdown4",
                                    "value": "club_register_option"
                                }
                            ],
                            "readOnly": false,
                            "renderConditions": {
                                "args": [
                                    {
                                        "code": "merchant_details_screen.legal_form_address_section.merchant_details_legal_form",
                                        "operator": "in",
                                        "sequence": 1,
                                        "value": "eg_option"
                                    }
                                ],
                                "formula": "1"
                            },
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "legal_form_address_section",
                            "sequence": 15,
                            "type": "onb_standardPicklist"
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_registration_number_text2",
                            "label": "merchant_details_registration_number_text_label",
                            "readOnly": false,
                            "renderConditions": {
                                "args": [
                                    {
                                        "code": "merchant_details_screen.legal_form_address_section.merchant_details_legal_form",
                                        "operator": "in",
                                        "sequence": 1,
                                        "value": "ev_option|eg_option|gmbh_and_co_kg_option|kgaa_option|ag_option|gmbh_option|registered_partner_option"
                                    }
                                ],
                                "formula": "1"
                            },
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "legal_form_address_section",
                            "sequence": 16,
                            "type": "onb_standardText",
                            "validations": [
                                {
                                    "errorMessage": "postal_code_invalid_format_error",
                                    "parentCode": "merchant_details_registration_number_text2",
                                    "pattern": "^([0-9]*)$",
                                    "type": "regex"
                                },
                                {
                                    "errorMessage": "max_length_error",
                                    "maxLength": 10,
                                    "parentCode": "merchant_details_registration_number_text2",
                                    "type": "maxLength"
                                }
                            ]
                        },
                        {
                            "breakBefore": true,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_street",
                            "label": "merchant_details_street_label",
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "legal_form_address_section",
                            "sequence": 18,
                            "type": "onb_standardText",
                            "validations": [
                                {
                                    "errorMessage": "max_length_error",
                                    "maxLength": 30,
                                    "parentCode": "merchant_details_street",
                                    "type": "maxLength"
                                }
                            ]
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_street_number",
                            "label": "merchant_details_street_number_label",
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "legal_form_address_section",
                            "sequence": 19,
                            "type": "onb_standardText",
                            "validations": [
                                {
                                    "errorMessage": "max_length_error",
                                    "maxLength": 5,
                                    "parentCode": "merchant_details_street_number",
                                    "type": "maxLength"
                                }
                            ]
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_postal_code",
                            "label": "merchant_details_postal_code_label",
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "legal_form_address_section",
                            "sequence": 20,
                            "type": "onb_standardText",
                            "validations": [
                                {
                                    "errorMessage": "postal_code_invalid_format_error",
                                    "parentCode": "merchant_details_postal_code",
                                    "pattern": "^([0-9]*)$",
                                    "type": "regex"
                                },
                                {
                                    "errorMessage": "fix_format_error",
                                    "parentCode": "merchant_details_postal_code",
                                    "pattern": "5",
                                    "type": "fixLength"
                                }
                            ]
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_city",
                            "label": "merchant_details_city_label",
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "legal_form_address_section",
                            "sequence": 21,
                            "type": "onb_standardText",
                            "validations": [
                                {
                                    "errorMessage": "max_length_error",
                                    "maxLength": 35,
                                    "parentCode": "merchant_details_city",
                                    "type": "maxLength"
                                }
                            ]
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_country_phone",
                            "defaultValue": "country_phone_option_de",
                            "label": "merchant_details_country_phone_label",
                            "options": [
                                {
                                    "label": "country_phone_option_de",
                                    "parentCode": "merchant_details_country_phone",
                                    "value": "country_phone_option_de"
                                }
                            ],
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "legal_form_address_section",
                            "sequence": 22,
                            "type": "onb_standardPicklist"
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_phone",
                            "label": "merchant_details_phone_label",
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "legal_form_address_section",
                            "sequence": 23,
                            "type": "onb_phoneInput",
                            "validations": [
                                {
                                    "errorMessage": "max_length_error",
                                    "maxLength": 15,
                                    "parentCode": "merchant_details_phone",
                                    "type": "maxLength"
                                },
                                {
                                    "errorMessage": "general_required_message",
                                    "parentCode": "merchant_details_phone",
                                    "pattern": "^([0-9]*)$",
                                    "type": "regex"
                                }
                            ]
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_email",
                            "label": "merchant_details_email_label",
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "legal_form_address_section",
                            "sequence": 24,
                            "type": "onb_emailField",
                            "validations": [
                                {
                                    "errorMessage": "max_length_error",
                                    "maxLength": 80,
                                    "parentCode": "merchant_details_email",
                                    "type": "maxLength"
                                },
                                {
                                    "errorMessage": "email_invalid_format_error",
                                    "parentCode": "merchant_details_email",
                                    "pattern": "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}",
                                    "type": "regex"
                                }
                            ]
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_store_name",
                            "label": "merchant_details_store_name_label",
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "legal_form_address_section",
                            "sequence": 25,
                            "type": "onb_standardText",
                            "validations": [
                                {
                                    "errorMessage": "max_length_error",
                                    "maxLength": 30,
                                    "parentCode": "merchant_details_store_name",
                                    "type": "maxLength"
                                }
                            ]
                        },
                        {
                            "breakBefore": true,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_different_store_address",
                            "defaultValue": "no",
                            "label": "merchant_details_different_store_address_label",
                            "options": [
                                {
                                    "label": "yes",
                                    "parentCode": "merchant_details_different_store_address",
                                    "value": "yes"
                                },
                                {
                                    "label": "no",
                                    "parentCode": "merchant_details_different_store_address",
                                    "value": "no"
                                }
                            ],
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "legal_form_address_section",
                            "sequence": 26,
                            "type": "onb_horizontalRadioButtonsGroup"
                        }
                    ],
                    "sequence": 2,
                    "title": "legal_form_address_section_label"
                },
                {
                    "allowedMultiple": false,
                    "chapterCode": "merchant_details_screen",
                    "code": "store_address_section",
                    "description": "store_address_section",
                    "fields": [
                        {
                            "breakBefore": false,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_store_street",
                            "label": "merchant_details_street_label",
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "store_address_section",
                            "sequence": 1,
                            "type": "onb_standardText",
                            "validations": [
                                {
                                    "errorMessage": "max_length_error",
                                    "maxLength": 30,
                                    "parentCode": "merchant_details_store_street",
                                    "type": "maxLength"
                                }
                            ]
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_store_street_number",
                            "label": "merchant_details_street_number_label",
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "store_address_section",
                            "sequence": 2,
                            "type": "onb_standardText",
                            "validations": [
                                {
                                    "errorMessage": "max_length_error",
                                    "maxLength": 5,
                                    "parentCode": "merchant_details_store_street_number",
                                    "type": "maxLength"
                                }
                            ]
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_store_postal_code",
                            "label": "merchant_details_postal_code_label",
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "store_address_section",
                            "sequence": 3,
                            "type": "onb_standardText",
                            "validations": [
                                {
                                    "errorMessage": "postal_code_invalid_format_error",
                                    "parentCode": "merchant_details_store_postal_code",
                                    "pattern": "^([0-9]*)$",
                                    "type": "regex"
                                },
                                {
                                    "errorMessage": "fix_format_error",
                                    "parentCode": "merchant_details_store_postal_code",
                                    "pattern": "5",
                                    "type": "fixLength"
                                }
                            ]
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_store_city",
                            "label": "merchant_details_city_label",
                            "options": [
                                {
                                    "label": "frankfurt_city",
                                    "parentCode": "merchant_details_store_city",
                                    "value": "frankfurt_city"
                                },
                                {
                                    "label": "berlin_city",
                                    "parentCode": "merchant_details_store_city",
                                    "value": "berlin_city"
                                }
                            ],
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "store_address_section",
                            "sequence": 4,
                            "type": "onb_standardPicklist",
                            "validations": [
                                {
                                    "errorMessage": "max_length_error",
                                    "maxLength": 35,
                                    "parentCode": "merchant_details_store_city",
                                    "type": "maxLength"
                                }
                            ]
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_store_country",
                            "defaultValue": "country_option_de",
                            "label": "merchant_details_country_phone_label",
                            "options": [
                                {
                                    "label": "country_phone_option_de",
                                    "parentCode": "merchant_details_store_country",
                                    "value": "country_phone_option_de"
                                }
                            ],
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "store_address_section",
                            "sequence": 5,
                            "type": "onb_standardPicklist"
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_store_phone",
                            "label": "merchant_details_phone_label",
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "store_address_section",
                            "sequence": 6,
                            "type": "onb_phoneInput"
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_store_email",
                            "label": "merchant_details_email_label",
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "store_address_section",
                            "sequence": 7,
                            "type": "onb_emailField",
                            "validations": [
                                {
                                    "errorMessage": "email_invalid_format_error",
                                    "parentCode": "merchant_details_store_email",
                                    "pattern": "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}",
                                    "type": "regex"
                                },
                                {
                                    "errorMessage": "max_length_error",
                                    "maxLength": 20,
                                    "parentCode": "merchant_details_store_email",
                                    "type": "maxLength"
                                }
                            ]
                        }
                    ],
                    "renderConditions": {
                        "args": [
                            {
                                "code": "merchant_details_screen.legal_form_address_section.merchant_details_different_store_address",
                                "operator": "eq",
                                "sequence": 1,
                                "value": "yes"
                            }
                        ],
                        "formula": "1"
                    },
                    "sequence": 3,
                    "title": "store_address_section"
                },
                {
                    "allowedMultiple": false,
                    "chapterCode": "merchant_details_screen",
                    "code": "industry_vat_number_section",
                    "description": "industry_vat_number_section_label",
                    "fields": [
                        {
                            "breakBefore": false,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_vat_number",
                            "label": "merchant_details_vat_number_label",
                            "prefix": "DE",
                            "readOnly": false,
                            "required": false,
                            "sectionCode": "industry_vat_number_section",
                            "sequence": 1,
                            "type": "onb_standardText",
                            "validations": [
                                {
                                    "errorMessage": "postal_code_invalid_format_error",
                                    "parentCode": "merchant_details_vat_number",
                                    "pattern": "[a-zA-Z]{2}\\d{9}",
                                    "type": "regex"
                                },
                                {
                                    "errorMessage": "max_length_error",
                                    "maxLength": 11,
                                    "parentCode": "merchant_details_vat_number",
                                    "type": "maxLength"
                                }
                            ]
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_industry",
                            "label": "merchant_details_industry_label",
                            "options": [
                                {
                                    "label": "industry_option_hotel",
                                    "parentCode": "merchant_details_industry",
                                    "value": "industry_option_hotel"
                                }
                            ],
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "industry_vat_number_section",
                            "sequence": 2,
                            "type": "onb_standardPicklist"
                        }
                    ],
                    "sequence": 4,
                    "title": "industry_vat_number_section_label"
                },
                {
                    "allowedMultiple": false,
                    "chapterCode": "merchant_details_screen",
                    "code": "turnover_tx_volume_section",
                    "description": "turnover_tx_volume_section_label",
                    "fields": [
                        {
                            "breakBefore": false,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_annual_turnover",
                            "label": "merchant_details_annual_turnover_label",
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "turnover_tx_volume_section",
                            "sequence": 1,
                            "type": "onb_numberInput",
                            "validations": [
                                {
                                    "errorMessage": "related_formula_error",
                                    "parentCode": "merchant_details_annual_turnover",
                                    "relatedTo": {
                                        "formula": {
                                            "fields": [
                                                {
                                                    "chapterCode": "merchant_details_screen",
                                                    "code": "merchant_details_average_tx_amount",
                                                    "sectionCode": "turnover_tx_volume_section"
                                                }
                                            ],
                                            "operator": "="
                                        },
                                        "relation": ">="
                                    },
                                    "type": "related"
                                },
                                {
                                    "errorMessage": "min_value_error",
                                    "minValue": 0,
                                    "parentCode": "merchant_details_annual_turnover",
                                    "type": "minValue"
                                }
                            ]
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_average_tx_amount",
                            "label": "merchant_details_average_tx_amount_label",
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "turnover_tx_volume_section",
                            "sequence": 2,
                            "type": "onb_numberInput",
                            "validations": [
                                {
                                    "errorMessage": "min_value_error",
                                    "minValue": 0,
                                    "parentCode": "merchant_details_average_tx_amount",
                                    "type": "minValue"
                                }
                            ]
                        },
                        {
                            "breakBefore": true,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_down_payment_question",
                            "defaultValue": "no",
                            "label": "merchant_details_down_payment_question_label",
                            "options": [
                                {
                                    "label": "yes",
                                    "parentCode": "merchant_details_down_payment_question",
                                    "value": "yes"
                                },
                                {
                                    "label": "no",
                                    "parentCode": "merchant_details_down_payment_question",
                                    "value": "no"
                                }
                            ],
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "turnover_tx_volume_section",
                            "sequence": 3,
                            "type": "onb_horizontalRadioButtonsGroup"
                        }
                    ],
                    "sequence": 5,
                    "title": "turnover_tx_volume_section_label"
                },
                {
                    "allowedMultiple": false,
                    "chapterCode": "merchant_details_screen",
                    "code": "card_transaction_turnover",
                    "description": "card_transaction_turnover",
                    "fields": [
                        {
                            "breakBefore": false,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_average_amount_for_service_position",
                            "label": "merchant_details_average_amount_for_service_position_label",
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "card_transaction_turnover",
                            "sequence": 1,
                            "type": "onb_numberInput",
                            "validations": [
                                {
                                    "errorMessage": "min_value_error",
                                    "minValue": 0,
                                    "parentCode": "merchant_details_average_amount_for_service_position",
                                    "type": "minValue"
                                },
                                {
                                    "errorMessage": "max_amount_error",
                                    "parentCode": "merchant_details_average_amount_for_service_position",
                                    "relatedTo": {
                                        "formula": {
                                            "fields": [
                                                {
                                                    "chapterCode": "merchant_details_screen",
                                                    "code": "merchant_details_max_amount_of_service_provision",
                                                    "sectionCode": "card_transaction_turnover"
                                                }
                                            ],
                                            "operator": "="
                                        },
                                        "relation": "<"
                                    },
                                    "type": "related"
                                }
                            ]
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_downpayment_in_percentage_of_sales",
                            "label": "merchant_details_downpayment_in_percentage_of_sales_label",
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "card_transaction_turnover",
                            "sequence": 2,
                            "type": "onb_percentageInput",
                            "validations": [
                                {
                                    "errorMessage": "min_value_error",
                                    "minValue": 0,
                                    "parentCode": "merchant_details_downpayment_in_percentage_of_sales",
                                    "type": "minValue"
                                },
                                {
                                    "errorMessage": "max_value_error",
                                    "maxValue": 100,
                                    "parentCode": "merchant_details_downpayment_in_percentage_of_sales",
                                    "type": "maxValue"
                                }
                            ]
                        },
                        {
                            "breakBefore": true,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_min_amount_of_service_provision",
                            "label": "merchant_details_min_amount_of_service_provision_label",
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "card_transaction_turnover",
                            "sequence": 3,
                            "type": "onb_numberInput",
                            "validations": [
                                {
                                    "errorMessage": "lower_error_message",
                                    "parentCode": "merchant_details_min_amount_of_service_provision",
                                    "relatedTo": {
                                        "formula": {
                                            "fields": [
                                                {
                                                    "chapterCode": "merchant_details_screen",
                                                    "code": "merchant_details_max_amount_of_service_provision",
                                                    "sectionCode": "card_transaction_turnover"
                                                }
                                            ],
                                            "operator": "="
                                        },
                                        "relation": "<"
                                    },
                                    "type": "related"
                                },
                                {
                                    "errorMessage": "average_amount_error",
                                    "parentCode": "merchant_details_min_amount_of_service_provision",
                                    "relatedTo": {
                                        "formula": {
                                            "fields": [
                                                {
                                                    "chapterCode": "merchant_details_screen",
                                                    "code": "merchant_details_average_amount_for_service_position",
                                                    "sectionCode": "card_transaction_turnover"
                                                }
                                            ],
                                            "operator": "="
                                        },
                                        "relation": "<"
                                    },
                                    "type": "related"
                                },
                                {
                                    "errorMessage": "min_value_error",
                                    "minValue": 0,
                                    "parentCode": "merchant_details_min_amount_of_service_provision",
                                    "type": "minValue"
                                }
                            ]
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "merchant_details_screen",
                            "code": "merchant_details_max_amount_of_service_provision",
                            "label": "merchant_details_max_amount_of_service_provision_label",
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "card_transaction_turnover",
                            "sequence": 4,
                            "type": "onb_numberInput",
                            "validations": [
                                {
                                    "errorMessage": "min_value_error",
                                    "minValue": 0,
                                    "parentCode": "merchant_details_max_amount_of_service_provision",
                                    "type": "minValue"
                                }
                            ]
                        }
                    ],
                    "renderConditions": {
                        "args": [
                            {
                                "code": "merchant_details_screen.turnover_tx_volume_section.merchant_details_down_payment_question",
                                "operator": "eq",
                                "sequence": 1,
                                "value": "yes"
                            }
                        ],
                        "formula": "1"
                    },
                    "sequence": 6,
                    "title": "card_transaction_turnover"
                }
            ],
            "sequence": 2,
            "subtitle": "merchant_details_screen",
            "title": "merchant_details_screen"
        },
        {
            "code": "contact_details_screen",
            "sections": [
                {
                    "allowedMultiple": false,
                    "chapterCode": "contact_details_screen",
                    "code": "contact_information_section",
                    "description": "contact_information_section_label",
                    "fields": [
                        {
                            "breakBefore": false,
                            "chapterCode": "contact_details_screen",
                            "code": "contact_salutation",
                            "label": "contact_salutation_label",
                            "options": [
                                {
                                    "label": "mr_option",
                                    "parentCode": "contact_salutation",
                                    "value": "mr_option"
                                },
                                {
                                    "label": "mrs_option",
                                    "parentCode": "contact_salutation",
                                    "value": "mrs_option"
                                },
                                {
                                    "label": "divers_option",
                                    "parentCode": "contact_salutation",
                                    "value": "divers_option"
                                }
                            ],
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "contact_information_section",
                            "sequence": 1,
                            "type": "onb_standardPicklist"
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "contact_details_screen",
                            "code": "contact_title",
                            "label": "contact_title_label",
                            "options": [
                                {
                                    "label": "ba_title_option",
                                    "parentCode": "contact_title",
                                    "value": "ba_title_option"
                                },
                                {
                                    "label": "ing_title_option",
                                    "parentCode": "contact_title",
                                    "value": "ing_title_option"
                                },
                                {
                                    "label": "kfm_title_option",
                                    "parentCode": "contact_title",
                                    "value": "kfm_title_option"
                                }
                            ],
                            "readOnly": false,
                            "required": false,
                            "sectionCode": "contact_information_section",
                            "sequence": 2,
                            "type": "onb_standardPicklist"
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "contact_details_screen",
                            "code": "contact_lastname",
                            "label": "contact_lastname_label",
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "contact_information_section",
                            "sequence": 3,
                            "type": "onb_standardText",
                            "validations": [
                                {
                                    "errorMessage": "max_length_error",
                                    "maxLength": 35,
                                    "parentCode": "contact_lastname",
                                    "type": "maxLength"
                                }
                            ]
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "contact_details_screen",
                            "code": "contact_firstname",
                            "label": "contact_firstname_label",
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "contact_information_section",
                            "sequence": 4,
                            "type": "onb_standardText",
                            "validations": [
                                {
                                    "errorMessage": "max_length_error",
                                    "maxLength": 50,
                                    "parentCode": "contact_firstname",
                                    "type": "maxLength"
                                }
                            ]
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "contact_details_screen",
                            "code": "contact_date_of_birth",
                            "label": "contact_date_of_birth_label",
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "contact_information_section",
                            "sequence": 5,
                            "type": "onb_dateInput",
                            "validations": [
                                {
                                    "endDate": "2003-12-09",
                                    "errorMessage": "minimum_age_error",
                                    "parentCode": "contact_date_of_birth",
                                    "startDate": "1921-12-09",
                                    "type": "intervalCheck"
                                }
                            ]
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "contact_details_screen",
                            "code": "contact_street",
                            "label": "contact_street_label",
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "contact_information_section",
                            "sequence": 6,
                            "type": "onb_standardText",
                            "validations": [
                                {
                                    "errorMessage": "max_length_error",
                                    "maxLength": 30,
                                    "parentCode": "contact_street",
                                    "type": "maxLength"
                                }
                            ]
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "contact_details_screen",
                            "code": "contact_street_number",
                            "label": "contact_street_number_label",
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "contact_information_section",
                            "sequence": 7,
                            "type": "onb_standardText",
                            "validations": [
                                {
                                    "errorMessage": "max_length_error",
                                    "maxLength": 5,
                                    "parentCode": "contact_street_number",
                                    "type": "maxLength"
                                }
                            ]
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "contact_details_screen",
                            "code": "contact_country",
                            "defaultValue": "country_option_de",
                            "label": "contact_country_label",
                            "options": [
                                {
                                    "label": "country_option_de",
                                    "parentCode": "contact_country",
                                    "value": "country_option_de"
                                }
                            ],
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "contact_information_section",
                            "sequence": 8,
                            "type": "onb_standardPicklist"
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "contact_details_screen",
                            "code": "contact_postal_code",
                            "label": "contact_postal_code_label",
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "contact_information_section",
                            "sequence": 9,
                            "type": "onb_standardText",
                            "validations": [
                                {
                                    "errorMessage": "min_length_error",
                                    "minLength": 5,
                                    "parentCode": "contact_postal_code",
                                    "type": "minLength"
                                },
                                {
                                    "errorMessage": "postal_code_invalid_format_error",
                                    "parentCode": "contact_postal_code",
                                    "pattern": "^([0-9]*)$",
                                    "type": "regex"
                                },
                                {
                                    "errorMessage": "max_length_error",
                                    "maxLength": 5,
                                    "parentCode": "contact_postal_code",
                                    "type": "maxLength"
                                }
                            ]
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "contact_details_screen",
                            "code": "contact_city",
                            "label": "contact_city_label",
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "contact_information_section",
                            "sequence": 10,
                            "type": "onb_standardText",
                            "validations": [
                                {
                                    "errorMessage": "max_length_error",
                                    "maxLength": 35,
                                    "parentCode": "contact_city",
                                    "type": "maxLength"
                                }
                            ]
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "contact_details_screen",
                            "code": "contact_country_phone",
                            "defaultValue": "country_phone_option_de",
                            "label": "merchant_details_country_phone_label",
                            "options": [
                                {
                                    "label": "country_phone_option_de",
                                    "parentCode": "contact_country_phone",
                                    "value": "country_phone_option_de"
                                }
                            ],
                            "readOnly": false,
                            "required": false,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "contact_information_section",
                            "sequence": 11,
                            "type": "onb_standardPicklist"
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "contact_details_screen",
                            "code": "contact_private_phone_number",
                            "label": "contact_private_phone_number_label",
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "contact_information_section",
                            "sequence": 12,
                            "type": "onb_phoneInput",
                            "validations": [
                                {
                                    "errorMessage": "general_required_message",
                                    "parentCode": "contact_private_phone_number",
                                    "pattern": "^([0-9]*)$",
                                    "type": "regex"
                                },
                                {
                                    "errorMessage": "max_length_error",
                                    "maxLength": 15,
                                    "parentCode": "contact_private_phone_number",
                                    "type": "maxLength"
                                }
                            ]
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "contact_details_screen",
                            "code": "contact_private_email",
                            "label": "contact_private_email_label",
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "contact_information_section",
                            "sequence": 13,
                            "type": "onb_emailField",
                            "validations": [
                                {
                                    "errorMessage": "max_length_error",
                                    "maxLength": 20,
                                    "parentCode": "contact_private_email",
                                    "type": "maxLength"
                                },
                                {
                                    "errorMessage": "email_invalid_format_error",
                                    "parentCode": "contact_private_email",
                                    "pattern": "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}",
                                    "type": "regex"
                                }
                            ]
                        }
                    ],
                    "sequence": 1,
                    "title": "contact_information_section_label"
                },
                {
                    "allowedMultiple": false,
                    "chapterCode": "contact_details_screen",
                    "code": "signatory_information_section",
                    "description": "signatory_information_section_label",
                    "fields": [
                        {
                            "breakBefore": false,
                            "chapterCode": "contact_details_screen",
                            "code": "contact_authorized_signatory",
                            "defaultValue": "yes",
                            "label": "contact_authorized_signatory_label",
                            "options": [
                                {
                                    "label": "yes",
                                    "parentCode": "contact_authorized_signatory",
                                    "value": "yes"
                                },
                                {
                                    "label": "no",
                                    "parentCode": "contact_authorized_signatory",
                                    "value": "no"
                                }
                            ],
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "signatory_information_section",
                            "sequence": 1,
                            "type": "onb_horizontalRadioButtonsGroup"
                        }
                    ],
                    "sequence": 2,
                    "title": "signatory_information_section_label"
                },
                {
                    "allowedMultiple": true,
                    "chapterCode": "contact_details_screen",
                    "code": "multi_signatory_section",
                    "description": "multi_signatory_section_label",
                    "fields": [
                        {
                            "breakBefore": false,
                            "chapterCode": "contact_details_screen",
                            "code": "multi_contact_salutation",
                            "label": "contact_salutation_label",
                            "options": [
                                {
                                    "label": "mr_option",
                                    "parentCode": "multi_contact_salutation",
                                    "value": "mr_option"
                                },
                                {
                                    "label": "mrs_option",
                                    "parentCode": "multi_contact_salutation",
                                    "value": "mrs_option"
                                },
                                {
                                    "label": "divers_option",
                                    "parentCode": "multi_contact_salutation",
                                    "value": "divers_option"
                                }
                            ],
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "multi_signatory_section",
                            "sequence": 1,
                            "type": "onb_standardPicklist"
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "contact_details_screen",
                            "code": "multi_contact_firstname",
                            "label": "contact_firstname_label",
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "multi_signatory_section",
                            "sequence": 2,
                            "type": "onb_standardText"
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "contact_details_screen",
                            "code": "multi_contact_lastname",
                            "label": "contact_lastname_label",
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "multi_signatory_section",
                            "sequence": 3,
                            "type": "onb_standardText"
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "contact_details_screen",
                            "code": "multi_contact_date_of_birth",
                            "label": "contact_date_of_birth_label",
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "multi_signatory_section",
                            "sequence": 4,
                            "type": "onb_dateInput"
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "contact_details_screen",
                            "code": "multi_contact_private_email",
                            "label": "contact_private_email_label",
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "multi_signatory_section",
                            "sequence": 13,
                            "type": "onb_emailField"
                        }
                    ],
                    "maxNumberOfSections": 3,
                    "minNumberOfSections": 0,
                    "renderConditions": {
                        "args": [
                            {
                                "code": "contact_details_screen.signatory_information_section.contact_authorized_signatory",
                                "operator": "eq",
                                "sequence": 1,
                                "value": "no"
                            }
                        ],
                        "formula": "1"
                    },
                    "sequence": 3,
                    "title": "multi_signatory_section_label"
                }
            ],
            "sequence": 3,
            "subtitle": "contact_details_screen",
            "title": "contact_details_screen"
        },
        {
            "code": "bank_account_screen",
            "sections": [
                {
                    "allowedMultiple": false,
                    "chapterCode": "bank_account_screen",
                    "code": "bank_account_section",
                    "description": "bank_account_section_label",
                    "fields": [
                        {
                            "breakBefore": false,
                            "chapterCode": "bank_account_screen",
                            "code": "bank_account_holder",
                            "label": "bank_account_holder_label",
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "bank_account_section",
                            "sequence": 1,
                            "type": "onb_standardText"
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "bank_account_screen",
                            "code": "bank_account_IBAN",
                            "label": "bank_account_IBAN_label",
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "bank_account_section",
                            "sequence": 2,
                            "type": "onb_creditCard",
                            "validations": [
                                {
                                    "errorMessage": "no_spaces_format_error",
                                    "parentCode": "bank_account_IBAN",
                                    "pattern": "^\\S*$",
                                    "type": "regex"
                                },
                                {
                                    "errorMessage": "fix_length_IBAN_error",
                                    "parentCode": "bank_account_IBAN",
                                    "pattern": "22",
                                    "type": "fixLength"
                                }
                            ]
                        },
                        {
                            "breakBefore": true,
                            "chapterCode": "bank_account_screen",
                            "code": "bank_account_bic",
                            "label": "bank_account_bic_label",
                            "readOnly": false,
                            "required": false,
                            "sectionCode": "bank_account_section",
                            "sequence": 3,
                            "type": "onb_standardText",
                            "validations": [
                                {
                                    "errorMessage": "invalid_length_error",
                                    "parentCode": "bank_account_bic",
                                    "pattern": "0|8|11",
                                    "type": "fixLength"
                                }
                            ]
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "bank_account_screen",
                            "code": "bank_account_creditor_id",
                            "label": "bank_account_creditor_id_label",
                            "readOnly": false,
                            "required": false,
                            "sectionCode": "bank_account_section",
                            "sequence": 4,
                            "type": "onb_standardText",
                            "validations": [
                                {
                                    "errorMessage": "fix_length_creditorID_error",
                                    "parentCode": "bank_account_creditor_id",
                                    "pattern": "0|18",
                                    "type": "fixLength"
                                }
                            ]
                        }
                    ],
                    "sequence": 1,
                    "title": "bank_account_section_label"
                }
            ],
            "sequence": 4,
            "subtitle": "bank_account_screen",
            "title": "bank_account_screen"
        },
        {
            "code": "consent_screen",
            "sections": [
                {
                    "allowedMultiple": false,
                    "chapterCode": "consent_screen",
                    "code": "payment_processing_section",
                    "description": "payment_processing_section_label",
                    "displayCheckbox": true,
                    "fields": [
                        {
                            "breakBefore": false,
                            "chapterCode": "consent_screen",
                            "code": "consent_first_checkbox",
                            "hideLabel": true,
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "payment_processing_section",
                            "sequence": 1,
                            "type": "onb_checkbox"
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "consent_screen",
                            "code": "consent_paragraph_1",
                            "label": "consent_paragraph_1_label",
                            "readOnly": false,
                            "required": false,
                            "sectionCode": "payment_processing_section",
                            "sequence": 2,
                            "type": "onb_freeText"
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "consent_screen",
                            "code": "consent_blank_space_1",
                            "hideLabel": true,
                            "numberOfSpaces": 1,
                            "readOnly": false,
                            "required": false,
                            "sectionCode": "payment_processing_section",
                            "sequence": 3,
                            "type": "onb_blankSpace"
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "consent_screen",
                            "code": "consent_paragraph_2",
                            "label": "consent_paragraph_2_label",
                            "readOnly": false,
                            "required": false,
                            "sectionCode": "payment_processing_section",
                            "sequence": 4,
                            "type": "onb_freeText"
                        }
                    ],
                    "sequence": 1,
                    "title": "payment_processing_section_label"
                },
                {
                    "allowedMultiple": false,
                    "chapterCode": "consent_screen",
                    "code": "final_regulations_section",
                    "description": "final_regulations_section_label",
                    "displayCheckbox": true,
                    "fields": [
                        {
                            "breakBefore": false,
                            "chapterCode": "consent_screen",
                            "code": "consent_second_checkbox",
                            "hideLabel": true,
                            "readOnly": false,
                            "required": true,
                            "requiredErrorMessage": "general_required_message",
                            "sectionCode": "final_regulations_section",
                            "sequence": 1,
                            "type": "onb_checkbox"
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "consent_screen",
                            "code": "consent_paragraph_3",
                            "label": "consent_paragraph_3_label",
                            "readOnly": false,
                            "required": false,
                            "sectionCode": "final_regulations_section",
                            "sequence": 2,
                            "type": "onb_freeText",
                            "urls": [
                                "https://www.payone.com/dsgvo-haendler/"
                            ]
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "consent_screen",
                            "code": "consent_blank_space_2",
                            "hideLabel": true,
                            "numberOfSpaces": 1,
                            "readOnly": false,
                            "required": false,
                            "sectionCode": "final_regulations_section",
                            "sequence": 3,
                            "type": "onb_blankSpace"
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "consent_screen",
                            "code": "consent_paragraph_4",
                            "label": "consent_paragraph_4_label",
                            "readOnly": false,
                            "required": false,
                            "sectionCode": "final_regulations_section",
                            "sequence": 4,
                            "type": "onb_freeText"
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "consent_screen",
                            "code": "consent_blank_space_3",
                            "hideLabel": true,
                            "numberOfSpaces": 1,
                            "readOnly": false,
                            "required": false,
                            "sectionCode": "final_regulations_section",
                            "sequence": 5,
                            "type": "onb_blankSpace"
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "consent_screen",
                            "code": "consent_paragraph_5",
                            "label": "consent_paragraph_5_label",
                            "readOnly": false,
                            "required": false,
                            "sectionCode": "final_regulations_section",
                            "sequence": 6,
                            "type": "onb_freeText"
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "consent_screen",
                            "code": "consent_blank_space_4",
                            "hideLabel": true,
                            "numberOfSpaces": 1,
                            "readOnly": false,
                            "required": false,
                            "sectionCode": "final_regulations_section",
                            "sequence": 7,
                            "type": "onb_blankSpace"
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "consent_screen",
                            "code": "consent_bullet_paragraph_1",
                            "label": "consent_bullet_paragraph_1_label",
                            "readOnly": false,
                            "required": false,
                            "sectionCode": "final_regulations_section",
                            "sequence": 8,
                            "type": "onb_bulletFreeText",
                            "urls": [
                                "https://a.storyblok.com/f/64176/x/57050a0544/10700_de-agb_0220.pdf"
                            ]
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "consent_screen",
                            "code": "consent_bullet_paragraph_2",
                            "label": "consent_bullet_paragraph_2_label",
                            "readOnly": false,
                            "required": false,
                            "sectionCode": "final_regulations_section",
                            "sequence": 9,
                            "type": "onb_bulletFreeText",
                            "urls": [
                                "https://cdn.ingenico.com/binaries/content/assets/germany-payment-services/download-center/dcc_agb_de_payone_11-2019.pdf"
                            ]
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "consent_screen",
                            "code": "consent_bullet_paragraph_3",
                            "label": "consent_bullet_paragraph_3_label",
                            "readOnly": false,
                            "required": false,
                            "sectionCode": "final_regulations_section",
                            "sequence": 10,
                            "type": "onb_bulletFreeText",
                            "urls": [
                                "https://cdn.ingenico.com/binaries/content/assets/germany-payment-services/download-center/agb-easysafe-payone_11-2019.pdf"
                            ]
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "consent_screen",
                            "code": "consent_bullet_paragraph_4",
                            "label": "consent_bullet_paragraph_4_label",
                            "readOnly": false,
                            "required": false,
                            "sectionCode": "final_regulations_section",
                            "sequence": 11,
                            "type": "onb_bulletFreeText",
                            "urls": [
                                "https://cdn.ingenico.com/binaries/content/assets/germany-payment-services/download-center/agb-idrm_payone_11-2019.pdf"
                            ]
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "consent_screen",
                            "code": "consent_bullet_paragraph_5",
                            "label": "consent_bullet_paragraph_5_label",
                            "readOnly": false,
                            "required": false,
                            "sectionCode": "final_regulations_section",
                            "sequence": 12,
                            "type": "onb_bulletFreeText",
                            "urls": [
                                "https://a.storyblok.com/f/64176/x/1d3f9422be/handlerbedingungen-girocard-und-technischer-anhang-deutsche-kreditwirtschaft-juli-2020_112020_01.pdf"
                            ]
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "consent_screen",
                            "code": "consent_bullet_paragraph_6",
                            "label": "consent_bullet_paragraph_6_label",
                            "readOnly": false,
                            "required": false,
                            "sectionCode": "final_regulations_section",
                            "sequence": 13,
                            "type": "onb_bulletFreeText",
                            "urls": [
                                "https://cdn.ingenico.com/binaries/content/assets/germany-payment-services/download-center/agb-pos-netzbetrieb-payone_11-2019.pdf"
                            ]
                        }
                    ],
                    "sequence": 2,
                    "title": "final_regulations_section_label"
                },
                {
                    "allowedMultiple": false,
                    "chapterCode": "consent_screen",
                    "code": "discount_and_survey_section",
                    "description": "discount_and_survey_section_label",
                    "displayCheckbox": true,
                    "fields": [
                        {
                            "breakBefore": false,
                            "chapterCode": "consent_screen",
                            "code": "consent_third_checkbox",
                            "hideLabel": true,
                            "readOnly": false,
                            "required": false,
                            "sectionCode": "discount_and_survey_section",
                            "sequence": 1,
                            "type": "onb_checkbox"
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "consent_screen",
                            "code": "consent_paragraph_6",
                            "label": "consent_paragraph_6_label",
                            "readOnly": false,
                            "required": false,
                            "sectionCode": "discount_and_survey_section",
                            "sequence": 2,
                            "type": "onb_freeText"
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "consent_screen",
                            "code": "consent_blank_space_5",
                            "hideLabel": true,
                            "numberOfSpaces": 1,
                            "readOnly": false,
                            "required": false,
                            "sectionCode": "discount_and_survey_section",
                            "sequence": 3,
                            "type": "onb_blankSpace"
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "consent_screen",
                            "code": "consent_paragraph_7",
                            "label": "consent_paragraph_7_label",
                            "readOnly": false,
                            "required": false,
                            "sectionCode": "discount_and_survey_section",
                            "sequence": 4,
                            "type": "onb_freeText"
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "consent_screen",
                            "code": "consent_blank_space_6",
                            "hideLabel": true,
                            "numberOfSpaces": 1,
                            "readOnly": false,
                            "required": false,
                            "sectionCode": "discount_and_survey_section",
                            "sequence": 5,
                            "type": "onb_blankSpace"
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "consent_screen",
                            "code": "consent_paragraph_8",
                            "label": "consent_paragraph_8_label",
                            "readOnly": false,
                            "required": false,
                            "sectionCode": "discount_and_survey_section",
                            "sequence": 6,
                            "type": "onb_freeText",
                            "urls": [
                                "https://www.payone.com/DE-de/datenschutz"
                            ]
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "consent_screen",
                            "code": "consent_blank_space_7",
                            "hideLabel": true,
                            "numberOfSpaces": 2,
                            "readOnly": false,
                            "required": false,
                            "sectionCode": "discount_and_survey_section",
                            "sequence": 7,
                            "type": "onb_blankSpace"
                        },
                        {
                            "breakBefore": false,
                            "chapterCode": "consent_screen",
                            "code": "consent_paragraph_9",
                            "label": "consent_paragraph_9_label",
                            "readOnly": false,
                            "required": false,
                            "sectionCode": "discount_and_survey_section",
                            "sequence": 8,
                            "type": "onb_freeText"
                        }
                    ],
                    "sequence": 3,
                    "title": "discount_and_survey_section_label"
                }
            ],
            "sequence": 5,
            "subtitle": "consent_screen",
            "title": "consent_screen"
        }
    ]
};
