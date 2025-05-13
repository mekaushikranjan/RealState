"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock data - in a real app this would come from an API
const teamMembers = [
  {
    id: "1",
    name: "Sarah Johnson",
    position: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    bio: "With over 15 years of experience in Dubai's luxury real estate market, Sarah has established herself as a leading expert in the industry.",
    socialMedia: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: "2",
    name: "Mohammed Al Farsi",
    position: "Managing Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    bio: "Mohammed brings extensive knowledge of the local market and a vast network of connections to help clients find their perfect property.",
    socialMedia: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: "3",
    name: "Elena Petrova",
    position: "Head of Sales",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    bio: "Elena specializes in high-end property transactions and has a proven track record of successful deals in Dubai's most prestigious areas.",
    socialMedia: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: "4",
    name: "James Wilson",
    position: "Head of Property Management",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "James oversees our property management division, ensuring that all client investments are maintained to the highest standards.",
    socialMedia: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: "5",
    name: "Aisha Al Mansouri",
    position: "Marketing Director",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
    bio: "Aisha leads our marketing efforts, creating innovative strategies to showcase our properties to a global audience.",
    socialMedia: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: "6",
    name: "Daniel Chen",
    position: "Investment Advisor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Daniel specializes in helping international investors make informed decisions in Dubai's dynamic real estate market.",
    socialMedia: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
]

export function TeamSection() {
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4"
        >
          Meet Our Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          Our team of experienced professionals is dedicated to providing exceptional service and expertise in Dubai's
          luxury real estate market
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden h-full">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary mb-3">{member.position}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-2">
                  {member.socialMedia.linkedin && (
                    <Button variant="ghost" size="icon" asChild>
                      <a href={member.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {member.socialMedia.twitter && (
                    <Button variant="ghost" size="icon" asChild>
                      <a href={member.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {member.socialMedia.instagram && (
                    <Button variant="ghost" size="icon" asChild>
                      <a href={member.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
