import { cn } from "@/lib/utils";

import Nav from "./nav";

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export default function Menu({ children, className, ...props }: Props) {
  return (
    <section
      className={cn(
        "sticky top-0 flex h-screen flex-col justify-between gap-16 overflow-y-auto bg-secondary p-6 text-secondary-foreground",
        className,
      )}
      {...props}
    >
      <Nav className="self-center" />

      {children}
    </section>
  );
}
