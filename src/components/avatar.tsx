import profile from "@/assets/profile.jpg";
import { languages } from "@/i18n/ui";
import { useTranslations } from "@/i18n/utils";
import { cn } from "@/lib/utils";

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  available?: boolean;
  lang: (typeof languages)[number];
};

export default function Avatar({
  available = false,
  lang,
  className,
  ...props
}: Props) {
  const t = useTranslations(lang);

  return (
    <div className={cn("relative aspect-square", className)} {...props}>
      <img
        src={profile.src}
        alt={t("avatarAlt")}
        className="absolute overflow-hidden rounded-full object-cover object-center"
      />
      {available && (
        <div className="absolute bottom-[6%] right-[6%] aspect-square w-1/6 rounded-full bg-green-500"></div>
      )}
    </div>
  );
}
