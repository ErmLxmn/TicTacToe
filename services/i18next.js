import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import zh from "../locales/zh.json";
import { AsyncStorage } from "@react-native-async-storage/async-storage";

// Save configuration data
const config = {
  language: "",
};

export const languages = {
  en: {
    translation: en,
  },
  zh: {
    translation: zh,
  },
};

i18next.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "en",
  falllback: "en",
  resources: languages,
});

export default i18next;
