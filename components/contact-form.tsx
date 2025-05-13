"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { motion } from "framer-motion"
import { Mail, Phone, User, MessageSquare, Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    subscribe: false,
  })

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, subscribe: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success")
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        subscribe: false,
      })

      // Reset status after 3 seconds
      setTimeout(() => {
        setFormStatus("idle")
      }, 3000)
    }, 1500)
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="h-full">
      <Card className="h-full">
        <CardContent className="p-6 h-full">
          {formStatus === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex items-center justify-center"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-600 dark:text-green-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Your message has been sent successfully. We'll get back to you shortly.
                </p>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="h-full flex flex-col justify-between">
              <div className="space-y-6">
                <div className="text-center mb-2">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Contact Us</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Get in touch with our team</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="flex items-center gap-2 text-sm">
                      <User className="w-4 h-4" />
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm h-9"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="email" className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4" />
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm h-9"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="phone" className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm h-9"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="subject" className="flex items-center gap-2 text-sm">
                      <MessageSquare className="w-4 h-4" />
                      Subject
                    </Label>
                    <Select value={formData.subject} onValueChange={handleSelectChange}>
                      <SelectTrigger id="subject" className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm h-9">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="sales">Property Sales</SelectItem>
                        <SelectItem value="rentals">Property Rentals</SelectItem>
                        <SelectItem value="investment">Investment Opportunities</SelectItem>
                        <SelectItem value="careers">Careers</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-3">
                  <Label htmlFor="message" className="flex items-center gap-2 text-sm">
                    <MessageSquare className="w-4 h-4" />
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm resize-none min-h-[120px]"
                  />
                </div>
              </div>
              <div className="space-y-6 mt-6">
                <div className="flex items-center space-x-2">
                  <Checkbox id="subscribe" checked={formData.subscribe} onCheckedChange={handleCheckboxChange} />
                  <Label htmlFor="subscribe" className="text-xs text-gray-600 dark:text-gray-400">
                    Subscribe to our newsletter for updates on new properties and market insights
                  </Label>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 transition-colors"
                  disabled={formStatus === "submitting"}
                >
                  {formStatus === "submitting" ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
