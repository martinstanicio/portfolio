import { languages } from "@/i18n/ui";
import { cn } from "@/lib/utils";

import MobileNav from "./mobile-nav";
import MobileSidebar from "./mobile-sidebar";
import { ThemeToggle } from "./theme-toggle";

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  lang: (typeof languages)[number];
};

export default function MobileControls({ className, lang, ...props }: Props) {
  return (
    <section
      className={cn(
        "sticky top-0 flex w-full items-center justify-between gap-4 bg-secondary p-4 text-secondary-foreground",
        className,
      )}
      {...props}
    >
      <MobileSidebar lang={lang} />

      <div className="flex gap-4">
        <ThemeToggle lang={lang} />

        <MobileNav lang={lang} />
      </div>
    </section>
  );
}
