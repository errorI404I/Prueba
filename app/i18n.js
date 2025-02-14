import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: {
          "welcome": "Bienvenido al Centro de Entrenamiento",
          // Otras traducciones...
        }
      },
      en: {
        translation: {
          "welcome": "Welcome to the Training Center",
          // Otras traducciones...
        }
      }
    },
    lng: "es", // idioma por defecto
    fallbackLng: "es",
    interpolation: {
      escapeValue: false // React ya hace el escape
    }
  });

export default i18n; 