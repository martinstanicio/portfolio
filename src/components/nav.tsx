import {
  ActivityLogIcon,
  BackpackIcon,
  ChatBubbleIcon,
  HomeIcon,
  RulerHorizontalIcon,
} from "@radix-ui/react-icons";

import { Button } from "./ui/button";

export type Props = React.HTMLAttributes<HTMLDivElement>;

export default function Nav(props: Props) {
  const links = [
    { label: "Home", href: "#home", icon: HomeIcon },
    { label: "Work Experience", href: "#experience", icon: ActivityLogIcon },
    { label: "Education", href: "#education", icon: RulerHorizontalIcon },
    { label: "Portfolio", href: "#portfolio", icon: BackpackIcon },
    { label: "Contact", href: "#contact", icon: ChatBubbleIcon },
  ];

  return (
    <nav {...props}>
      <ul className="space-y-8">
        {links.map(({ label, href, icon: Icon }, i) => (
          <li key={i}>
            <Button variant="ghost" size="icon" asChild>
              <a href={href}>
                <Icon className="h-5 w-5" />
                <span className="sr-only">{label}</span>
              </a>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
