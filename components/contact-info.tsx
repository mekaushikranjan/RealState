"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, Clock, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export function ContactInfo() {
  const contactDetails = [
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Phone",
      details: [
        { label: "Sales", value: "+971 4 123 4567" },
        { label: "Rentals", value: "+971 4 123 4568" },
        { label: "Customer Support", value: "+971 4 123 4569" },
      ],
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      details: [
        { label: "General Inquiries", value: "info@luxurydubai.com" },
        { label: "Sales", value: "sales@luxurydubai.com" },
        { label: "Rentals", value: "rentals@luxurydubai.com" },
      ],
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: "Working Hours",
      details: [
        { label: "Monday - Friday", value: "9:00 AM - 6:00 PM" },
        { label: "Saturday", value: "10:00 AM - 4:00 PM" },
        { label: "Sunday", value: "Closed" },
      ],
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Head Office",
      details: [
        { label: "Address", value: "Sheikh Zayed Road, Dubai, UAE" },
        { label: "Near", value: "Dubai International Financial Centre" },
        { label: "P.O. Box", value: "12345, Dubai, UAE" },
      ],
    },
  ]

  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactDetails.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex"
            >
              <div className="mr-4 mt-1">{item.icon}</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <ul className="space-y-2">
                  {item.details.map((detail) => (
                    <li key={detail.label}>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">{detail.label}: </span>
                      <span className="font-medium">{detail.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
