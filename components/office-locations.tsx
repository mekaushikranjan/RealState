"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

// Mock data - in a real app this would come from an API
const offices = [
  {
    id: "1",
    name: "Dubai Marina Office",
    address: "Marina Plaza, Dubai Marina",
    phone: "+971 4 123 4570",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    mapLink: "https://maps.google.com",
  },
  {
    id: "2",
    name: "Downtown Dubai Office",
    address: "Boulevard Plaza, Downtown Dubai",
    phone: "+971 4 123 4571",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    mapLink: "https://maps.google.com",
  },
  {
    id: "3",
    name: "Palm Jumeirah Office",
    address: "Golden Mile, Palm Jumeirah",
    phone: "+971 4 123 4572",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    mapLink: "https://maps.google.com",
  },
]

export function OfficeLocations() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Our Office Locations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {offices.map((office, index) => (
          <motion.div
            key={office.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden h-full">
              <div className="relative h-48">
                <Image src={office.image} alt={office.name} fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">{office.name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 text-primary mr-2 mt-1" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-primary mr-2" />
                    <span>{office.phone}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full gap-2" asChild>
                  <a href={office.mapLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    View on Map
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
