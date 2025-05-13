"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Slider } from "@/components/ui/slider"
import { Search, SlidersHorizontal } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function PropertyFilters() {
  const [priceRange, setPriceRange] = useState([0, 50])
  const [areaRange, setAreaRange] = useState([0, 10000])
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <div className="w-full">
      {/* Desktop Filters */}
      <div className="hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <div className="col-span-2">
            <Input placeholder="Search by location or property name" />
          </div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
              <SelectItem value="penthouse">Penthouse</SelectItem>
              <SelectItem value="townhouse">Townhouse</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Bedrooms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5+">5+</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>

        <Accordion type="single" collapsible className="w-full mb-8">
          <AccordionItem value="advanced-filters">
            <AccordionTrigger>Advanced Filters</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                <div className="space-y-4">
                  <div>
                    <Label>Price Range (AED Million)</Label>
                    <div className="pt-6">
                      <Slider
                        defaultValue={[0, 50]}
                        max={50}
                        step={1}
                        value={priceRange}
                        onValueChange={setPriceRange}
                      />
                      <div className="flex justify-between mt-2">
                        <span className="text-sm">{priceRange[0]} M</span>
                        <span className="text-sm">{priceRange[1]} M</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Label>Area (sq.ft)</Label>
                    <div className="pt-6">
                      <Slider
                        defaultValue={[0, 10000]}
                        max={10000}
                        step={100}
                        value={areaRange}
                        onValueChange={setAreaRange}
                      />
                      <div className="flex justify-between mt-2">
                        <span className="text-sm">{areaRange[0]}</span>
                        <span className="text-sm">{areaRange[1]}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label>Bathrooms</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="5+">5+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Property Status</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="ready">Ready</SelectItem>
                        <SelectItem value="off-plan">Off-Plan</SelectItem>
                        <SelectItem value="under-construction">Under Construction</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label>Amenities</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select amenities" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pool">Swimming Pool</SelectItem>
                        <SelectItem value="gym">Gym</SelectItem>
                        <SelectItem value="parking">Parking</SelectItem>
                        <SelectItem value="security">24/7 Security</SelectItem>
                        <SelectItem value="balcony">Balcony</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Sort By</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Featured" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="featured">Featured</SelectItem>
                        <SelectItem value="price-asc">Price (Low to High)</SelectItem>
                        <SelectItem value="price-desc">Price (High to Low)</SelectItem>
                        <SelectItem value="newest">Newest</SelectItem>
                        <SelectItem value="area-asc">Area (Small to Large)</SelectItem>
                        <SelectItem value="area-desc">Area (Large to Small)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <Button variant="outline" className="mr-2">
                  Reset
                </Button>
                <Button>Apply Filters</Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Mobile Filters */}
      <div className="md:hidden">
        <div className="flex gap-2 mb-6">
          <Input placeholder="Search properties" className="flex-1" />
          <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <SlidersHorizontal className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="py-4 space-y-6">
                <div className="space-y-2">
                  <Label>Property Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="penthouse">Penthouse</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Bedrooms</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5+">5+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Price Range (AED Million)</Label>
                  <div className="pt-6">
                    <Slider defaultValue={[0, 50]} max={50} step={1} value={priceRange} onValueChange={setPriceRange} />
                    <div className="flex justify-between mt-2">
                      <span className="text-sm">{priceRange[0]} M</span>
                      <span className="text-sm">{priceRange[1]} M</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Area (sq.ft)</Label>
                  <div className="pt-6">
                    <Slider
                      defaultValue={[0, 10000]}
                      max={10000}
                      step={100}
                      value={areaRange}
                      onValueChange={setAreaRange}
                    />
                    <div className="flex justify-between mt-2">
                      <span className="text-sm">{areaRange[0]}</span>
                      <span className="text-sm">{areaRange[1]}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Bathrooms</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5+">5+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Sort By</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Featured" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-asc">Price (Low to High)</SelectItem>
                      <SelectItem value="price-desc">Price (High to Low)</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-2 pt-4">
                  <Button onClick={() => setMobileFiltersOpen(false)}>Apply Filters</Button>
                  <Button variant="outline">Reset</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Button>
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
