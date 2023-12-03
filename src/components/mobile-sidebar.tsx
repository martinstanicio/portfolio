import { languages } from "@/i18n/ui";
import { useTranslations } from "@/i18n/utils";

import Avatar from "./avatar";
import Sidebar from "./sidebar";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export type Props = {
  lang: (typeof languages)[number];
};

export default function MobileNav({ lang }: Props) {
  const t = useTranslations(lang);

  return (
    <Sheet>
      <SheetTrigger>
        <Avatar available lang={lang} className="w-9" />
        <span className="sr-only">{t("menu.title")}</span>
      </SheetTrigger>
      <SheetContent side="left" className="w-full max-w-sm p-0">
        <Sidebar lang={lang} />
      </SheetContent>
    </Sheet>
  );
}
