import { SET_BROWSER_LOCATION } from 'constants/redux-actions';
import { SCREEN_TRANSITION_DURATION } from 'constants/theme';
import { dispatch } from 'globals/scripts/store';
import { getBrowserLocation } from 'selectors/browser-location';
import { setScreenTransitionActivity } from './ui';

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

export const goToPage = (pathname = '', withTransition = true, keepPreviousPageInHistory = true) => {

    const currentURL = window.location.href;
    if (pathname === currentURL.substring(currentURL.indexOf('/#') + ('/#').length)) {
        return;
    }

    const currentScreenIndex = screenIndexFromURL(window.location.href);
    const nextScreenIndex = screenIndexFromURL(pathname);

    if (currentScreenIndex === nextScreenIndex && currentScreenIndex !== -1) {
        return;
    }

    if (withTransition) {
        if (currentScreenIndex === -1 || nextScreenIndex === -1) {
            setScreenTransitionActivity('exit-to-left');
        } else if (currentScreenIndex < nextScreenIndex) {
            setScreenTransitionActivity('exit-to-left');
        } else if (currentScreenIndex > nextScreenIndex) {
            setScreenTransitionActivity('exit-to-right');
        }
    }

    setTimeout(() => {
        const location = getBrowserLocation();
        if (withTransition) {
            if (currentScreenIndex === -1 || nextScreenIndex === -1) {
                setScreenTransitionActivity('entrance-from-right');
            } else if (currentScreenIndex < nextScreenIndex) {
                setScreenTransitionActivity('entrance-from-right');
            } else if (currentScreenIndex > nextScreenIndex) {
                setScreenTransitionActivity('entrance-from-left');
            }
        }

        window.scrollTo(0, 0);

        if (keepPreviousPageInHistory) {
            location.history.push(pathname);
        } else {
            location.history.replace(pathname);
        }
    }, SCREEN_TRANSITION_DURATION);

};

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    global.goToPage = goToPage;
}

export const setBrowserLocation = (location) => dispatch(SET_BROWSER_LOCATION, location);
