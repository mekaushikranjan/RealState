import { PropertyGallery } from "@/components/property-gallery"
import { PropertyDetails } from "@/components/property-details"
import { PropertyFeatures } from "@/components/property-features"
import { PropertyLocation } from "@/components/property-location"
import { PropertyAgent } from "@/components/property-agent"
import { SimilarProperties } from "@/components/similar-properties"
import { PropertyContactForm } from "@/components/property-contact-form"
import { getPropertyById } from "@/lib/properties"

export default function PropertyPage({ params }: { params: { id: string } }) {
  // In a real application, this would fetch from an API
  const property = getPropertyById(params.id)

  if (!property) {
    return <div className="container mx-auto px-4 py-12">Property not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <PropertyGallery images={property.images} />
          <PropertyDetails property={property as any} />
          <PropertyFeatures features={property.features} />
          <PropertyLocation location={property.locationDetails} />
        </div>
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-8">
            <PropertyAgent agent={property.agent} />
            <PropertyContactForm propertyId={property.id} />
          </div>
        </div>
      </div>
      <div className="mt-16">
        <SimilarProperties currentPropertyId={property.id} />
      </div>
    </div>
  )
}
