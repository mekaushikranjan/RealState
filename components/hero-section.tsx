"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { Search } from "lucide-react"

export function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, 300], { clamp: false })

  return (
    <section className="relative h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden w-full">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute top-0 left-0 right-0 bottom-0 z-[-1] w-full h-[100%]"
        style={{ y }}
      >
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80"
          alt="Luxury Dubai Real Estate"
          fill
          className="object-cover brightness-50 w-full h-full"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Discover Luxury Living in Dubai
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          >
            Explore exclusive properties in the most prestigious locations across Dubai
          </motion.p>

          {/* Search Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center"
          >
            <Button 
              size="lg"
              className="bg-white text-black hover:bg-white/90 dark:bg-white dark:text-black dark:hover:bg-white/90 px-8 py-6 text-lg"
            >
              <Search className="mr-2 h-5 w-5" />
              Explore Properties
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}
