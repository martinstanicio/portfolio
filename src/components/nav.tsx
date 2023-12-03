import { languages } from "@/i18n/ui";
import { routes } from "@/lib/routes";

import { Button } from "./ui/button";

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  lang: (typeof languages)[number];
};

export default function Nav({ lang, ...props }: Props) {
  return (
    <nav {...props}>
      <ul className="space-y-8">
        {routes(lang).map(({ label, href, icon: Icon }, i) => (
          <li key={i}>
            <Button variant="link" size="icon" asChild>
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
