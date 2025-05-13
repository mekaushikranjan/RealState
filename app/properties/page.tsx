import { PropertyFilters } from "@/components/property-filters"
import { PropertyGrid } from "@/components/property-grid"
import { PageHeader } from "@/components/page-header"
import Image from "next/image"

export default function PropertiesPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative w-full h-96 md:h-[600px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070"
          alt="Luxury Properties"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-28 text-center px-4 mt-4 md:mt-20">
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 md:mb-4">
            Find Your Dream Home
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-2xl">
            Explore our curated selection of luxury properties in prime locations
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container px-4 relative z-10">
        <div className="mt-14">
          <PropertyFilters />
        </div>
        <div className="mt-8">
          <PropertyGrid />
        </div>
      </div>
    </div>
  )
}
