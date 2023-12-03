import {
  ActivityLogIcon,
  BackpackIcon,
  ChatBubbleIcon,
  HomeIcon,
  RulerHorizontalIcon,
} from "@radix-ui/react-icons";

import { languages } from "@/i18n/ui";
import { useTranslations } from "@/i18n/utils";

export const routes = (lang: (typeof languages)[number]) => {
  const t = useTranslations(lang);

  return [
    { label: t("nav.home"), href: "#home", icon: HomeIcon },
    { label: t("nav.experience"), href: "#experience", icon: ActivityLogIcon },
    {
      label: t("nav.education"),
      href: "#education",
      icon: RulerHorizontalIcon,
    },
    { label: t("nav.portfolio"), href: "#portfolio", icon: BackpackIcon },
    { label: t("nav.contact"), href: "#contact", icon: ChatBubbleIcon },
  ] as const;
};
