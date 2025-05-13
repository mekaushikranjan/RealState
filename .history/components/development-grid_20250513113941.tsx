"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building, MapPin, Calendar, ExternalLink } from "lucide-react"

// Mock data - in a real app this would come from an API
const developments = [
  {
    id: "1",
    title: "Creek Horizon",
    developer: "Emaar Properties",
    location: "Dubai Creek Harbour",
    completionDate: "Q4 2023",
    status: "under-construction",
    description:
      "Creek Horizon offers premium 1, 2, and 3-bedroom apartments with stunning views of Dubai Creek Tower and the Downtown skyline.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    priceRange: "AED 1.2M - 3.5M",
  },
  {
    id: "2",
    title: "Beach Vista",
    developer: "Emaar Properties",
    location: "Emaar Beachfront",
    completionDate: "Q2 2024",
    status: "under-construction",
    description:
      "Beach Vista offers luxury 1-4 bedroom apartments with private beach access and panoramic views of the Arabian Gulf.",
    image: "/placeholder.svg?height=600&width=800",
    priceRange: "AED 1.8M - 7.2M",
  },
  {
    id: "3",
    title: "Damac Lagoons",
    developer: "Damac Properties",
    location: "Dubailand",
    completionDate: "Q3 2025",
    status: "off-plan",
    description:
      "Damac Lagoons is a Mediterranean-inspired community featuring luxury villas and townhouses surrounded by azure lagoons.",
    image: "/placeholder.svg?height=600&width=800",
    priceRange: "AED 1.5M - 5.8M",
  },
  {
    id: "4",
    title: "Sobha Hartland II",
    developer: "Sobha Group",
    location: "Mohammed Bin Rashid City",
    completionDate: "Q1 2025",
    status: "off-plan",
    description:
      "Sobha Hartland II offers premium apartments, townhouses, and villas in a lush green community with world-class amenities.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    priceRange: "AED 2.2M - 15M",
  },
  {
    id: "5",
    title: "One Za'abeel",
    developer: "Ithra Dubai",
    location: "Za'abeel",
    completionDate: "Q4 2023",
    status: "under-construction",
    description:
      "One Za'abeel is an iconic mixed-use development featuring luxury residences, a hotel, and office spaces with The Link, a 230-meter sky concourse.",
    image: "/placeholder.svg?height=600&width=800",
    priceRange: "AED 3.5M - 25M",
  },
  {
    id: "6",
    title: "Tilal Al Ghaf",
    developer: "Majid Al Futtaim",
    location: "Dubai Land",
    completionDate: "Q2 2024",
    status: "under-construction",
    description:
      "Tilal Al Ghaf is a wellness-focused community built around a recreational lagoon with premium villas and townhouses.",
    image: "/placeholder.svg?height=600&width=800",
    priceRange: "AED 2.8M - 16M",
  },
]

export function DevelopmentGrid() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredDevelopments =
    activeTab === "all" ? developments : developments.filter((development) => development.status === activeTab)

  return (
    <div>
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="all">All Developments</TabsTrigger>
            <TabsTrigger value="under-construction">Under Construction</TabsTrigger>
            <TabsTrigger value="off-plan">Off-Plan</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <DevelopmentCards developments={filteredDevelopments} />
        </TabsContent>

        <TabsContent value="under-construction" className="mt-0">
          <DevelopmentCards developments={filteredDevelopments} />
        </TabsContent>

        <TabsContent value="off-plan" className="mt-0">
          <DevelopmentCards developments={filteredDevelopments} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface Development {
  id: string
  title: string
  developer: string
  location: string
  completionDate: string
  status: "under-construction" | "off-plan"
  description: string
  image: string
  priceRange: string
}

function DevelopmentCards({ developments }: { developments: Development[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {developments.map((development, index) => (
        <motion.div
          key={development.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="overflow-hidden h-full flex flex-col">
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
            <CardContent className="p-4 flex-grow">
              <div className="mb-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Building className="h-4 w-4 mr-1" />
                {development.developer}
              </div>
              <Link href={`/developments/${development.id}`}>
                <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors">{development.title}</h3>
              </Link>
              <div className="flex items-center mb-2 text-sm text-gray-500 dark:text-gray-400">
                <MapPin className="h-4 w-4 mr-1" />
                {development.location}
              </div>
              <div className="flex items-center mb-3 text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="h-4 w-4 mr-1" />
                Completion: {development.completionDate}
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{development.description}</p>
              <p className="text-primary font-semibold">{development.priceRange}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0 border-t">
              <Button className="w-full gap-2" asChild>
                <Link href={`/developments/${development.id}`}>
                  <ExternalLink className="h-4 w-4" />
                  View Development
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
