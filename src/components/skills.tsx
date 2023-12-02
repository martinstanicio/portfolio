import { languages } from "@/i18n/ui";
import { useTranslations } from "@/i18n/utils";
import { skills } from "@/lib/personal-information";
import { cn } from "@/lib/utils";

import { Badge } from "./ui/badge";

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  lang: (typeof languages)[number];
};

export default function Skills({ className, lang, ...props }: Props) {
  const t = useTranslations(lang);

  return (
    <section className={cn("space-y-4", className)} {...props}>
      <h2>{t("skills.title")}</h2>
      <ul className="flex flex-wrap gap-2">
        {skills(lang).map((skill, i) => (
          <li key={i}>
            <Badge variant={i < 3 ? "default" : "outline"}>{skill}</Badge>
          </li>
        ))}
      </ul>
    </section>
  );
}
