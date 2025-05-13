import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="text-2xl font-bold text-white mb-6">LUXURY DUBAI</div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Providing premium real estate services in Dubai for over 15 years. Your trusted partner in finding your
              dream property.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-white/10 text-white" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10 text-white" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10 text-white" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10 text-white" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/properties" className="text-gray-400 hover:text-white transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Property Types</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/properties?type=apartment" className="text-gray-400 hover:text-white transition-colors">
                  Apartments
                </Link>
              </li>
              <li>
                <Link href="/properties?type=villa" className="text-gray-400 hover:text-white transition-colors">
                  Villas
                </Link>
              </li>
              <li>
                <Link href="/properties?type=penthouse" className="text-gray-400 hover:text-white transition-colors">
                  Penthouses
                </Link>
              </li>
              <li>
                <Link href="/properties?type=townhouse" className="text-gray-400 hover:text-white transition-colors">
                  Townhouses
                </Link>
              </li>
              <li>
                <Link href="/properties?type=commercial" className="text-gray-400 hover:text-white transition-colors">
                  Commercial
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-white shrink-0 mt-0.5" />
                <span className="text-gray-400">Sheikh Zayed Road, Dubai, UAE</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-white" />
                <span className="text-gray-400">+971 4 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-white" />
                <span className="text-gray-400">info@luxurydubai.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Luxury Dubai Real Estate. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 text-sm hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 text-sm hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
