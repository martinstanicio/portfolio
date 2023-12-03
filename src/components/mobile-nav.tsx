import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import { languages } from "@/i18n/ui";
import { useTranslations } from "@/i18n/utils";
import { name } from "@/lib/personal-information";
import { routes } from "@/lib/routes";

import { LanguageSwitcher } from "./language-switcher";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export type Props = {
  lang: (typeof languages)[number];
};

export default function MobileNav({ lang }: Props) {
  const t = useTranslations(lang);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <HamburgerMenuIcon className="h-5 w-5" />
          <span className="sr-only">{t("menu.title")}</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between text-center">
        <SheetHeader className="text-left">
          <SheetTitle className="text-accent">{name}</SheetTitle>
          <SheetDescription>{t("position")}</SheetDescription>
        </SheetHeader>

        <ul className="space-y-4">
          {routes(lang).map(({ label, href, icon: Icon }, i) => (
            <li key={i}>
              <Button
                variant="ghost"
                asChild
                className="w-full justify-start space-x-5"
              >
                <SheetClose asChild>
                  <a href={href}>
                    <Icon className="h-5 w-5" />
                    <span>{label}</span>
                  </a>
                </SheetClose>
              </Button>
            </li>
          ))}
        </ul>

        <SheetFooter>
          <LanguageSwitcher lang={lang} isWide />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
