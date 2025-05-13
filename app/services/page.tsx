import { PageHeader } from "@/components/page-header"
import { ServicesGrid } from "@/components/services-grid"
import { ServiceProcess } from "@/components/service-process"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import Image from "next/image"

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
      <div className="relative w-full h-96 md:h-[600px] flex items-center justify-center">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Our Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Comprehensive real estate services tailored to your needs
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mt-12">
          <ServicesGrid />
        </div>
      </div>

      <ServiceProcess />

      <div className="container mx-auto px-4 py-16">
        <TestimonialsSection />
      </div>

      <CTASection />
    </div>
  )
}
