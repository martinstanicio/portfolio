import { languages } from "@/i18n/ui";
import { useTranslations } from "@/i18n/utils";
import { age, cuit, residence } from "@/lib/personal-information";
import { cn } from "@/lib/utils";

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  lang: (typeof languages)[number];
};

export default function About({ className, lang, ...props }: Props) {
  const t = useTranslations(lang);

  const about = [
    { property: t("about.keys.age"), value: age },
    { property: t("about.keys.residence"), value: residence },
    { property: t("about.keys.cuit"), value: cuit },
  ] as const;

  return (
    <section className={cn("space-y-6", className)} {...props}>
      <h2>{t("about.title")}</h2>

      <ul className="space-y-3">
        {about.map(({ property, value }, i) => (
          <li key={i} className="flex items-baseline justify-between gap-2">
            <span className="rounded bg-primary px-2 text-primary-foreground shadow">
              {property}
            </span>
            <span className="text-right">{value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
