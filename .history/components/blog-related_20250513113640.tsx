"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

// Mock data - in a real app this would come from an API
const relatedPosts = [
  {
    id: "2",
    title: "Top 5 Luxury Areas in Dubai for Property Investment",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",  
    date: "April 28, 2023",
    category: "Investment",
    slug: "top-luxury-areas-dubai-property-investment",
  },
  {
    id: "3",
    title: "Guide to Buying Off-Plan Properties in Dubai",
    image: "",
    date: "April 10, 2023",
    category: "Buying Guide",
    slug: "guide-buying-off-plan-properties-dubai",
  },
  {
    id: "4",
    title: "How to Secure Financing for Your Dubai Property",
    image: "/placeholder.svg?height=200&width=300",
    date: "March 22, 2023",
    category: "Financing",
    slug: "secure-financing-dubai-property",
  },
]

interface BlogRelatedProps {
  currentPostSlug: string
}

export function BlogRelated({ currentPostSlug }: BlogRelatedProps) {
  // Filter out the current post
  const filteredPosts = relatedPosts.filter((post) => post.slug !== currentPostSlug)

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden h-full">
              <Link href={`/blog/${post.slug}`}>
                <div className="overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </Link>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <Calendar className="h-3 w-3 mr-1" />
                    {post.date}
                  </div>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-base font-semibold hover:text-primary transition-colors">{post.title}</h3>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
