"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bed, Bath, Maximize, Calendar, MapPin, Share2, Printer, Heart } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface PropertyDetailsProps {
  property: {
    id: string
    title: string
    description: string
    location: string
    price: string
    bedrooms: number
    bathrooms: number
    area: number
    type: "sale" | "rent"
    category: string
    features: string[]
    amenities: string[]
    yearBuilt: number
    propertyId: string
  }
}

export function PropertyDetails({
  property = {
    id: "1",
    title: "Luxury Penthouse with Sea View",
    description:
      "This stunning penthouse offers breathtaking views of the Arabian Gulf and the Dubai skyline. Featuring high-end finishes, spacious living areas, and a private terrace, this property represents the pinnacle of luxury living in Palm Jumeirah.\n\nThe open-concept living and dining area is perfect for entertaining, while the gourmet kitchen comes equipped with top-of-the-line appliances. The master suite includes a spa-like bathroom and a walk-in closet. Additional features include floor-to-ceiling windows, smart home technology, and exclusive access to building amenities.",
    location: "Palm Jumeirah, Dubai",
    price: "25,000,000",
    bedrooms: 4,
    bathrooms: 5,
    area: 5200,
    type: "sale",
    category: "penthouse",
    features: ["Private Pool", "Terrace", "Maid's Room", "Study", "Walk-in Closet", "Smart Home", "Private Elevator"],
    amenities: ["Swimming Pool", "Gym", "Sauna", "24/7 Security", "Concierge", "Parking", "Beach Access"],
    yearBuilt: 2020,
    propertyId: "LD-PJ-1234",
  },
}: Partial<PropertyDetailsProps>) {
  const [isFavorite, setIsFavorite] = useState(false)

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
            <MapPin className="h-4 w-4 mr-1" />
            {property.location}
          </div>
          <h1 className="text-2xl md:text-3xl font-bold">{property.title}</h1>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-3xl font-bold text-primary">
            {property.type === "sale" ? "AED " : "AED "}
            {property.price}
            {property.type === "rent" ? "/year" : ""}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 mb-8">
        <div className="flex items-center">
          <Bed className="h-5 w-5 mr-2 text-primary" />
          <span>
            {property.bedrooms} {property.bedrooms === 1 ? "Bedroom" : "Bedrooms"}
          </span>
        </div>
        <div className="flex items-center">
          <Bath className="h-5 w-5 mr-2 text-primary" />
          <span>
            {property.bathrooms} {property.bathrooms === 1 ? "Bathroom" : "Bathrooms"}
          </span>
        </div>
        <div className="flex items-center">
          <Maximize className="h-5 w-5 mr-2 text-primary" />
          <span>{property.area} sq.ft</span>
        </div>
        <div className="flex items-center">
          <Calendar className="h-5 w-5 mr-2 text-primary" />
          <span>Built in {property.yearBuilt}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        <Badge variant="secondary">{property.category}</Badge>
        <Badge variant="outline" className="bg-primary/10">
          {property.type === "sale" ? "For Sale" : "For Rent"}
        </Badge>
        <Badge variant="outline" className="bg-primary/10">
          Property ID: {property.propertyId}
        </Badge>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        <Button variant="outline" size="sm" className="gap-2">
          <Share2 className="h-4 w-4" />
          Share
        </Button>
        <Button variant="outline" size="sm" className="gap-2">
          <Printer className="h-4 w-4" />
          Print
        </Button>
        <Button variant="outline" size="sm" className="gap-2" onClick={toggleFavorite}>
          <Heart className={cn("h-4 w-4", isFavorite ? "fill-red-500 text-red-500" : "")} />
          {isFavorite ? "Saved" : "Save"}
        </Button>
      </div>

      <Tabs defaultValue="description" className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="amenities">Amenities</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="mt-0">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="prose dark:prose-invert max-w-none">
              {property.description.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </TabsContent>
        <TabsContent value="features" className="mt-0">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {property.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-primary mr-2" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </TabsContent>
        <TabsContent value="amenities" className="mt-0">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {property.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-primary mr-2" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
