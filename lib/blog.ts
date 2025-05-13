// Mock data for blog posts - in a real app, this would come from a database or API
const blogPosts = [
  {
    id: "1",
    title: "Dubai Real Estate Market Trends for 2023",
    excerpt: "Explore the latest trends and forecasts for Dubai's dynamic real estate market in 2023.",
    content: `Dubai's real estate market continues to evolve and present exciting opportunities for investors and homebuyers alike. As we navigate through 2023, several key trends are shaping the landscape of property investment in this vibrant city.

# Luxury Market Resilience

The luxury segment of Dubai's real estate market has shown remarkable resilience, with high-end properties in prime locations like Palm Jumeirah, Emirates Hills, and Downtown Dubai experiencing steady demand. International investors, particularly from Europe, Asia, and neighboring GCC countries, are increasingly drawn to Dubai's luxury offerings, attracted by the city's safety, lifestyle, and favorable tax environment.

# Off-Plan Developments Gaining Momentum

Off-plan properties are seeing renewed interest as developers offer attractive payment plans and competitive pricing. Projects in emerging areas such as Dubai Creek Harbour, Dubai Hills Estate, and Emaar Beachfront are particularly popular, offering investors the potential for significant capital appreciation upon completion.

## Developer Incentives

To stimulate sales, many developers are offering attractive incentives, including:
- Extended post-handover payment plans
- Waived service charges for initial years
- Guaranteed rental returns
- Furniture packages and interior design services

# Sustainable and Smart Homes

Environmentally conscious living is becoming a priority for many buyers, leading to increased demand for sustainable properties. Developments featuring energy-efficient designs, solar panels, smart home technology, and water conservation systems are commanding premium prices and attracting environmentally aware investors.

# Market Outlook

While global economic uncertainties persist, Dubai's real estate market is well-positioned for growth in 2023. Government initiatives, including visa reforms, business-friendly policies, and infrastructure investments ahead of the city's 2040 Urban Master Plan, continue to bolster confidence in the market's long-term prospects.

Investors should focus on properties in well-established communities or those developed by reputable developers with strong track records. As always, thorough research and due diligence are essential before making any investment decisions in this dynamic market.`,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop",
    date: "May 15, 2023",
    readTime: "5 min read",
    category: "Market Trends",
    author: {
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
      bio: "Sarah is a real estate expert with over 10 years of experience in Dubai's property market. She specializes in luxury properties and investment opportunities.",
      socialMedia: {
        twitter: "#",
        facebook: "#",
        linkedin: "#",
      },
    },
    slug: "dubai-real-estate-market-trends-2023",
  },
  // Add more blog posts as needed
]

export function getBlogPosts() {
  return blogPosts
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
