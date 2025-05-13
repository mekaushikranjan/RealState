"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star, Users, Award, Building2, CheckCircle2 } from "lucide-react"

// Mock data - in a real app this would come from an API
const testimonials = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Property Investor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    content:
      "Working with Luxury Dubai Real Estate was an exceptional experience. Their team's knowledge of the market and attention to detail made finding my dream property effortless. I couldn't be happier with my investment.",
    rating: 5,
  },
  {
    id: "2",
    name: "Mohammed Al Farsi",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    content:
      "The team at Luxury Dubai went above and beyond to help me find the perfect family home in Emirates Hills. Their personalized approach and understanding of my requirements made all the difference.",
    rating: 5,
  },
  {
    id: "3",
    name: "Elena Petrova",
    role: "International Buyer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    content:
      "As an international buyer, I was concerned about navigating Dubai's real estate market. The team at Luxury Dubai made the entire process smooth and transparent, providing expert guidance every step of the way.",
    rating: 5,
  },
  {
    id: "4",
    name: "James Wilson",
    role: "Property Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    content:
      "I've worked with many real estate agencies in Dubai, but Luxury Dubai stands out for their professionalism and market insight. Their team's dedication to excellence is truly impressive.",
    rating: 4,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Hear from our satisfied clients about their experience with Luxury Dubai Real Estate
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative w-full rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300"
          >
            <Image
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHRlc3RpbW9uaWFsfGVufDB8fHx8MTYyMjY0NzY0NQ&ixlib=rb-1.2.1&q=80&w=1080"
              alt="Testimonials"
              width={600}
              height={400}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>

          {/* Right side - Stats and Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <Users className="h-8 w-8 text-black dark:text-white mb-4" />
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2">500+</h3>
                <p className="text-gray-600 dark:text-gray-400">Happy Clients</p>
              </div>
              <div className="bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <Award className="h-8 w-8 text-black dark:text-white mb-4" />
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2">15+</h3>
                <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Why Choose Us</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-black dark:text-white" />
                  <p className="text-gray-600 dark:text-gray-400">Expert Market Knowledge</p>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-black dark:text-white" />
                  <p className="text-gray-600 dark:text-gray-400">Personalized Service</p>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-black dark:text-white" />
                  <p className="text-gray-600 dark:text-gray-400">Premium Properties</p>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-black dark:text-white" />
                  <p className="text-gray-600 dark:text-gray-400">24/7 Support</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 p-6 rounded-lg shadow-lg">
              <Building2 className="h-8 w-8 text-black dark:text-white mb-4" />
              <h3 className="text-xl font-semibold text-black dark:text-white mb-2">Premium Properties</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Access to Dubai's most exclusive properties in prime locations
              </p>
            </div>
          </motion.div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Card className="h-full bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonial.rating ? "text-black dark:text-white fill-black dark:fill-white" : "text-gray-300 dark:text-gray-700"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 italic text-sm leading-relaxed">"{testimonial.content}"</p>
                      <div className="flex items-center">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 ring-gray-200 dark:ring-gray-800">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-black dark:text-white">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="static mx-2 transform-none bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900" />
            <CarouselNext className="static mx-2 transform-none bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
