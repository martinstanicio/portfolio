import {
  ActivityLogIcon,
  BackpackIcon,
  ChatBubbleIcon,
  HomeIcon,
  RulerHorizontalIcon,
} from "@radix-ui/react-icons";

import { languages } from "@/i18n/ui";
import { useTranslations } from "@/i18n/utils";

import { Button } from "./ui/button";

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  lang: (typeof languages)[number];
};

export default function Nav({ lang, ...props }: Props) {
  const t = useTranslations(lang);

  const links = [
    { label: t("nav.home"), href: "#home", icon: HomeIcon },
    { label: t("nav.experience"), href: "#experience", icon: ActivityLogIcon },
    {
      label: t("nav.education"),
      href: "#education",
      icon: RulerHorizontalIcon,
    },
    { label: t("nav.portfolio"), href: "#portfolio", icon: BackpackIcon },
    { label: t("nav.contact"), href: "#contact", icon: ChatBubbleIcon },
  ];

  return (
    <nav {...props}>
      <ul className="space-y-8">
        {links.map(({ label, href, icon: Icon }, i) => (
          <li key={i}>
            <Button variant="link" size="icon" asChild>
              <a href={href}>
                <Icon className="h-5 w-5" />
                <span className="sr-only">{label}</span>
              </a>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
