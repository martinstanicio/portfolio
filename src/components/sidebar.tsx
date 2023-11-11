import { Fragment } from "react";

import { cn } from "@/lib/utils";

import About from "./about";
import Languages from "./languages";
import Profile from "./profile";
import SidebarButtons from "./sidebar-buttons";
import Skills from "./skills";
import { Separator } from "./ui/separator";

export type Props = React.HTMLAttributes<HTMLDivElement>;

export default function Sidebar({ className, ...props }: Props) {
  const sections = [Profile, About, Languages, Skills, SidebarButtons] as const;

  return (
    <section
      className={cn(
        "sticky top-0 flex h-screen w-full max-w-sm flex-col justify-between gap-8 overflow-y-auto bg-secondary p-12 text-secondary-foreground",
        className,
      )}
      {...props}
    >
      {sections.map((Section, i, array) => (
        <Fragment key={i}>
          <Section />
          {i < array.length - 1 && <Separator />}
        </Fragment>
      ))}
    </section>
  );
}
