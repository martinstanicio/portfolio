import { languages, ui } from "./ui";

export function useTranslations(lang: (typeof languages)[number]) {
  return function t(key: keyof (typeof ui)[typeof lang]) {
    return ui[lang][key];
  };
}
