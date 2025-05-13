"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Heart, Shield, Users, Zap, Star } from "lucide-react"

const values = [
  {
    title: "Excellence",
    description:
      "We strive for excellence in every aspect of our service, ensuring the highest standards for our clients.",
    icon: <Award className="h-10 w-10 text-primary" />,
  },
  {
    title: "Integrity",
    description: "We conduct our business with honesty, transparency, and ethical practices at all times.",
    icon: <Shield className="h-10 w-10 text-primary" />,
  },
  {
    title: "Client-Focused",
    description: "Our clients' needs and satisfaction are at the center of everything we do.",
    icon: <Heart className="h-10 w-10 text-primary" />,
  },
  {
    title: "Expertise",
    description: "Our team consists of industry experts with deep knowledge of Dubai's real estate market.",
    icon: <Star className="h-10 w-10 text-primary" />,
  },
  {
    title: "Innovation",
    description: "We embrace innovative approaches and technologies to provide cutting-edge solutions.",
    icon: <Zap className="h-10 w-10 text-primary" />,
  },
  {
    title: "Teamwork",
    description: "We believe in the power of collaboration to achieve exceptional results for our clients.",
    icon: <Users className="h-10 w-10 text-primary" />,
  },
]

export function CompanyValues() {
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
          Our Values
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          These core values guide our approach to business and ensure we deliver the best possible service to our
          clients
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
