export interface Property {
  id: string
  title: string
  location: string
  price: string
  bedrooms: number
  bathrooms: number
  area: number
  type: string
  category: string
  image: string
  images: string[]  // Array of all property images
  featured: boolean
  features: string[]
  amenities: string[]
  yearBuilt: number
  propertyId: string
  description: string
  locationDetails: {
    address: string
    latitude: number
    longitude: number
    neighborhood: string
    city: string
  }
  agent: {
    id: string
    name: string
    title: string
    image: string
    phone: string
    email: string
    experience: string
    languages: string[]
    bio: string
  }
}

const properties: Property[] = [
  {
    id: "1",
    title: "Luxury Penthouse with Sea View",
    location: "Palm Jumeirah",
    price: "25,000,000",
    bedrooms: 4,
    bathrooms: 5,
    area: 5200,
    type: "sale",
    category: "penthouse",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop",
    ],
    featured: true,
    features: ["Private Pool", "Terrace", "Maid's Room", "Study", "Walk-in Closet", "Smart Home", "Private Elevator"],
    amenities: ["Swimming Pool", "Gym", "Sauna", "24/7 Security", "Concierge", "Parking", "Beach Access"],
    yearBuilt: 2020,
    propertyId: "LD-PJ-1234",
    description:
      "This stunning penthouse offers breathtaking views of the Arabian Gulf and the Dubai skyline. Featuring high-end finishes, spacious living areas, and a private terrace, this property represents the pinnacle of luxury living in Palm Jumeirah.\n\nThe open-concept living and dining area is perfect for entertaining, while the gourmet kitchen comes equipped with top-of-the-line appliances. The master suite includes a spa-like bathroom and a walk-in closet. Additional features include floor-to-ceiling windows, smart home technology, and exclusive access to building amenities.",
    locationDetails: {
      address: "Palm Jumeirah, Dubai, UAE",
      latitude: 25.1124,
      longitude: 55.139,
      neighborhood: "Palm Jumeirah",
      city: "Dubai",
    },
    agent: {
      id: "1",
      name: "Sarah Johnson",
      title: "Senior Luxury Property Consultant",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
      phone: "+971 50 123 4567",
      email: "sarah@luxurydubai.com",
      experience: "10+ years",
      languages: ["English", "Arabic", "Russian"],
      bio: "Sarah specializes in luxury properties across Dubai, with particular expertise in Palm Jumeirah and Downtown Dubai. With over a decade of experience, she has helped hundreds of clients find their dream homes.",
    },
  },
  {
    id: "2",
    title: "Modern Villa with Private Pool",
    location: "Emirates Hills",
    price: "18,500,000",
    bedrooms: 6,
    bathrooms: 7,
    area: 8500,
    type: "sale",
    category: "villa",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
    ],
    featured: true,
    features: ["Private Pool", "Terrace", "Maid's Room", "Study", "Walk-in Closet", "Smart Home", "Private Elevator"],
    amenities: ["Swimming Pool", "Gym", "Sauna", "24/7 Security", "Concierge", "Parking", "Beach Access"],
    yearBuilt: 2021,
    propertyId: "EH-VL-5678",
    description:
      "This modern villa offers a luxurious living experience with a private pool and stunning views. The spacious layout and high-end finishes make it perfect for families.",
    locationDetails: {
      address: "Emirates Hills, Dubai, UAE",
      latitude: 25.0759,
      longitude: 55.1773,
      neighborhood: "Emirates Hills",
      city: "Dubai",
    },
    agent: {
      id: "2",
      name: "John Smith",
      title: "Luxury Property Consultant",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop",
      phone: "+971 50 987 6543",
      email: "john@luxurydubai.com",
      experience: "8+ years",
      languages: ["English", "French"],
      bio: "John is a seasoned real estate professional with a passion for helping clients find their dream homes in Dubai.",
    },
  },
]

export function getAllProperties(): Property[] {
  return properties
}

export function getPropertyById(id: string): Property | undefined {
  return properties.find(property => property.id === id)
}
