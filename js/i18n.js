import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import Expo from 'expo';

// creating a language detection plugin using expo
// http://i18next.com/docs/ownplugin/#languagedetector
const languageDetector = {
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: (callback) => { return /*'en'; */ Expo.Util.getCurrentLocaleAsync().then(lng => { callback(lng); })  },
  init: () => {},
  cacheUserLanguage: () => {}
}

i18n
  .use(languageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',

    resources: {
      en: {
        home: {
          title: 'Welcome',
          introduction: 'This text comes from i18next and is provided in english.'
        },
        page2: {
          title: 'Page 2',
          introduction: 'This text on page two.'
        },
        common: {
          currentLanguage: 'The current language is "{{lng}}"',
          actions: {
            toggleToSpanish: 'Spanish',
            toggleToEnglish: 'English',
            goToPage2: 'Open page 2'
          }
        }
      },
      es: {
        home: {
          title: 'Bienvenido',
          introduction: 'Este es un texto en español Mexicano traducido en i18next by Edgarngg'
        },
        page2: {
          title: 'Página 2',
          introduction: 'Texto en página 2'
        },
        common: {
          currentLanguage: 'El lenguaje actual es "{{lng}}"',
          actions: {
            toggleToSpanish: 'Español',
            toggleToEnglish: 'English',
            goToPage2: 'Abrir Página #2'
          }
        }
      },
      
    },

    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',

    debug: true,

    // cache: {
    //   enabled: true
    // },

    interpolation: {
      escapeValue: false, // not needed for react as it does escape per default to prevent xss!
    }
  });


export default i18n;