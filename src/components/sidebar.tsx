import { Fragment } from "react";

import { languages } from "@/i18n/ui";
import { cn } from "@/lib/utils";

import About from "./about";
import Languages from "./languages";
import Profile from "./profile";
import SidebarButtons from "./sidebar-buttons";
import Skills from "./skills";
import { Separator } from "./ui/separator";

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  lang: (typeof languages)[number];
};

export default function Sidebar({ className, lang, ...props }: Props) {
  const sections = [Profile, About, Languages, Skills, SidebarButtons] as const;

  return (
    <section
      className={cn(
        "sticky top-0 h-screen w-full max-w-sm space-y-8 overflow-y-auto bg-secondary p-8 text-secondary-foreground sm:p-12",
        className,
      )}
      {...props}
    >
      {sections.map((Section, i, array) => (
        <Fragment key={i}>
          <Section lang={lang} />
          {i < array.length - 1 && <Separator />}
        </Fragment>
      ))}
    </section>
  );
}
