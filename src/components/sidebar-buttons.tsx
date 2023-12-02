import { DownloadIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

import { languages } from "@/i18n/ui";
import { useTranslations } from "@/i18n/utils";
import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  lang: (typeof languages)[number];
};

export default function SidebarButtons({ className, lang, ...props }: Props) {
  const t = useTranslations(lang);

  return (
    <section className={cn("flex gap-4", className)} {...props}>
      <Button className="flex-grow" asChild>
        <a href="/cv.pdf" target="_blank">
          <DownloadIcon className="mr-2" />
          {t("cvDownload")}
        </a>
      </Button>
      <Button size="icon" asChild>
        <a href="https://www.linkedin.com/in/martinstanicio/" target="_blank">
          <LinkedInLogoIcon />
          <span className="sr-only">LinkedIn</span>
        </a>
      </Button>
    </section>
  );
}
