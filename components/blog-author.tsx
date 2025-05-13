"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

interface BlogAuthorProps {
  author: {
    name: string
    image: string
    bio: string
    socialMedia: {
      twitter?: string
      facebook?: string
      linkedin?: string
    }
  }
}

export function BlogAuthor({
  author = {
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
    bio: "Sarah is a real estate expert with over 10 years of experience in Dubai's property market. She specializes in luxury properties and investment opportunities.",
    socialMedia: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
}: Partial<BlogAuthorProps>) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 ring-2 ring-primary/20">
              <Image 
                src={author.image} 
                alt={author.name} 
                fill 
                className="object-cover"
                sizes="(max-width: 96px) 100vw, 96px"
                priority
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{author.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{author.bio}</p>
            <div className="flex space-x-2">
              {author.socialMedia.twitter && (
                <Button variant="ghost" size="icon" asChild>
                  <a href={author.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {author.socialMedia.facebook && (
                <Button variant="ghost" size="icon" asChild>
                  <a href={author.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {author.socialMedia.linkedin && (
                <Button variant="ghost" size="icon" asChild>
                  <a href={author.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
