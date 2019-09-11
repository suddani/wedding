import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      "*** The bride ***": "*** The bride ***",
      "*** The groom ***": "*** The groom ***",
      "The happy couple": "The happy couple"
    }
  },
  de: {
    translation: {
      "*** The bride ***": "*** Die braut ***",
      "*** The groom ***": "*** Der bräutigam ***",
      "The happy couple": "Das glückliche paar"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "de",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;