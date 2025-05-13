"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

interface PropertyFeaturesProps {
  features: string[]
}

export function PropertyFeatures({
  features = [
    "Private Pool",
    "Terrace",
    "Maid's Room",
    "Study",
    "Walk-in Closet",
    "Smart Home",
    "Private Elevator",
    "Floor-to-ceiling Windows",
    "Marble Flooring",
    "Custom Kitchen",
    "Home Theater",
    "Wine Cellar",
  ],
}: Partial<PropertyFeaturesProps>) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Property Features</CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center"
            >
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 mr-2">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <span>{feature}</span>
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  )
}
