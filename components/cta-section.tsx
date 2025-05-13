"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&h=800&fit=crop')",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 py-16 px-6 md:py-24 md:px-12 text-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              Ready to Find Your Dream Property in Dubai?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            >
              Let our expert team guide you through Dubai's luxury real estate market and help you find the perfect
              property.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link href="/properties">
                <Button 
                  size="lg" 
                  className="min-w-[200px] bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white"
                >
                  Browse Properties
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="min-w-[200px] bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white"
                >
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
