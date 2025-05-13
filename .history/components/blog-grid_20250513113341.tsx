"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User } from "lucide-react"

// Mock data - in a real app this would come from an API
const blogPosts = [
  {
    id: "1",
    title: "Dubai Real Estate Market Trends for 2023",
    excerpt: "Explore the latest trends and forecasts for Dubai's dynamic real estate market in 2023.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    date: "May 15, 2023",
    readTime: "5 min read",
    category: "Market Trends",
    author: "Sarah Johnson",
    slug: "dubai-real-estate-market-trends-2023",
  },
  {
    id: "2",
    title: "Top 5 Luxury Areas in Dubai for Property Investment",
    excerpt: "Discover the most exclusive neighborhoods in Dubai that offer the best return on investment.",
    image: "/placeholder.svg?height=400&width=600",
    date: "April 28, 2023",
    readTime: "7 min read",
    category: "Investment",
    author: "Mohammed Al Farsi",
    slug: "top-luxury-areas-dubai-property-investment",
  },
  {
    id: "3",
    title: "Guide to Buying Off-Plan Properties in Dubai",
    excerpt: "Everything you need to know about purchasing off-plan properties in Dubai's competitive market.",
    image: "/placeholder.svg?height=400&width=600",
    date: "April 10, 2023",
    readTime: "6 min read",
    category: "Buying Guide",
    author: "Elena Petrova",
    slug: "guide-buying-off-plan-properties-dubai",
  },
  {
    id: "4",
    title: "How to Secure Financing for Your Dubai Property",
    excerpt: "A comprehensive guide to mortgage options and financing solutions for property buyers in Dubai.",
    image: "/placeholder.svg?height=400&width=600",
    date: "March 22, 2023",
    readTime: "8 min read",
    category: "Financing",
    author: "James Wilson",
    slug: "secure-financing-dubai-property",
  },
  {
    id: "5",
    title: "The Impact of Expo 2020 on Dubai's Real Estate Market",
    excerpt: "Analyzing how Expo 2020 has influenced property prices and investment opportunities in Dubai.",
    image: "/placeholder.svg?height=400&width=600",
    date: "March 5, 2023",
    readTime: "6 min read",
    category: "Market Analysis",
    author: "Aisha Al Mansouri",
    slug: "impact-expo-2020-dubai-real-estate-market",
  },
  {
    id: "6",
    title: "Sustainable Living: Eco-Friendly Properties in Dubai",
    excerpt: "Exploring the growing trend of sustainable and eco-friendly residential developments in Dubai.",
    image: "/placeholder.svg?height=400&width=600",
    date: "February 18, 2023",
    readTime: "5 min read",
    category: "Sustainability",
    author: "Daniel Chen",
    slug: "sustainable-living-eco-friendly-properties-dubai",
  },
]

export function BlogGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {blogPosts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="overflow-hidden h-full flex flex-col">
            <Link href={`/blog/${post.slug}`}>
              <div className="overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </Link>
            <CardContent className="p-4 flex-grow">
              <div className="flex items-center justify-between mb-3">
                <Badge variant="secondary">{post.category}</Badge>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readTime}
                </div>
              </div>
              <Link href={`/blog/${post.slug}`}>
                <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors">{post.title}</h3>
              </Link>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0 border-t flex justify-between items-center">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center mr-4">
                  <User className="h-4 w-4 mr-1" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                </div>
              </div>
              <Link href={`/blog/${post.slug}`}>
                <Button variant="ghost" size="sm">
                  Read More
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
