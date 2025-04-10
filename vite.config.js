import { defineConfig } from 'vite';
import enStrings from "./json/i18n-ec/en/strings.json";
import frStrings from "./json/i18n-ec/fr/strings.json";

export default defineConfig({
  json: {
    namedExports: true
  }
});
import(`./json/i18n-ec/${t}/strings.json`);

const translations = {
  en: enStrings,
  fr: frStrings
};
const selectedLanguage = "en";  // Example
const strings = translations[selectedLanguage];
