import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { languageNames, languages } from "@/i18n/ui";

export type Props = {
  lang: (typeof languages)[number];
};

export function LanguageSwitcher({ lang }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <span className="uppercase">{lang}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languageNames).map(
          ([languageCode, languageName], i) => (
            <DropdownMenuItem key={i} asChild>
              <a href={`/${languageCode}/`} hrefLang={languageCode}>
                {languageName}
              </a>
            </DropdownMenuItem>
          ),
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
