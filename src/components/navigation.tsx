"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const handleBookConsultation = async () => {
  try {
    const response = await fetch('https://n8n.profutureconsulting.com/webhook/98b94774-0b06-404c-90bd-30a71b1001ed', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({})
    });

    if (response.ok) {
      const data = await response.json();
      if (data.URL) {
        window.open(data.URL, '_blank', 'noopener,noreferrer');
      }
    } else {
      // Fallback to direct Calendly URL if webhook fails
      window.open('https://calendly.com/d/cw2x-p5n-5rf/30-ai-automation-consultation', '_blank', 'noopener,noreferrer');
    }
  } catch (error) {
    // Fallback to direct Calendly URL if webhook fails
    window.open('https://calendly.com/d/cw2x-p5n-5rf/30-ai-automation-consultation', '_blank', 'noopener,noreferrer');
  }
};

const handleNavigation = (sectionId: string) => {
  // Check if we're on the home page
  if (window.location.pathname === '/') {
    // On home page, scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    // On other pages, navigate to home page with section
    window.location.href = `/#${sectionId}`;
  }
};

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
            <a href="#how-it-works" onClick={(e) => {
              e.preventDefault();
              handleNavigation('how-it-works');
            }} className="text-gray-600 hover:text-gray-900 transition-colors">How It Works</a>
            <a href="#benefits" onClick={(e) => {
              e.preventDefault();
              handleNavigation('benefits');
            }} className="text-gray-600 hover:text-gray-900 transition-colors">Benefits</a>
            <a href="#testimonials" onClick={(e) => {
              e.preventDefault();
              handleNavigation('testimonials');
            }} className="text-gray-600 hover:text-gray-900 transition-colors">Testimonials</a>
            <a href="#about" onClick={(e) => {
              e.preventDefault();
              handleNavigation('about');
            }} className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <a href="#contact" onClick={(e) => {
              e.preventDefault();
              handleNavigation('contact');
            }} className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleBookConsultation}
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
                <a href="#how-it-works" onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('how-it-works');
                }} className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors">How It Works</a>
                <a href="#benefits" onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('benefits');
                }} className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors">Benefits</a>
                <a href="#testimonials" onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('testimonials');
                }} className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors">Testimonials</a>
                <a href="#about" onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('about');
                }} className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors">About</a>
                <a href="#contact" onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('contact');
                }} className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors">Contact</a>
                <div className="pt-4 border-t">
                  <Button 
                    variant="outline" 
                    className="w-full mb-3"
                    onClick={handleBookConsultation}
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
