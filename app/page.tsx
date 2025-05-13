import { HeroSection } from "@/components/hero-section"
import { FeaturedProperties } from "@/components/featured-properties"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { NeighborhoodsSection } from "@/components/neighborhoods-section"
import { CTASection } from "@/components/cta-section"
import { NewsSection } from "@/components/news-section"
import { FeaturedDevelopments } from "@/components/featured-developments"

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <div className="flex flex-col gap-16 md:gap-24">
        <HeroSection />
        <FeaturedProperties />
        <FeaturedDevelopments />
        <AboutSection />
        <NeighborhoodsSection />
        <TestimonialsSection />
        <NewsSection />
        <CTASection />
      </div>
    </main>
  )
}
