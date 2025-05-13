import Image from "next/image"
import { BlogGrid } from "@/components/blog-grid"
import { BlogCategories } from "@/components/blog-categories"
import { BlogSearch } from "@/components/blog-search"

export default function BlogPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-96 md:h-[600px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Dubai Real Estate Blog"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">Real Estate Blog</h1>
          <p className="text-xl md:text-3xl text-white max-w-3xl drop-shadow-md">
            Stay updated with the latest news and insights about Dubai's real estate market
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <BlogSearch />
              <BlogCategories />
            </div>
          </div>
          <div className="lg:col-span-3">
            <BlogGrid />
          </div>
        </div>
      </div>
    </div>
  )
}
