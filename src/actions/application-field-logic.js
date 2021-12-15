import { remote_getTranslations } from 'actions/remote';
import { storeTranslations } from 'actions/translations';
import { addErrors } from 'actions/notifications';
import { setLoaderVisibility } from 'actions/ui';

export const changeAppLanguage = (language) => {
    setLoaderVisibility(true);
    return remote_getTranslations(language || 'de-DE'/*navigator.language*/)
        .then(translations => {
            console.log('response----------translations----------ui', translations);
            storeTranslations(translations.dictionary || {});
            setLoaderVisibility(false);
        })
        .catch((error) => {
            addErrors([error.toString()]);
            setLoaderVisibility(false);
        });
};
