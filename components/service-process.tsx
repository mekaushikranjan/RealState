"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { PhoneCall, Search, Home, FileCheck, Key, ThumbsUp } from "lucide-react"

const steps = [
  {
    title: "Initial Consultation",
    description: "We start with a detailed discussion to understand your specific needs and requirements.",
    icon: <PhoneCall className="h-8 w-8 text-primary" />,
  },
  {
    title: "Property Search",
    description: "Our experts search for properties that match your criteria, saving you time and effort.",
    icon: <Search className="h-8 w-8 text-primary" />,
  },
  {
    title: "Property Viewing",
    description: "We arrange viewings of selected properties at your convenience.",
    icon: <Home className="h-8 w-8 text-primary" />,
  },
  {
    title: "Documentation",
    description: "Our team handles all the necessary paperwork and legal documentation.",
    icon: <FileCheck className="h-8 w-8 text-primary" />,
  },
  {
    title: "Transaction",
    description: "We facilitate a smooth transaction process, ensuring all details are properly handled.",
    icon: <Key className="h-8 w-8 text-primary" />,
  },
  {
    title: "After-Sales Support",
    description: "Our relationship doesn't end with the transaction. We provide ongoing support as needed.",
    icon: <ThumbsUp className="h-8 w-8 text-primary" />,
  },
]

export function ServiceProcess() {
  return (
    <div className="bg-gray-50 dark:bg-black w-full min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            We follow a structured approach to ensure a seamless experience for our clients
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white/10 dark:bg-black/50 backdrop-blur-md border border-border dark:border-white/20 hover:border-primary/50 dark:hover:border-primary/50 transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
