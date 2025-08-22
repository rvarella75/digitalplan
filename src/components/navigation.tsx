"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm border-b">
      <div className="content-container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Image 
                src="/2.png" 
                alt="ProFuture Consulting Logo" 
                width={849} 
                height={202} 
                className="h-10 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How It Works</a>
            <a href="#benefits" className="text-gray-600 hover:text-gray-900 transition-colors">Benefits</a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Testimonials</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.location.href = '/form'}
            >
              Book Consultation
            </Button>
            <Button 
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              onClick={() => window.location.href = '/form'}
            >
              Start My Plan
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <a href="#how-it-works" className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors">How It Works</a>
                <a href="#benefits" className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors">Benefits</a>
                <a href="#testimonials" className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors">Testimonials</a>
                <a href="#about" className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors">About</a>
                <a href="#contact" className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors">Contact</a>
                <div className="pt-4 border-t">
                  <Button 
                    variant="outline" 
                    className="w-full mb-3"
                    onClick={() => window.location.href = '/form'}
                  >
                    Book Consultation
                  </Button>
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    onClick={() => window.location.href = '/form'}
                  >
                    Start My Plan
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
