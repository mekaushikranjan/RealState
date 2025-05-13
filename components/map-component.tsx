"use client"

import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

export default function MapComponent() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<L.Map | null>(null)

  useEffect(() => {
    if (mapRef.current && !mapInstance.current) {
      // Initialize map
      mapInstance.current = L.map(mapRef.current, {
        center: [25.2048, 55.2708], // Dubai coordinates
        zoom: 4, // Start with world view
        zoomControl: true,
        attributionControl: true,
        minZoom: 2,
        maxZoom: 18,
      })

      // Add clear tile layer
      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        maxZoom: 19,
        subdomains: "abcd",
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapInstance.current)

      // Custom marker icon
      const customIcon = L.divIcon({
        className: "custom-marker",
        html: `<div style="
          background-color: #FF4B4B;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 4px solid white;
          box-shadow: 0 0 20px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          transform: translateY(-50%);
        ">📍</div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
      })

      // Add marker for Dubai location
      const marker = L.marker([25.2048, 55.2708], { icon: customIcon }).addTo(mapInstance.current)
      
      // Custom popup styling
      const popup = L.popup({
        className: "custom-popup",
        maxWidth: 300,
        closeButton: false,
        offset: [0, -10]
      })
        .setContent(`
          <div style="
            padding: 15px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          ">
            <h3 style="
              margin: 0 0 10px 0;
              color: #333;
              font-size: 18px;
              font-weight: bold;
            ">Luxury Dubai Real Estate</h3>
            <p style="
              margin: 0;
              color: #666;
              font-size: 14px;
              line-height: 1.5;
            ">Sheikh Zayed Road, Dubai, UAE</p>
          </div>
        `)
      
      marker.bindPopup(popup).openPopup()

      // Add custom controls
      L.control.zoom({
        position: "bottomright",
      }).addTo(mapInstance.current)

      // Add scale control
      L.control.scale({
        imperial: false,
        position: "bottomleft"
      }).addTo(mapInstance.current)

      // Force a resize event to ensure the map is properly rendered
      setTimeout(() => {
        mapInstance.current?.invalidateSize()
      }, 100)

      // Animate to Dubai after a short delay
      setTimeout(() => {
        mapInstance.current?.flyTo([25.2048, 55.2708], 12, {
          duration: 2
        })
      }, 1000)
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove()
        mapInstance.current = null
      }
    }
  }, [])

  return <div ref={mapRef} className="w-full h-full" />
} 