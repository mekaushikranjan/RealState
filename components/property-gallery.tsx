"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react"

interface PropertyGalleryProps {
  images: string[]
}

export function PropertyGallery({
  images = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  ],
}: Partial<PropertyGalleryProps>) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fullscreen, setFullscreen] = useState(false)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const toggleFullscreen = () => {
    setFullscreen(!fullscreen)
  }

  return (
    <div className="relative mb-8">
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full"
          >
            <Image
              src={images[currentIndex] || "/placeholder.svg"}
              alt={`Property image ${currentIndex + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white dark:bg-gray-900/80 dark:hover:bg-gray-900 rounded-full"
          onClick={toggleFullscreen}
        >
          <Expand className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white dark:bg-gray-900/80 dark:hover:bg-gray-900 rounded-full"
          onClick={prevImage}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white dark:bg-gray-900/80 dark:hover:bg-gray-900 rounded-full"
          onClick={nextImage}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      <div className="grid grid-cols-5 gap-2 mt-2">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative aspect-[4/3] overflow-hidden rounded-md cursor-pointer ${
              index === currentIndex ? "ring-2 ring-primary" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Property thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {fullscreen && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <Button variant="ghost" size="icon" className="absolute top-4 right-4 text-white" onClick={toggleFullscreen}>
            <X className="h-6 w-6" />
          </Button>

          <div className="relative w-full h-full max-w-7xl max-h-screen p-4">
            <Image
              src={images[currentIndex] || "/placeholder.svg"}
              alt={`Property image ${currentIndex + 1}`}
              fill
              className="object-contain"
            />

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white"
              onClick={prevImage}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
              onClick={nextImage}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
