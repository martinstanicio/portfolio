import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { languageNames, languages } from "@/i18n/ui";
import { cn } from "@/lib/utils";

export type Props = {
  lang: (typeof languages)[number];
  isWide?: boolean;
};

export function LanguageSwitcher({ lang, isWide = false }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size={isWide ? "default" : "icon"}
          className={cn(isWide && "flex w-full gap-4")}
        >
          <span className="font-bold uppercase">{lang}</span>
          {isWide && <span>{languageNames[lang]}</span>}
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
