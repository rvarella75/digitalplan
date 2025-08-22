"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Calendar, CheckCircle, Star, FileText, Zap, Users } from "lucide-react"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="content-container py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Success Message */}
          <div className="mb-12">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Your personalized plan is on the way!</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We&apos;ve analyzed your business needs and created a comprehensive digital transformation roadmap tailored specifically for you.
            </p>
            <p className="text-sm text-gray-500 mt-4 max-w-2xl mx-auto font-semibold">
              If you don&apos;t receive the email within 5 minutes, please check your spam folder.
            </p>
          </div>

          {/* Plan Overview */}
          <Card className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">What's included in your plan:</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start space-x-3">
                  <FileText className="h-6 w-6 text-blue-600 mt-1" />
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900">Detailed Roadmap</h3>
                    <p className="text-sm text-gray-600">Step-by-step implementation guide with timelines and milestones</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="h-6 w-6 text-green-600 mt-1" />
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900">Tool Recommendations</h3>
                    <p className="text-sm text-gray-600">Curated list of digital tools and platforms for your specific needs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-purple-600 mt-1" />
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900">Expert Insights</h3>
                    <p className="text-sm text-gray-600">Best practices and strategies from successful transformations</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex justify-center mb-12">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              onClick={async () => {
                try {
                  const response = await fetch('https://n8n.profutureconsulting.com/webhook/98b94774-0b06-404c-90bd-30a71b1001ed', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({})
                  });
                  
                  if (response.ok) {
                    const data = await response.json();
                    if (data.URL) {
                      window.open(data.URL, '_blank', 'noopener,noreferrer');
                    }
                  } else {
                    window.open('https://calendly.com/d/cw2x-p5n-5rf/30-ai-automation-consultation', '_blank', 'noopener,noreferrer');
                  }
                } catch {
                  window.open('https://calendly.com/d/cw2x-p5n-5rf/30-ai-automation-consultation', '_blank', 'noopener,noreferrer');
                }
              }}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Free Consultation
            </Button>
          </div>

          {/* Next Steps */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">What happens next?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Review your plan</h3>
                    <p className="text-gray-600">Take time to go through your personalized roadmap and understand the recommended steps.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Schedule a consultation</h3>
                    <p className="text-gray-600">Book a free 30-minute call with our experts to discuss your plan and answer any questions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Start implementing</h3>
                    <p className="text-gray-600">Begin with the first phase of your transformation journey with our ongoing support.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial */}
          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
              </div>
              <blockquote className="text-lg text-gray-700 italic text-center mb-4">
                &ldquo;ProFuture&apos;s digital transformation plan gave us a clear roadmap that we could actually implement. Within 3 months, we automated 60% of our manual processes.&rdquo;
              </blockquote>
              <div className="text-center">
                <p className="font-semibold text-gray-900">Sarah Johnson</p>
                <p className="text-sm text-gray-600">CEO, TechStart Solutions</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
