"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy } from "lucide-react"
import Image from "next/image"

const awards = [
  {
    title: "Best Luxury Real Estate Agency",
    organization: "Dubai Property Awards",
    year: "2023",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
  },
  {
    title: "Excellence in Customer Service",
    organization: "Middle East Real Estate Awards",
    year: "2022",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    title: "Top Real Estate Agency",
    organization: "Arabian Business Awards",
    year: "2021",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    title: "Innovation in Real Estate",
    organization: "PropTech Middle East",
    year: "2020",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export function Awards() {
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4"
        >
          Our Awards & Recognition
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          We're proud to be recognized for our commitment to excellence in Dubai's real estate industry
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {awards.map((award, index) => (
          <motion.div
            key={award.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 relative w-24 h-24">
                  <Image src={award.image || "/placeholder.svg"} alt={award.title} fill className="object-contain" />
                </div>
                <Trophy className="h-8 w-8 text-yellow-500 mb-3" />
                <h3 className="text-lg font-semibold mb-1">{award.title}</h3>
                <p className="text-primary mb-1">{award.organization}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{award.year}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
