"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bed, Bath, Maximize, MapPin, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

// Mock data - in a real app this would come from an API
const properties = [
  {
    id: "1",
    title: "Luxury Penthouse with Sea View",
    location: "Palm Jumeirah",
    price: "25,000,000",
    bedrooms: 4,
    bathrooms: 5,
    area: 5200,
    type: "sale",
    category: "penthouse",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    featured: true,
  },
  {
    id: "2",
    title: "Modern Villa with Private Pool",
    location: "Emirates Hills",
    price: "18,500,000",
    bedrooms: 6,
    bathrooms: 7,
    area: 8500,
    type: "sale",
    category: "villa",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    featured: true,
  },
  {
    id: "3",
    title: "Waterfront Apartment",
    location: "Dubai Marina",
    price: "8,900,000",
    bedrooms: 3,
    bathrooms: 4,
    area: 2800,
    type: "sale",
    category: "apartment",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: true,
  },
  {
    id: "4",
    title: "Luxury Apartment with Burj Khalifa View",
    location: "Downtown Dubai",
    price: "45,000",
    bedrooms: 2,
    bathrooms: 2.5,
    area: 1800,
    type: "rent",
    category: "apartment",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: true,
  },
  {
    id: "5",
    title: "Beachfront Villa",
    location: "Jumeirah",
    price: "120,000",
    bedrooms: 5,
    bathrooms: 6,
    area: 6500,
    type: "rent",
    category: "villa",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: true,
  },
  {
    id: "6",
    title: "Modern Townhouse",
    location: "Dubai Hills Estate",
    price: "75,000",
    bedrooms: 4,
    bathrooms: 4.5,
    area: 3200,
    type: "rent",
    category: "townhouse",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    featured: true,
  },
]

export function FeaturedProperties() {
  const [activeTab, setActiveTab] = useState("sale")
  const [favorites, setFavorites] = useState<string[]>([])

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }

  const filteredProperties = properties.filter((property) => property.type === activeTab && property.featured)

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Featured Properties
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Discover our handpicked selection of the finest properties in Dubai
          </motion.p>
        </div>

        <Tabs defaultValue="sale" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="sale">For Sale</TabsTrigger>
              <TabsTrigger value="rent">For Rent</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="sale" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property, index) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  isFavorite={favorites.includes(property.id)}
                  onFavoriteToggle={toggleFavorite}
                  index={index}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="rent" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property, index) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  isFavorite={favorites.includes(property.id)}
                  onFavoriteToggle={toggleFavorite}
                  index={index}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Link href="/properties">
            <Button variant="outline" size="lg">
              View All Properties
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

interface PropertyCardProps {
  property: (typeof properties)[0]
  isFavorite: boolean
  onFavoriteToggle: (id: string) => void
  index: number
}

function PropertyCard({ property, isFavorite, onFavoriteToggle, index }: PropertyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden h-full">
        <div className="relative">
          <Link href={`/properties/${property.id}`}>
            <div className="overflow-hidden aspect-[4/3]">
              <Image
                src={property.image || "/placeholder.svg"}
                alt={property.title}
                width={800}
                height={600}
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
              />
            </div>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-white/80 hover:bg-white dark:bg-gray-900/80 dark:hover:bg-gray-900 rounded-full"
            onClick={() => onFavoriteToggle(property.id)}
          >
            <Heart
              className={cn("h-5 w-5", isFavorite ? "fill-red-500 text-red-500" : "text-gray-600 dark:text-gray-400")}
            />
          </Button>
          <Badge className="absolute top-2 left-2 bg-primary">
            {property.type === "sale" ? "For Sale" : "For Rent"}
          </Badge>
        </div>
        <CardContent className="p-4">
          <div className="mb-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
            <MapPin className="h-4 w-4 mr-1" />
            {property.location}
          </div>
          <Link href={`/properties/${property.id}`}>
            <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors">{property.title}</h3>
          </Link>
          <p className="text-xl font-bold text-primary">
            {property.type === "sale" ? "AED " : "AED "}
            {property.price}
            {property.type === "rent" ? "/year" : ""}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0 border-t flex justify-between text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            {property.bedrooms} {property.bedrooms === 1 ? "Bed" : "Beds"}
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            {property.bathrooms} {property.bathrooms === 1 ? "Bath" : "Baths"}
          </div>
          <div className="flex items-center">
            <Maximize className="h-4 w-4 mr-1" />
            {property.area} sq.ft
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
