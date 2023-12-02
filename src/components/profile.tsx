import { languages } from "@/i18n/ui";
import { useTranslations } from "@/i18n/utils";
import { name } from "@/lib/personal-information";
import { cn } from "@/lib/utils";

import Avatar from "./avatar";

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  available?: boolean;
  lang: (typeof languages)[number];
};

export default function Profile({
  available = false,
  lang,
  className,
  ...props
}: Props) {
  const t = useTranslations(lang);

  return (
    <section
      className={cn("flex flex-col items-center gap-4 text-center", className)}
      {...props}
    >
      <Avatar available lang={lang} className="w-40" />

      <div>
        <p className="text-lg font-bold text-foreground-contrast">{name}</p>
        <p>{t("position")}</p>
      </div>
    </section>
  );
}
