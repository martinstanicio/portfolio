import {
  ActivityLogIcon,
  BackpackIcon,
  ChatBubbleIcon,
  HomeIcon,
  RulerHorizontalIcon,
} from "@radix-ui/react-icons";

import Link from "next/link";

import { cn } from "@/lib/utils";

import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

export type Props = React.HTMLAttributes<HTMLDivElement>;

export default function Menu({ className, ...props }: Props) {
  const links = [
    { label: "Home", href: "#home", icon: HomeIcon },
    { label: "Work Experience", href: "#experience", icon: ActivityLogIcon },
    { label: "Education", href: "#education", icon: RulerHorizontalIcon },
    { label: "Portfolio", href: "#portfolio", icon: BackpackIcon },
    { label: "Contact", href: "#contact", icon: ChatBubbleIcon },
  ];

  return (
    <section
      className={cn(
        "sticky top-0 flex h-screen flex-col justify-between gap-16 overflow-y-auto bg-secondary p-6 text-secondary-foreground",
        className,
      )}
      {...props}
    >
      <ul className="space-y-8 self-center">
        {links.map(({ label, href, icon: Icon }, i) => (
          <li key={i}>
            <Button variant="ghost" size="icon" asChild>
              <Link href={href}>
                <Icon className="h-5 w-5" />
                <span className="sr-only">{label}</span>
              </Link>
            </Button>
          </li>
        ))}
      </ul>

      <ThemeToggle />
    </section>
  );
}
