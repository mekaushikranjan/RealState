"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bed, Bath, Maximize, MapPin } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

// Mock data - in a real app this would come from an API
const properties = [
  {
    id: "2",
    title: "Modern Penthouse with Dubai Marina View",
    location: "Dubai Marina",
    price: "18,500,000",
    bedrooms: 3,
    bathrooms: 4,
    area: 3800,
    type: "sale",
    category: "penthouse",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "3",
    title: "Luxury Apartment with Sea View",
    location: "Palm Jumeirah",
    price: "12,900,000",
    bedrooms: 3,
    bathrooms: 3.5,
    area: 2600,
    type: "sale",
    category: "apartment",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "4",
    title: "Exclusive Penthouse with Private Pool",
    location: "Downtown Dubai",
    price: "22,000,000",
    bedrooms: 4,
    bathrooms: 5,
    area: 4800,
    type: "sale",
    category: "penthouse",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "5",
    title: "Waterfront Apartment with Panoramic Views",
    location: "Dubai Creek Harbour",
    price: "15,500,000",
    bedrooms: 3,
    bathrooms: 4,
    area: 3200,
    type: "sale",
    category: "apartment",
    image: "/placeholder.svg?height=600&width=800",
  },
]

interface SimilarPropertiesProps {
  currentPropertyId: string
}

export function SimilarProperties({ currentPropertyId }: SimilarPropertiesProps) {
  // Filter out the current property
  const similarProperties = properties.filter((property) => property.id !== currentPropertyId)

  return (
    <section className="py-8 border-t">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Similar Properties</h2>
        <Link href="/properties">
          <Button variant="outline">View All</Button>
        </Link>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {similarProperties.map((property, index) => (
            <CarouselItem key={property.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
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
                      <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors">
                        {property.title}
                      </h3>
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-8">
          <CarouselPrevious className="static mx-2 transform-none" />
          <CarouselNext className="static mx-2 transform-none" />
        </div>
      </Carousel>
    </section>
  )
}
