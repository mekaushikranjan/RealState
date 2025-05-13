"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"

interface PropertyLocationProps {
  location: {
    address: string
    neighborhood: string
    city: string
    coordinates: {
      lat: number
      lng: number
    }
    nearbyPlaces: {
      name: string
      distance: string
      type: string
    }[]
  }
}

export function PropertyLocation({
  location = {
    address: "Palm Jumeirah, Dubai, UAE",
    neighborhood: "Palm Jumeirah",
    city: "Dubai",
    coordinates: {
      lat: 25.1124,
      lng: 55.139,
    },
    nearbyPlaces: [
      { name: "Atlantis, The Palm", distance: "1.2 km", type: "Landmark" },
      { name: "Nakheel Mall", distance: "0.8 km", type: "Shopping" },
      { name: "Dubai Marina", distance: "5.3 km", type: "Neighborhood" },
      { name: "Dubai International Airport", distance: "32 km", type: "Airport" },
      { name: "Burj Khalifa", distance: "22 km", type: "Landmark" },
      { name: "Dubai Mall", distance: "22 km", type: "Shopping" },
    ],
  },
}: Partial<PropertyLocationProps>) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Location</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="flex items-start mb-4">
            <MapPin className="h-5 w-5 mr-2 mt-0.5 text-primary" />
            <div>
              <p className="font-medium">{location.address}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {location.neighborhood}, {location.city}
              </p>
            </div>
          </div>

          <div className="aspect-[16/9] bg-gray-200 dark:bg-gray-800 rounded-lg mb-6 overflow-hidden">
            {/* In a real application, this would be a Google Maps or similar map component */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">Map View</p>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">Nearby Places</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {location.nearbyPlaces.map((place, index) => (
                <div key={index} className="flex flex-col">
                  <span className="font-medium">{place.name}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {place.distance} • {place.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
