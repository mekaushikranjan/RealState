"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, Clock, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"

// Dynamically import Leaflet with no SSR
const MapComponent = dynamic(() => import("./map-component"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow-2xl border border-border relative bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="animate-pulse">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-8 h-8 text-primary" />
          </div>
        </div>
        <p className="text-gray-600">Loading World Map...</p>
      </div>
    </div>
  ),
})

export function ContactMap() {
  const contactDetails = [
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Phone",
      value: "+971 4 123 4567",
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      value: "info@luxurydubai.com",
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: "Working Hours",
      value: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Address",
      value: "Sheikh Zayed Road, Dubai, UAE",
    },
  ]

  return (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
      <Card className="h-full">
        <CardHeader className="pb-2">
          <CardTitle>Our Location</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div 
            className="w-full h-[350px] rounded-2xl overflow-hidden shadow-2xl border border-border relative"
            style={{
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              transform: "translateY(-20px)",
            }}
          >
            <MapComponent />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {contactDetails.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start"
              >
                <div className="mr-3 mt-1">{item.icon}</div>
                <div>
                  <h4 className="font-medium text-sm">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
