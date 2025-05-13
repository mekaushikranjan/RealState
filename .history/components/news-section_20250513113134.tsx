"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"

// Mock data - in a real app this would come from an API
const blogPosts = [
  {
    id: "1",
    title: "Dubai Real Estate Market Trends for 2023",
    excerpt: "Explore the latest trends and forecasts for Dubai's dynamic real estate market in 2023.",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    date: "May 15, 2023",
    readTime: "5 min read",
    category: "Market Trends",
    slug: "dubai-real-estate-market-trends-2023",
  },
  {
    id: "2",
    title: "Top 5 Luxury Areas in Dubai for Property Investment",
    excerpt: "Discover the most exclusive neighborhoods in Dubai that offer the best return on investment.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "April 28, 2023",
    readTime: "7 min read",
    category: "Investment",
    slug: "top-luxury-areas-dubai-property-investment",
  },
  {
    id: "3",
    title: "Guide to Buying Off-Plan Properties in Dubai",
    excerpt: "Everything you need to know about purchasing off-plan properties in Dubai's competitive market.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    date: "April 10, 2023",
    readTime: "6 min read",
    category: "Buying Guide",
    slug: "guide-buying-off-plan-properties-dubai",
  },
]

export function NewsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Latest News & Insights
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Stay updated with the latest news and insights about Dubai's real estate market
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <Link href={`/blog/${post.slug}`}>
                  <div className="overflow-hidden">
                    <Image
                      src={post.image}
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
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
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

        <div className="text-center mt-12">
          <Link href="/blog">
            <Button variant="outline" size="lg">
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
