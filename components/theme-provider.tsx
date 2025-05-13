"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      {...props}
      enableSystem={false}
      enableColorScheme={true}
      defaultTheme="light"
      themes={["light", "dark"]}
      attribute="class"
    >
      {children}
    </NextThemesProvider>
  )
}
