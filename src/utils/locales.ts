import validator from 'validator';
import { getLanguageStr } from '../constants/config';

import enUS from 'ant-design-vue/lib/locale-provider/en_US';
import zhTW from 'ant-design-vue/lib/locale-provider/zh_TW';
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
import jaJP from 'ant-design-vue/lib/locale-provider/ja_JP';

function getLocale() {
    const language = getLanguage();

    switch (language) {
    case 'zh_TW':
        return zhTW;
    case 'zh_CN':
        return zhCN;
    case 'ja':
        return jaJP;
    default:
        return enUS;
    }
}

function getLanguage() {
    const localeStr = getLanguageStr();

    if (localeStr !== undefined &&
        localeStr !== null &&
        !validator.isEmpty(localeStr)) {
        return localeStr.replace('-', '_');
    } else {
        return 'en_US';
    }
}

export { getLanguage, getLocale };
