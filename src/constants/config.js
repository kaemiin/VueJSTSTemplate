const IS_DEBUG_MODE = false;

let language = lang;

function setLanguageStr(lang) {
    if (validator.isEmpty(lang)) {
        return;
    }

    language = lang;
}

function getLanguageStr() {
    return language;
}

export { IS_DEBUG_MODE, getLanguageStr, setLanguageStr };
