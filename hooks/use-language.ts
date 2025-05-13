"use client"

import { useLanguageContext } from "@/components/language-provider"

export function useLanguage() {
  const context = useLanguageContext()

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }

  return context
}
