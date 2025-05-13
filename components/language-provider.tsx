"use client"

import { createContext, useState, useContext, type ReactNode } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
  getFlag: (lang: Language) => string
}

// Create a context with a default value
const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key) => key,
  getFlag: () => "🏳️",
})

// Simple translations object - in a real app, this would be more extensive
const translations: Record<Language, Record<string, string>> = {
  en: {
    home: "Home",
    properties: "Properties",
    about: "About",
    blog: "Blog",
    contact: "Contact Us",
    english: "English",
    arabic: "Arabic",
    // Add more translations as needed
  },
  ar: {
    home: "الرئيسية",
    properties: "العقارات",
    about: "من نحن",
    blog: "المدونة",
    contact: "اتصل بنا",
    english: "الإنجليزية",
    arabic: "العربية",
    // Add more translations as needed
  },
}

// Flag emojis for languages
const flags: Record<Language, string> = {
  en: "🇬🇧",
  ar: "🇦🇪",
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key
  }

  // Get flag for language
  const getFlag = (lang: Language): string => {
    return flags[lang]
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getFlag }}>
      <div dir={language === "ar" ? "rtl" : "ltr"}>{children}</div>
    </LanguageContext.Provider>
  )
}

// Custom hook to use the language context
export const useLanguageContext = () => useContext(LanguageContext)
