"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

// Mock data - in a real app this would come from an API
const categories = [
  { name: "Market Trends", count: 12, slug: "market-trends" },
  { name: "Investment", count: 8, slug: "investment" },
  { name: "Buying Guide", count: 10, slug: "buying-guide" },
  { name: "Financing", count: 6, slug: "financing" },
  { name: "Market Analysis", count: 9, slug: "market-analysis" },
  { name: "Sustainability", count: 5, slug: "sustainability" },
  { name: "Luxury Living", count: 7, slug: "luxury-living" },
  { name: "Property Management", count: 4, slug: "property-management" },
]

export function BlogCategories() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Categories</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Link key={category.slug} href={`/blog?category=${category.slug}`}>
              <Badge variant="outline" className="hover:bg-primary/10 cursor-pointer">
                {category.name} ({category.count})
              </Badge>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
