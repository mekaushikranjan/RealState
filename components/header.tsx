"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { GB, AE, RU, CN } from 'country-flag-icons/react/3x2'

const navigation = [
  { name: "Home", href: "/" },
  { name: "Properties", href: "/properties" },
  { name: "Developments", href: "/developments" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

const languages = [
  { code: "en", name: "English", flag: GB },
  { code: "ar", name: "العربية", flag: AE },
  { code: "ru", name: "Русский", flag: RU },
  { code: "zh", name: "中文", flag: CN },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const handleNavigation = (href: string) => {
    router.push(href)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-200",
        isScrolled 
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      )}
    >
      <div className="w-full px-4 sm:px-6">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  "text-xl sm:text-2xl font-extrabold",
                  isScrolled ? "text-black dark:text-white" : "text-white"
                )}
              >
                LUXURY DUBAI
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200",
                  pathname === item.href
                    ? isScrolled 
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "bg-white/20 text-white"
                    : isScrolled
                      ? "text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10"
                      : "text-white hover:bg-white/20"
                )}
              >
                {(item.name)}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className={cn(
                "rounded-full transition-colors duration-200",
                isScrolled 
                  ? "text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10" 
                  : "text-white hover:bg-white/20"
              )}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-transform duration-200 dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-transform duration-200 dark:rotate-0 dark:scale-100" />
            </Button>

            <div className="relative group">
              <Button
                variant="ghost"
                className={cn(
                  "rounded-full gap-2 px-4 font-semibold transition-colors duration-200",
                  isScrolled 
                    ? "text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10" 
                    : "text-white hover:bg-white/20"
                )}
              >
                <GB className="w-5 h-5" />
                <span>English</span>
              </Button>
              <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white dark:bg-black shadow-lg border border-gray-200 dark:border-gray-800 hidden group-hover:block">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className="w-full px-4 py-2 text-left text-sm font-medium flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors duration-200"
                  >
                    <lang.flag className="w-5 h-5" />
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <Button 
              className={cn(
                "rounded-full gap-2 px-6 font-semibold transition-colors duration-200",
                isScrolled 
                  ? "bg-black hover:bg-black/90 text-white dark:bg-white dark:hover:bg-white/90 dark:text-black" 
                  : "bg-white hover:bg-white/90 text-black"
              )}
            >
              <Phone className="h-4 w-4" />
              {("contact")}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Menu"
                  className={cn(
                    "rounded-full transition-colors duration-200",
                    isScrolled 
                      ? "text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10" 
                      : "text-white hover:bg-white/20"
                  )}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white dark:bg-black">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between py-4">
                    <div className="text-xl font-extrabold text-black dark:text-white">LUXURY DUBAI</div>
                  </div>
                  <nav className="flex flex-col space-y-4 py-6">
                    {navigation.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavigation(item.href)}
                        className={cn(
                          "w-full px-4 py-2 rounded-lg text-base font-semibold transition-colors duration-200 text-left",
                          pathname === item.href 
                            ? "bg-black text-white dark:bg-white dark:text-black" 
                            : "text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10"
                        )}
                      >
                        {(item.name)}
                      </button>
                    ))}
                  </nav>
                  <div className="mt-auto flex flex-col space-y-4 py-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-black dark:text-white">Theme</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        aria-label="Toggle theme"
                        className="text-black dark:text-white transition-colors duration-200"
                      >
                        <Sun className="h-5 w-5 rotate-0 scale-100 transition-transform duration-200 dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-transform duration-200 dark:rotate-0 dark:scale-100" />
                      </Button>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <span className="text-sm font-semibold text-black dark:text-white">Language</span>
                      <div className="grid grid-cols-2 gap-2">
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium hover:bg-black/10 dark:hover:bg-white/10 text-black dark:text-white transition-colors duration-200"
                          >
                            <lang.flag className="w-5 h-5" />
                            <span>{lang.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    <Button 
                      onClick={() => handleNavigation('/contact')}
                      className="w-full gap-2 bg-black hover:bg-black/90 text-white dark:bg-white dark:hover:bg-white/90 dark:text-black rounded-full font-semibold transition-colors duration-200"
                    >
                      <Phone className="h-4 w-4" />
                      {("contact")}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
