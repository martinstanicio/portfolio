import type { languages } from "@/i18n/ui";
import { useTranslations } from "@/i18n/utils";

const birthDate = new Date("2006-05-28T16:39-03:00");
const currentDate = new Date();
const secondsInAYear = 1000 * 60 * 60 * 24 * 365.25;

export const age = Math.floor(
  (currentDate.getTime() - birthDate.getTime()) / secondsInAYear,
);
export const name = "Martín Stanicio";
export const residence = "Argentina";
export const cuit = "20-47162695-4";
export const skills = (lang: (typeof languages)[number]) => {
  const t = useTranslations(lang);

  return [
    "JavaScript",
    "Python",
    "SEO",
    "Git",
    t("skills.uidesign"),
    "CSS",
    "MySQL",
    "React",
  ];
};
