"use client"

import { MultiStepForm } from "@/components/multi-step-form"
import { Navigation } from "@/components/navigation"

export default function FormPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="content-container py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get Your Digital Transformation Plan</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tell us about your business and we'll create a personalized roadmap for your digital transformation journey.
          </p>
        </div>
        <MultiStepForm />
      </div>
    </div>
  )
}
