"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MultiStepForm } from "@/components/multi-step-form"
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { 
  ArrowRight, 
  Target, 
  TrendingUp, 
  Users, 
  ChevronRight, 
  Star, 
  Clock, 
  BarChart3, 
  Handshake,
  FileText,
  Zap,
  CheckCircle
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - 100vh with unicorn.studio background slot */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden">
        {/* unicorn.studio interactive background slot */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          {/* This div is reserved for future unicorn.studio interactive background */}
          {/* The background will be injected here by unicorn.studio */}
        </div>
        
        {/* Content overlay with gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-transparent"></div>
        
        <div className="content-container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
                Transform Your Business
                <span className="block text-blue-600">With Digital Innovation</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Get your personalized digital transformation plan in minutes—practical steps, proven approaches, and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                      Start My Plan
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogTitle className="sr-only">Digital Transformation Plan Assessment</DialogTitle>
                    <DialogDescription className="sr-only">
                      Complete this assessment to receive your personalized digital transformation plan
                    </DialogDescription>
                    <MultiStepForm />
                  </DialogContent>
                </Dialog>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6 border-gray-300 hover:bg-gray-50"
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  How It Works
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-end">
              <Image 
                src="/ElementoProFuture.png" 
                alt="ProFuture Consulting Digital Transformation" 
                width={600} 
                height={600} 
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="content-container py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get your personalized digital transformation plan in three simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl font-semibold">Tell us about your business</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Complete a short assessment about your current setup and goals.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-xl font-semibold">We generate your plan</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                AI + best-practices template creates your custom roadmap.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-xl font-semibold">Implement with confidence</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Optional consultation to help you execute effectively.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-24 bg-gray-50">
        <div className="content-container w-full">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Benefits</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Why choose ProFuture Consulting for your digital transformation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 max-w-5xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-shadow bg-blue-50/50 border-blue-100">
            <CardHeader className="pb-4">
              <div className="mx-auto w-16 h-16 md:w-20 md:h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <Target className="h-8 w-8 md:h-10 md:w-10 text-blue-600" />
              </div>
              <CardTitle className="text-xl md:text-2xl font-semibold">Personalized Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm md:text-base leading-relaxed">
                A roadmap tailored to your industry, size, and goals.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow bg-green-50/50 border-green-100">
            <CardHeader className="pb-4">
              <div className="mx-auto w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <TrendingUp className="h-8 w-8 md:h-10 md:w-10 text-green-600" />
              </div>
              <CardTitle className="text-xl md:text-2xl font-semibold">Proven Approaches</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm md:text-base leading-relaxed">
                Best practices from successful transformations across multiple industries.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow bg-purple-50/50 border-purple-100">
            <CardHeader className="pb-4">
              <div className="mx-auto w-16 h-16 md:w-20 md:h-20 bg-purple-100 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <Users className="h-8 w-8 md:h-10 md:w-10 text-purple-600" />
              </div>
              <CardTitle className="text-xl md:text-2xl font-semibold">Expert Guidance</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                Partner with consultants who help you implement effectively.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section id="trust" className="content-container py-12 md:py-16">
        <div className="text-center">
          <h3 className="text-base md:text-lg font-medium text-gray-600 mb-6 md:mb-8">Trusted by businesses using leading digital tools</h3>
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8 lg:gap-12 items-center opacity-60">
            <Image 
              src="/shopify-logo.png" 
              alt="Shopify" 
              width={120} 
              height={40} 
              className="h-5 md:h-6 lg:h-8 w-auto object-contain mx-auto"
            />
            <Image 
              src="/hubspot-logo.png" 
              alt="HubSpot" 
              width={120} 
              height={40} 
              className="h-5 md:h-6 lg:h-8 w-auto object-contain mx-auto"
            />
            <Image 
              src="/zapier-logo.png" 
              alt="Zapier" 
              width={120} 
              height={40} 
              className="h-5 md:h-6 lg:h-8 w-auto object-contain mx-auto"
            />
            <Image 
              src="/quickbooks-logo.png" 
              alt="QuickBooks" 
              width={120} 
              height={40} 
              className="h-5 md:h-6 lg:h-8 w-auto object-contain mx-auto"
            />
            <Image 
              src="/salesforce-logo.png" 
              alt="Salesforce" 
              width={120} 
              height={40} 
              className="h-5 md:h-6 lg:h-8 w-auto object-contain mx-auto"
            />
            <Image 
              src="/make-logo.png" 
              alt="Make" 
              width={120} 
              height={40} 
              className="h-5 md:h-6 lg:h-8 w-auto object-contain mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="content-container py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Testimonials</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            See what our clients say about their digital transformation journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <Card className="p-6 bg-white shadow-lg border-blue-200">
            <div className="flex items-center mb-4">
              <Image 
                src="/image-29.webp" 
                alt="Thais Varella" 
                width={48} 
                height={48} 
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">Thais Varella</p>
                <p className="text-sm text-gray-600">Operations Manager</p>
                <div className="flex text-yellow-400 mt-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
              </div>
            </div>
            <p className="text-gray-700 mb-4 italic">
              &ldquo;We were looking for a secure, accurate, and agile automation for our remote technical support system. ProFuture delivered a highly efficient solution that reduced our human labor costs and achieved all the expected results.&rdquo;
            </p>
          </Card>

          <Card className="p-6 bg-white shadow-lg border-blue-200">
            <div className="flex items-center mb-4">
              <Image 
                src="/Rectangle-2206.webp" 
                alt="Mariana Barbosa" 
                width={48} 
                height={48} 
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">Mariana Barbosa</p>
                <p className="text-sm text-gray-600">Business Owner</p>
                <div className="flex text-yellow-400 mt-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
              </div>
            </div>
            <p className="text-gray-700 mb-4 italic">
              &ldquo;ProFuture delivered exactly what we needed — automations that saved us time and made our operations much smoother.&rdquo;
            </p>
          </Card>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="content-container w-full">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why SMBs chose to work with us</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            We don&apos;t just build solutions — we partner with you for continuous improvement
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 max-w-5xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-shadow bg-blue-50/50 border-blue-100">
            <CardHeader className="pb-4">
              <div className="mx-auto w-16 h-16 md:w-20 md:h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <Clock className="h-8 w-8 md:h-10 md:w-10 text-blue-600" />
              </div>
              <CardTitle className="text-xl md:text-2xl font-semibold">Save Time Every Week</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm md:text-base leading-relaxed">
                Automate repetitive tasks to free up valuable hours for your team.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow bg-green-50/50 border-green-100">
            <CardHeader className="pb-4">
              <div className="mx-auto w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <BarChart3 className="h-8 w-8 md:h-10 md:w-10 text-green-600" />
              </div>
              <CardTitle className="text-xl md:text-2xl font-semibold">Simplify Operations</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm md:text-base leading-relaxed">
                Cut complexity so your team can focus on growth, not busywork.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow bg-purple-50/50 border-purple-100">
            <CardHeader className="pb-4">
              <div className="mx-auto w-16 h-16 md:w-20 md:h-20 bg-purple-100 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <Handshake className="h-8 w-8 md:h-10 md:w-10 text-purple-600" />
              </div>
              <CardTitle className="text-xl md:text-2xl font-semibold">Continuous Partnership</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm md:text-base leading-relaxed">
                Long-term collaboration to keep improving and growing with you.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        </div>
      </section>

            {/* CTA Band */}
      <section id="contact" className="py-16 md:py-24 flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="content-container w-full text-center">
          <Card className="w-full bg-transparent text-white border-0 shadow-none">
          <CardHeader className="space-y-4">
            <CardTitle className="text-2xl md:text-3xl lg:text-4xl font-bold">Ready to Transform Your Business?</CardTitle>
            <CardDescription className="text-blue-100 text-sm md:text-base lg:text-lg leading-relaxed">
              Small businesses like yours are already discovering the benefits of digital innovation. Start your journey today.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-blue-600 hover:bg-gray-100">
                  Get Your Free Plan Now
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogTitle className="sr-only">Digital Transformation Plan Assessment</DialogTitle>
                <DialogDescription className="sr-only">
                  Complete this assessment to receive your personalized digital transformation plan
                </DialogDescription>
                <MultiStepForm />
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
