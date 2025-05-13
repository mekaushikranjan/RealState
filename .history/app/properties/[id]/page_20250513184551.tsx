import { PropertyGallery } from "@/components/property-gallery"
import { PropertyDetails } from "@/components/property-details"
import { PropertyFeatures } from "@/components/property-features"
import { PropertyLocation } from "@/components/property-location"
import { PropertyAgent } from "@/components/property-agent"
import { SimilarProperties } from "@/components/similar-properties"
import { PropertyContactForm } from "@/components/property-contact-form"
import { getPropertyById, getAllProperties } from "@/lib/properties"
import { notFound } from 'next/navigation'
import Image from 'next/image'

export async function generateStaticParams() {
  const properties = getAllProperties()
  return properties.map((property) => ({
    id: property.id,
  }))
}

export default function PropertyPage(props: any) {
  const { params } = props;
  // In a real application, this would fetch from an API
  const property = getPropertyById(params.id)

  if (!property) {
    notFound()
  }

  return (
    <main className="w-full overflow-x-hidden">
      <div className="relative w-full h-96 md:h-[600px] flex items-center justify-center">
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end justify-center z-10 pb-12">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">{property.title}</h1>
            <p className="text-lg md:text-2xl mb-2 drop-shadow-md">{property.locationDetails.address}</p>
            <p className="text-2xl md:text-3xl font-semibold drop-shadow-md">{property.price}</p>
          </div>
        </div>
      </div>
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
    </main>
  )
}
