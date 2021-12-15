import React, { useEffect } from 'react';
import NotificationHandler from 'components/NotificationHandler';
import Loader from 'components/Loader';
import Content from 'components/Content';

import { setLoaderVisibility } from 'actions/ui';
import { goToPage, setBrowserLocation } from 'actions/browser-location';
import { remote_getApplicationStructure, remote_getTranslations } from 'actions/remote';
import { local_saveApplicationStructure, setActiveScreen } from 'actions/application-structure';
import { storeTranslations } from 'actions/translations';

import { appStructureExample } from 'constants/application-structure-example';
import { translationsExample } from 'constants/translations-example';
import { addErrors } from 'actions/notifications';

import './Main.scss';

const screenIndexFromURL = (pathname = '') => {
    let screenIndex = -1;
    if (pathname.indexOf('/screen/') !== -1) {
        screenIndex = pathname.substring(pathname.indexOf('/screen/') + ('/screen/').length);
        screenIndex = Number(screenIndex);
        if (isNaN(screenIndex)) {
            screenIndex = -1;
        }
    }
    return screenIndex;
};

const Main = (props) => {
    useEffect(() => {
        setLoaderVisibility(true);
        return remote_getTranslations('de-DE'/*navigator.language || 'en-US'*/)
            .then(translations => {
                console.log('response----------translations----------ui', translations);
                storeTranslations(translations.dictionary || {});
                return remote_getApplicationStructure();
            })
            .then(appStructure => {
                console.log('response----------app-structure---------ui', appStructure);
                local_saveApplicationStructure(appStructure);
                goToPage(`/screen/${appStructureExample.activeScreen}`, false);
                setLoaderVisibility(false);
            })
            .catch((error) => {
                addErrors([error.toString()]);
                local_saveApplicationStructure(appStructureExample);
                storeTranslations(translationsExample.dictionary);
                goToPage(`/screen/${appStructureExample.activeScreen}`, false);
                setLoaderVisibility(false);
            });
    }, []);

    setBrowserLocation({
        history: props.history,
        location: props.location,
        match: props.match
    });

    // set the active screen in redux if it is an active screen index in the URL
    const currentScreenIndex = screenIndexFromURL(window.location.href);
    if (currentScreenIndex !== -1) {
        setActiveScreen(currentScreenIndex);
    }

    return (
        <div className='main'>
            <Content>
                {props.children}
            </Content>

            <Loader />

            <NotificationHandler />
        </div>
    );
};

export default Main;
