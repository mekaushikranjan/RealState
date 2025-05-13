"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { Search, MapPin } from "lucide-react"

export function HeroSection() {
  const [searchType, setSearchType] = useState("buy")

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80"
          alt="Luxury Dubai Real Estate"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Discover Luxury Living in Dubai
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          >
            Explore exclusive properties in the most prestigious locations across Dubai
          </motion.p>

          {/* Search Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 max-w-4xl mx-auto"
          >
            <Tabs defaultValue="buy" onValueChange={setSearchType} className="w-full">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="buy">Buy</TabsTrigger>
                <TabsTrigger value="rent">Rent</TabsTrigger>
                <TabsTrigger value="offplan">Off-Plan</TabsTrigger>
              </TabsList>
              <TabsContent value="buy" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-2">
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <Input placeholder="Location" className="pl-10 bg-white/80 border-0 text-gray-900" />
                    </div>
                  </div>
                  <Select>
                    <SelectTrigger className="bg-white/80 border-0 text-gray-900">
                      <SelectValue placeholder="Property Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="penthouse">Penthouse</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="bg-primary hover:bg-primary/90">
                    <Search className="mr-2 h-4 w-4" />
                    Search
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="rent" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-2">
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <Input placeholder="Location" className="pl-10 bg-white/80 border-0 text-gray-900" />
                    </div>
                  </div>
                  <Select>
                    <SelectTrigger className="bg-white/80 border-0 text-gray-900">
                      <SelectValue placeholder="Property Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="penthouse">Penthouse</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="bg-primary hover:bg-primary/90">
                    <Search className="mr-2 h-4 w-4" />
                    Search
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="offplan" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-2">
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <Input placeholder="Project Name" className="pl-10 bg-white/80 border-0 text-gray-900" />
                    </div>
                  </div>
                  <Select>
                    <SelectTrigger className="bg-white/80 border-0 text-gray-900">
                      <SelectValue placeholder="Developer" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="emaar">Emaar</SelectItem>
                      <SelectItem value="damac">Damac</SelectItem>
                      <SelectItem value="nakheel">Nakheel</SelectItem>
                      <SelectItem value="meraas">Meraas</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="bg-primary hover:bg-primary/90">
                    <Search className="mr-2 h-4 w-4" />
                    Search
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}
