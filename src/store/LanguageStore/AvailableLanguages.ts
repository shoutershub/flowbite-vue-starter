import type { LanguageTypes } from "./types";

export const availableLanguages: LanguageTypes[] = [
  {
    flag: "us",
    language: "en",
    title: "English",
  },
  {
    flag: "de",
    language: "de",
    title: "German",
  },
  {
    flag: "es",
    language: "es",
    title: "Spanish",
  },
  {
    flag: "ar",
    language: "ar",
    title: "Arabic",
  }
]

export const defaultLanguage: LanguageTypes = {
  flag: "us",
  language: "en",
  title: "English",
}