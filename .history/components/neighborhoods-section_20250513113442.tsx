"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

// Mock data - in a real app this would come from an API
const neighborhoods = [
  {
    id: "palm-jumeirah",
    name: "Palm Jumeirah",
    description: "An iconic man-made island featuring luxury villas and apartments with stunning sea views.",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    properties: 120,
  },
  {
    id: "downtown-dubai",
    name: "Downtown Dubai",
    description: "Home to the Burj Khalifa and Dubai Mall, offering luxury high-rise living in the heart of the city.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    properties: 185,
  },
  {
    id: "dubai-marina",
    name: "Dubai Marina",
    description: "A vibrant waterfront community with luxury towers, restaurants, and a stunning yacht harbor.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    properties: 210,
  },
  {
    id: "emirates-hills",
    name: "Emirates Hills",
    description:
      "Dubai's most exclusive villa community, offering custom-built mansions around a championship golf course.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    properties: 65,
  },
  {
    id: "jumeirah",
    name: "Jumeirah",
    description: "A prestigious beachfront area with luxury villas and easy access to Dubai's best attractions.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    properties: 95,
  },
  {
    id: "dubai-hills-estate",
    name: "Dubai Hills Estate",
    description:
      "A new luxury community featuring villas, townhouses, and apartments set around an 18-hole golf course.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    properties: 150,
  },
]

export function NeighborhoodsSection() {
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
            Explore Dubai's Premier Neighborhoods
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Discover the most sought-after locations in Dubai and find your perfect home
          </motion.p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {neighborhoods.map((neighborhood, index) => (
              <CarouselItem key={neighborhood.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden h-full">
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <Image
                        src={neighborhood.image || "/placeholder.svg"}
                        alt={neighborhood.name}
                        width={800}
                        height={600}
                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-4 text-white">
                        <h3 className="text-xl font-bold">{neighborhood.name}</h3>
                        <p className="text-sm">{neighborhood.properties} Properties</p>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{neighborhood.description}</p>
                      <Link href={`/properties?neighborhood=${neighborhood.id}`}>
                        <Button variant="outline" size="sm" className="w-full">
                          View Properties
                        </Button>
                      </Link>
                    </CardContent>
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
      </div>
    </section>
  )
}
