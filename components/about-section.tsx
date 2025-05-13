"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export function AboutSection() {
  const features = [
    "Exclusive property portfolio",
    "Expert local knowledge",
    "Personalized service",
    "Transparent process",
    "After-sales support",
    "Investment advisory",
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="About Luxury Dubai Real Estate"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-primary/10 rounded-lg -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Trusted Partner in Dubai Real Estate</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              With over 15 years of experience in the Dubai real estate market, we have established ourselves as a
              leading luxury property agency. Our team of experts is dedicated to providing exceptional service and
              finding the perfect property to match your lifestyle and investment goals.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Whether you're looking to buy, sell, or rent a property in Dubai, our personalized approach ensures that
              your real estate journey is smooth and successful. We pride ourselves on our deep market knowledge,
              extensive network, and commitment to excellence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Link href="/about">
              <Button size="lg">Learn More About Us</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
