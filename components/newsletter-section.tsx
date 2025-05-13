"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Send, CheckCircle } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the email to a server
    setTimeout(() => {
      setIsSubmitted(true)
      setEmail("")
    }, 500)
  }

  return (
    <section className="bg-gradient-to-b from-black to-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Stay Updated with Dubai Real Estate
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">
            Subscribe to our newsletter for exclusive property listings, market insights, and investment opportunities.
          </p>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center space-x-3 text-green-400 bg-green-400/10 py-4 px-6 rounded-lg"
            >
              <CheckCircle className="h-6 w-6" />
              <span className="font-medium">Thank you for subscribing!</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-white/20 focus:ring-white/20"
              />
              <Button 
                type="submit" 
                className="bg-white text-black hover:bg-white/90 transition-colors"
              >
                <Send className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
