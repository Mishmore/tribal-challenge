import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Languages
import es from './es/translations'
import en from './en/translations'

// Translations
const resources = {
  en: { translation: en },
  es: { translation: es },
}

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
})

i18n.changeLanguage('en')
