export const remote_getApplicationStructure = () => {
    if (window.poConnect) {
        return window.poConnect.getApplicationStructure('context');
    } else {
        return Promise.reject('Salesforce is not accessible!');
    }
};

export const remote_saveApplicationStructure = (applicationStructure = {}) => {
    if (window.poConnect) {
        return window.poConnect.saveJSON(JSON.stringify(applicationStructure));
    } else {
        return Promise.reject('Salesforce is not accessible!');
    }
};

export const remote_getTranslations = lang => {
    if (window.poConnect) {
        return window.poConnect.getOnboardingDictionary(lang || 'en-US');
    } else {
        return Promise.reject('Salesforce is not accessible!');
    }
};

export const loadRemoteFont = (fontName, fontUrl) => {
    const new_font = new FontFace(fontName, `url(${fontUrl})`);
    new_font
        .load()
        .then(function (loaded_face) {
            // use font here
            document.fonts.add(loaded_face);
        })
        .catch(function (error) {});
};
