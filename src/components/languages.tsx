import { languages } from "@/i18n/ui";
import { useTranslations } from "@/i18n/utils";
import { cn } from "@/lib/utils";

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  lang: (typeof languages)[number];
};

export default function Languages({ className, lang, ...props }: Props) {
  const t = useTranslations(lang);

  const languages = [
    { property: t("languages.keys.en"), value: t("languages.values.en") },
    { property: t("languages.keys.es"), value: t("languages.values.es") },
  ] as const;

  return (
    <section className={cn("space-y-4", className)} {...props}>
      <h2>{t("languages.title")}</h2>

      <ul className="space-y-2">
        {languages.map(({ property, value }, i) => (
          <li key={i} className="flex items-baseline justify-between">
            <span className="rounded bg-primary px-2 text-primary-foreground shadow">
              {property}
            </span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
