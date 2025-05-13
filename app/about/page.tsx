import { PageHeader } from "@/components/page-header"
import { TeamSection } from "@/components/team-section"
import { CompanyValues } from "@/components/company-values"
import { CompanyHistory } from "@/components/company-history"
import { Awards } from "@/components/awards"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative w-full">
        <div className="relative w-full h-96 md:h-[600px] flex items-center justify-center">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="About Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Learn about our company and our mission to provide the finest real estate services in Dubai
            </p>
          </div>
        </div>
      </div>

      <div className="w-full px-4 py-12">
        <div className="max-w-7xl mx-auto space-y-16">
          <CompanyHistory />
          <CompanyValues />
          <TeamSection />
          <Awards />
        </div>
      </div>
    </main>
  )
}
