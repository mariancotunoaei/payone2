import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import RenderRoutes from './routing';

import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'globals/styles/index.scss';

import { store } from 'globals/scripts/store';
import reportWebVitals from './reportWebVitals';

import { addErrors } from 'actions/notifications';
import { loadRemoteFont } from 'actions/remote';

import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import localizedFormat from 'dayjs/plugin/localizedFormat';

import 'dayjs/locale/de';

dayjs.extend(localeData);
dayjs.extend(localizedFormat);
dayjs.locale('de');

if (window.poConnect && window.poConnect.resources) {
    // we expect SalesForce to provide us the fonts as an array having the following form
    // [{ name: 'Volte', url: 'www.instance-of-salesforce/address-of-stored-file }]
    // then we will add the fonts to the document object
    if (window.poConnect.resources.fonts) {
        window.poConnect.resources.fonts.forEach(font => {
            loadRemoteFont(font.name, font.url);
        });
    } else {
        addErrors([`The fonts couldn't be uploaded because they are missing from the meta data!`]);
    }
}

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // load local fonts - just for development
    require('globals/styles/fonts.scss');
}

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <RenderRoutes />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
