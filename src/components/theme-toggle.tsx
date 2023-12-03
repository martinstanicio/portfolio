import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { languages } from "@/i18n/ui";
import { useTranslations } from "@/i18n/utils";
import { cn } from "@/lib/utils";

export type Props = {
  lang: (typeof languages)[number];
  isWide?: boolean;
};

export function ThemeToggle({ lang, isWide = false }: Props) {
  const t = useTranslations(lang);
  const [theme, setTheme] = useState<"light" | "dark" | "system">("light");

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setTheme(isDarkMode ? "dark" : "light");
  }, []);

  useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size={isWide ? "default" : "icon"}
          className={cn(isWide && "flex w-full gap-4")}
        >
          <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:absolute dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:static dark:rotate-0 dark:scale-100" />
          <span className="sr-only">{t("theme.toggle")}</span>
          {isWide && <span>{t(`theme.${theme}`)}</span>}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          {t("theme.light")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          {t("theme.dark")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          {t("theme.system")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
