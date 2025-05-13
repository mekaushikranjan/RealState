"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/hooks/use-language"
import { Globe } from "lucide-react"

export function LanguageDropdown() {
  const { language, setLanguage, t, getFlag } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative" aria-label="Select language">
          <Globe className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 text-xs">{getFlag(language)}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("en")}>
          <span className="mr-2">{getFlag("en")}</span> {t("english")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("ar")}>
          <span className="mr-2">{getFlag("ar")}</span> {t("arabic")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
