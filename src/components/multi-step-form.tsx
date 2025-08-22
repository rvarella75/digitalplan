"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, ArrowRight, CheckCircle, Loader2 } from "lucide-react"

interface FormData {
  // Step 1: Business Profile
  industry: string
  employeeCount: string
  revenueRange: string
  
  // Step 2: Digital Setup
  digitalTools: string[]
  digitalMaturity: number
  
  // Step 3: Pain Points & Goals
  painPoints: string
  businessGoal: string
  otherGoal: string
  
  // Step 4: Budget & Readiness
  budgetRange: string
  timeline: string
  
  // Step 5: Contact Info
  name: string
  email: string
  phone: string
  companyName: string
  emailConsent: boolean
}

export function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isEmailValid, setIsEmailValid] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    industry: "",
    employeeCount: "",
    revenueRange: "",
    digitalTools: [],
    digitalMaturity: 3,
    painPoints: "",
    businessGoal: "",
    otherGoal: "",
    budgetRange: "",
    timeline: "",
    name: "",
    email: "",
    phone: "",
    companyName: "",
    emailConsent: false
  })

  const updateFormData = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Check email validity when email field is updated
    if (field === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      setIsEmailValid(emailRegex.test(value))
    }
  }

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    // Validate required fields
    if (!formData.companyName.trim()) {
      alert('Please enter your company name.')
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Prepare the data for submission
      const submissionData = {
        full_name: formData.name,
        company_name: formData.companyName,
        email: formData.email,
        phone_number: formData.phone,
        industry: formData.industry,
        employee_count: formData.employeeCount,
        annual_revenue: formData.revenueRange,
        current_tools: formData.digitalTools.join(', '),
        pain_points: formData.painPoints,
        business_goals: formData.businessGoal === 'other' ? formData.otherGoal : formData.businessGoal,
        digital_maturity: formData.digitalMaturity,
        budget: formData.budgetRange,
        implementation_timeline: formData.timeline,
        marketing_opt_in: formData.emailConsent
      }

      // Submit to n8n webhook
      const response = await fetch('https://n8n.profutureconsulting.com/webhook/bbc6370a-d7d2-4ed3-8367-be26b55dcdef', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      // Redirect to thank you page on success
      window.location.href = '/thank-you'
    } catch (error) {
      // Log error for monitoring (remove in production if not needed)
      console.error('Form submission error:', error)
      // Show user-friendly error message
      alert('There was an error submitting your form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="industry">What industry is your business in?</Label>
              <Select value={formData.industry} onValueChange={(value) => updateFormData('industry', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="retail">Retail & E-commerce</SelectItem>
                  <SelectItem value="services">Professional Services</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="food">Food & Beverage</SelectItem>
                  <SelectItem value="construction">Construction</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>How many employees do you have?</Label>
              <RadioGroup value={formData.employeeCount} onValueChange={(value) => updateFormData('employeeCount', value)} className="mt-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1-10" id="emp1" />
                  <Label htmlFor="emp1">1-10 employees</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="11-50" id="emp2" />
                  <Label htmlFor="emp2">11-50 employees</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="51-200" id="emp3" />
                  <Label htmlFor="emp3">51-200 employees</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="200+" id="emp4" />
                  <Label htmlFor="emp4">200+ employees</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="revenue">Annual Revenue Range</Label>
              <Select value={formData.revenueRange} onValueChange={(value) => updateFormData('revenueRange', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select revenue range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="<250k">Less than $250K</SelectItem>
                  <SelectItem value="250k-1m">$250K - $1M</SelectItem>
                  <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                  <SelectItem value="5m+">$5M+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <Label>Which digital tools do you currently use?</Label>
              <div className="mt-2 space-y-3">
                {[
                  "Company Website",
                  "Social Media (Instagram, Facebook, LinkedIn, etc.)",
                  "Online Store (Shopify, WooCommerce, etc.)",
                  "CRM (HubSpot, Zoho, Salesforce, etc.)",
                  "Accounting Software (QuickBooks, Xero, etc.)",
                  "None / Manual processes"
                ].map((tool) => (
                  <div key={tool} className="flex items-center space-x-2">
                    <Checkbox
                      id={tool}
                      checked={formData.digitalTools.includes(tool)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          updateFormData('digitalTools', [...formData.digitalTools, tool])
                        } else {
                          updateFormData('digitalTools', formData.digitalTools.filter(t => t !== tool))
                        }
                      }}
                    />
                    <Label htmlFor={tool} className="text-sm">{tool}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label>How would you rate your current digital maturity?</Label>
              <div className="mt-2 space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Basic</span>
                  <span>Advanced</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={formData.digitalMaturity}
                  onChange={(e) => updateFormData('digitalMaturity', parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                </div>
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="painPoints">What are your biggest business challenges?</Label>
              <Textarea
                id="painPoints"
                placeholder="Describe the main pain points you're facing..."
                value={formData.painPoints}
                onChange={(e) => updateFormData('painPoints', e.target.value)}
                className="mt-2"
                rows={4}
              />
            </div>

            <div>
              <Label htmlFor="businessGoal">What&apos;s your primary business goal?</Label>
              <Select value={formData.businessGoal} onValueChange={(value) => updateFormData('businessGoal', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your primary goal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="increase-revenue">Increase Revenue</SelectItem>
                  <SelectItem value="reduce-costs">Reduce Operational Costs</SelectItem>
                  <SelectItem value="improve-efficiency">Improve Efficiency</SelectItem>
                  <SelectItem value="expand-market">Expand Market Reach</SelectItem>
                  <SelectItem value="customer-satisfaction">Improve Customer Satisfaction</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {formData.businessGoal === 'other' && (
              <div>
                <Label htmlFor="otherGoal">Please specify your goal</Label>
                <Input
                  id="otherGoal"
                  placeholder="Describe your specific goal..."
                  value={formData.otherGoal}
                  onChange={(e) => updateFormData('otherGoal', e.target.value)}
                  className="mt-2"
                />
              </div>
            )}
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="budget">What&apos;s your budget for digital transformation?</Label>
              <Select value={formData.budgetRange} onValueChange={(value) => updateFormData('budgetRange', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="<10k">Less than $10K</SelectItem>
                  <SelectItem value="10k-25k">$10K - $25K</SelectItem>
                  <SelectItem value="25k-50k">$25K - $50K</SelectItem>
                  <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                  <SelectItem value="100k+">$100K+</SelectItem>
                  <SelectItem value="undecided">Not sure yet</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>When do you want to start implementing?</Label>
              <RadioGroup value={formData.timeline} onValueChange={(value) => updateFormData('timeline', value)} className="mt-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="immediately" id="time1" />
                  <Label htmlFor="time1">Immediately (within 1 month)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="3months" id="time2" />
                  <Label htmlFor="time2">Within 3 months</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="6months" id="time3" />
                  <Label htmlFor="time3">Within 6 months</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="planning" id="time4" />
                  <Label htmlFor="time4">Just planning for now</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => updateFormData('name', e.target.value)}
                  className="mt-2"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className="mt-2"
                  required
                />
                <p className="text-sm text-gray-500 mt-1">Download link will be sent to this email</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="company">Company Name *</Label>
                <Input
                  id="company"
                  placeholder="Enter your company name"
                  value={formData.companyName}
                  onChange={(e) => updateFormData('companyName', e.target.value)}
                  className="mt-2"
                  required
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="emailConsent"
                checked={formData.emailConsent}
                onCheckedChange={(checked) => updateFormData('emailConsent', checked)}
              />
              <Label htmlFor="emailConsent" className="text-sm">
                I agree to receive emails from ProFuture Consulting about digital transformation insights and updates
              </Label>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Step {currentStep} of 5
        </CardTitle>
        <CardDescription className="text-center">
          {currentStep === 1 && "Tell us about your business"}
          {currentStep === 2 && "Your current digital setup"}
          {currentStep === 3 && "Pain points & goals"}
          {currentStep === 4 && "Budget & timeline"}
          {currentStep === 5 && "Contact information"}
        </CardDescription>
        <Progress value={(currentStep / 5) * 100} className="mt-4" />
      </CardHeader>
      <CardContent className="space-y-6">
        {renderStep()}
        
        <Separator />
        
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          
          {currentStep < 5 ? (
            <Button onClick={nextStep} className="flex items-center">
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button 
              onClick={handleSubmit} 
              disabled={isSubmitting || !isEmailValid}
              className="flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating your plan...
                </>
              ) : (
                <>
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Get My Free Plan
                </>
              )}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
