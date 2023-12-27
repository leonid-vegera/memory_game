import ua from './ua';
import en from './en';

let activeLanguage = JSON.parse(localStorage.getItem('checked')) ? 'ua' : 'en' || 'en';

export const useTranslations = () => {
  const translate = (lang = activeLanguage) => {
    let translations;

    switch(lang) {
      case 'en':
        translations = en;
        break;
      case 'ua':
        translations = ua;
        break;
      default:
        translations = en;
    }
    return translations;
  }

  return {
    translate
  }
}
