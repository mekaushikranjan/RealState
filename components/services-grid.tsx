"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Home, Building, Search, Key, BarChart, FileText, Users, Briefcase } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Property Sales",
    description:
      "Our expert agents will help you find the perfect property to buy or sell your existing property at the best market price.",
    icon: <Home className="h-10 w-10 text-primary" />,
    link: "/services/property-sales",
  },
  {
    title: "Property Rentals",
    description:
      "Whether you're looking to rent a property or need a tenant for your investment, our rental specialists are here to help.",
    icon: <Key className="h-10 w-10 text-primary" />,
    link: "/services/property-rentals",
  },
  {
    title: "Property Management",
    description:
      "Let us handle the day-to-day management of your property, from maintenance to tenant relations and rent collection.",
    icon: <Building className="h-10 w-10 text-primary" />,
    link: "/services/property-management",
  },
  {
    title: "Investment Advisory",
    description:
      "Make informed investment decisions with our comprehensive market analysis and investment strategy services.",
    icon: <BarChart className="h-10 w-10 text-primary" />,
    link: "/services/investment-advisory",
  },
  {
    title: "Property Valuation",
    description: "Get an accurate assessment of your property's value with our professional valuation services.",
    icon: <FileText className="h-10 w-10 text-primary" />,
    link: "/services/property-valuation",
  },
  {
    title: "Property Search",
    description: "Let us find your dream property based on your specific requirements and preferences.",
    icon: <Search className="h-10 w-10 text-primary" />,
    link: "/services/property-search",
  },
  {
    title: "Relocation Services",
    description:
      "Moving to Dubai? Our relocation specialists will help you settle in with ease, handling everything from housing to paperwork.",
    icon: <Users className="h-10 w-10 text-primary" />,
    link: "/services/relocation-services",
  },
  {
    title: "Commercial Real Estate",
    description:
      "Find the perfect office, retail, or industrial space for your business with our commercial real estate services.",
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    link: "/services/commercial-real-estate",
  },
]

export function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="h-full flex flex-col bg-white/10 dark:bg-transparent backdrop-blur-md border border-border dark:border-white/20">
            <CardHeader className="pb-2">
              <div className="mb-4">{service.icon}</div>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
              <Button 
                variant="outline" 
                asChild 
                className="w-full mt-auto bg-white/10 dark:bg-transparent backdrop-blur-md border border-border dark:border-white/20 hover:bg-white/20 dark:hover:bg-white/10 text-primary"
              >
                <Link href={service.link}>Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
