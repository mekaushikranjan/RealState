"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building, MapPin, Calendar } from "lucide-react"

// Mock data - in a real app this would come from an API
const developments = [
  {
    id: "1",
    title: "Creek Horizon",
    developer: "Emaar Properties",
    location: "Dubai Creek Harbour",
    completionDate: "Q4 2023",
    status: "under-construction",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "2",
    title: "Beach Vista",
    developer: "Emaar Properties",
    location: "Emaar Beachfront",
    completionDate: "Q2 2024",
    status: "under-construction",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "3",
    title: "Damac Lagoons",
    developer: "Damac Properties",
    location: "Dubailand",
    completionDate: "Q3 2025",
    status: "off-plan",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
]

export function FeaturedDevelopments() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Featured Developments
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Explore the latest and most prestigious real estate developments in Dubai
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {developments.map((development, index) => (
            <motion.div
              key={development.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full">
                <div className="relative">
                  <Link href={`/developments/${development.id}`}>
                    <div className="overflow-hidden aspect-[4/3]">
                      <Image
                        src={development.image || "/placeholder.svg"}
                        alt={development.title}
                        width={800}
                        height={600}
                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  </Link>
                  <Badge
                    className={`absolute top-2 left-2 ${
                      development.status === "off-plan" ? "bg-blue-500" : "bg-green-500"
                    }`}
                  >
                    {development.status === "off-plan" ? "Off-Plan" : "Under Construction"}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <div className="mb-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Building className="h-4 w-4 mr-1" />
                    {development.developer}
                  </div>
                  <Link href={`/developments/${development.id}`}>
                    <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors">
                      {development.title}
                    </h3>
                  </Link>
                  <div className="flex items-center mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <MapPin className="h-4 w-4 mr-1" />
                    {development.location}
                  </div>
                  <div className="flex items-center mb-4 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    Completion: {development.completionDate}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/developments">
            <Button variant="outline" size="lg">
              View All Developments
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
