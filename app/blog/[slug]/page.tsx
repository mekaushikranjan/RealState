import Image from "next/image"
import { notFound } from "next/navigation"
import { BlogAuthor } from "@/components/blog-author"
import { Calendar, Clock, User } from "lucide-react"
import { BlogContent } from '@/components/blog-content'
import { BlogRelated } from '@/components/blog-related'

// Mock data - in a real app this would come from an API
const blogPosts = [
  {
    id: "1",
    title: "Dubai Real Estate Market Trends for 2023",
    excerpt: "Explore the latest trends and forecasts for Dubai's dynamic real estate market in 2023.",
    content: "Full content of the blog post...",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    date: "May 15, 2023",
    readTime: "5 min read",
    category: "Market Trends",
    author: {
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
      bio: "Sarah is a real estate expert with over 10 years of experience in Dubai's property market.",
      socialMedia: {
        twitter: "#",
        facebook: "#",
        linkedin: "#",
      },
    },
    slug: "dubai-real-estate-market-trends-2023",
  },
  {
    id: "2",
    title: "Top 5 Luxury Areas in Dubai for Property Investment",
    excerpt: "Discover the most exclusive neighborhoods in Dubai that offer the best return on investment.",
    content: "Full content of the blog post...",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    date: "April 28, 2023",
    readTime: "7 min read",
    category: "Investment",
    author: {
      name: "Mohammed Al Farsi",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
      bio: "Mohammed specializes in luxury property investments in Dubai.",
      socialMedia: {
        twitter: "#",
        facebook: "#",
        linkedin: "#",
      },
    },
    slug: "top-luxury-areas-dubai-property-investment",
  },
  {
    id: "3",
    title: "Guide to Buying Off-Plan Properties in Dubai",
    excerpt: "Everything you need to know about purchasing off-plan properties in Dubai's competitive market.",
    content: "Full content of the blog post...",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    date: "April 10, 2023",
    readTime: "6 min read",
    category: "Buying Guide",
    author: {
      name: "Elena Petrova",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop",
      bio: "Elena is an expert in Dubai's off-plan property market.",
      socialMedia: {
        twitter: "#",
        facebook: "#",
        linkedin: "#",
      },
    },
    slug: "guide-buying-off-plan-properties-dubai",
  },
]

function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

interface BlogPageProps {
  params: {
    slug: string
  }
}

export default function BlogPage({ params }: BlogPageProps) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative w-full">
        <div className="relative w-full h-96 md:h-[600px] flex items-center justify-center">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center justify-center gap-4 text-sm">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.category}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
            <BlogContent content={post.content} />
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <BlogAuthor author={post.author} />
              <BlogRelated currentPostSlug={params.slug} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
