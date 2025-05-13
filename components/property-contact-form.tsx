"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Calendar } from "lucide-react"

interface PropertyContactFormProps {
  propertyId: string
}

export function PropertyContactForm({ propertyId }: PropertyContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subscribe: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, subscribe: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would send the form data to a server
    console.log("Form submitted:", formData)
    // Reset form or show success message
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Interested in this property?</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="I'm interested in this property. Please contact me with more information."
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="subscribe" checked={formData.subscribe} onCheckedChange={handleCheckboxChange} />
            <Label htmlFor="subscribe" className="text-sm">
              Keep me updated about similar properties
            </Label>
          </div>
          <Button type="submit" className="w-full">
            Send Inquiry
          </Button>
          <div className="text-center">
            <Button variant="link" className="text-sm gap-1">
              <Calendar className="h-4 w-4" />
              Schedule a viewing
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
