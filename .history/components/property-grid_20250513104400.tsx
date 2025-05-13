"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bed, Bath, Maximize, MapPin, Heart, Grid3X3, List } from "lucide-react"
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
    image: "/placeholder.svg?height=600&width=800",
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
    image: "/placeholder.svg?height=600&width=800",
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
    image: "/placeholder.svg?height=600&width=800",
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
    image: "/placeholder.svg?height=600&width=800",
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
    image: "/placeholder.svg?height=600&width=800",
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
    image: "/placeholder.svg?height=600&width=800",
    featured: true,
  },
  {
    id: "7",
    title: "Luxury Apartment in City Walk",
    location: "City Walk",
    price: "6,500,000",
    bedrooms: 2,
    bathrooms: 2,
    area: 1500,
    type: "sale",
    category: "apartment",
    image: "/placeholder.svg?height=600&width=800",
    featured: false,
  },
  {
    id: "8",
    title: "Spacious Villa in Arabian Ranches",
    location: "Arabian Ranches",
    price: "12,000,000",
    bedrooms: 5,
    bathrooms: 6,
    area: 7000,
    type: "sale",
    category: "villa",
    image: "/placeholder.svg?height=600&width=800",
    featured: false,
  },
  {
    id: "9",
    title: "Elegant Apartment in Business Bay",
    location: "Business Bay",
    price: "4,200,000",
    bedrooms: 2,
    bathrooms: 2.5,
    area: 1600,
    type: "sale",
    category: "apartment",
    image: "/placeholder.svg?height=600&width=800",
    featured: false,
  },
]

export function PropertyGrid() {
  const [favorites, setFavorites] = useState<string[]>([])
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600 dark:text-gray-400">
          Showing <span className="font-medium">{properties.length}</span> properties
        </p>
        <div className="flex items-center space-x-2">
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("grid")}
            aria-label="Grid view"
          >
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("list")}
            aria-label="List view"
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard
              key={property.id}
              property={property}
              isFavorite={favorites.includes(property.id)}
              onFavoriteToggle={toggleFavorite}
              index={index}
            />
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {properties.map((property, index) => (
            <PropertyListItem
              key={property.id}
              property={property}
              isFavorite={favorites.includes(property.id)}
              onFavoriteToggle={toggleFavorite}
              index={index}
            />
          ))}
        </div>
      )}
    </div>
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
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
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

function PropertyListItem({ property, isFavorite, onFavoriteToggle, index }: PropertyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 h-full">
          <div className="relative">
            <Link href={`/properties/${property.id}`}>
              <div className="overflow-hidden h-full">
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
          <div className="md:col-span-2 p-4 flex flex-col">
            <div className="mb-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
              <MapPin className="h-4 w-4 mr-1" />
              {property.location}
            </div>
            <Link href={`/properties/${property.id}`}>
              <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors">{property.title}</h3>
            </Link>
            <p className="text-xl font-bold text-primary mb-4">
              {property.type === "sale" ? "AED " : "AED "}
              {property.price}
              {property.type === "rent" ? "/year" : ""}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
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
            </div>
            <div className="mt-auto">
              <Link href={`/properties/${property.id}`}>
                <Button>View Details</Button>
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
