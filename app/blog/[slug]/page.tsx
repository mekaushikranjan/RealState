import Image from "next/image"
import { notFound } from "next/navigation"
import { BlogAuthor } from "@/components/blog-author"
import { Calendar, Clock, User } from "lucide-react"
import { BlogContent } from '@/components/blog-content'
import { BlogRelated } from '@/components/blog-related'

// Generate static params for the blog posts
export async function generateStaticParams() {
  return [
    { slug: 'future-of-real-estate-in-dubai' },
    { slug: 'dubai-real-estate-market-trends-2023' },
    { slug: 'top-luxury-areas-dubai-property-investment' }
  ]
}

export default function BlogPage(props: any) {
  const { params } = props;
  // In a real app, you would fetch the blog post data here
  const post = {
    title: "The Future of Real Estate in Dubai",
    content: `Dubai's real estate market continues to evolve and innovate, setting new standards for luxury living and investment opportunities. The city's strategic location, world-class infrastructure, and forward-thinking policies make it a prime destination for real estate investment.

## Market Trends

The Dubai real estate market has shown remarkable resilience and growth, with several key trends emerging:

1. Sustainable Development
2. Smart Home Integration
3. Luxury Living Spaces
4. Investment Opportunities

## Future Outlook

The future of Dubai's real estate market looks promising, with several major developments in the pipeline and a growing demand for high-quality properties.`,
    author: {
      name: "Sarah Johnson",
      role: "Real Estate Analyst",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      bio: "Sarah is a real estate expert with over 10 years of experience in Dubai's property market.",
      socialMedia: {
        twitter: "#",
        facebook: "#",
        linkedin: "#"
      }
    },
    date: "March 15, 2024",
    category: "Market Analysis",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  }

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
