"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, User } from "lucide-react"

interface PropertyAgentProps {
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

export function PropertyAgent({
  agent = {
    id: "1",
    name: "Sarah Johnson",
    title: "Senior Luxury Property Consultant",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    phone: "+971 50 123 4567",
    email: "sarah@luxurydubai.com",
    experience: "10+ years",
    languages: ["English", "Arabic", "Russian"],
    bio: "Sarah specializes in luxury properties across Dubai, with particular expertise in Palm Jumeirah and Downtown Dubai. With over a decade of experience, she has helped hundreds of clients find their dream homes.",
  },
}: Partial<PropertyAgentProps>) {
  return (
    <Card>
      <CardHeader className="pb-0">
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
            <Image src={agent.image || "/placeholder.svg"} alt={agent.name} fill className="object-cover" />
          </div>
          <h3 className="text-xl font-bold text-center">{agent.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-2">{agent.title}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-sm">
            <p className="mb-2">{agent.bio}</p>
            <div className="flex items-center mb-1">
              <User className="h-4 w-4 mr-2 text-primary" />
              <span>Experience: {agent.experience}</span>
            </div>
            <div className="mb-2">
              <span className="mr-2">Languages:</span>
              {agent.languages.map((language, index) => (
                <span
                  key={index}
                  className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded mr-1 mb-1"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Button className="w-full gap-2">
              <Phone className="h-4 w-4" />
              Call
            </Button>
            <Button variant="outline" className="w-full gap-2">
              <Mail className="h-4 w-4" />
              Email
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
