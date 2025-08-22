# Digital Transformation Plan Lead Magnet App

A modern, responsive web application built with Next.js 15 and shadcn/ui that helps businesses generate personalized digital transformation plans through an interactive multi-step form.

## 🚀 Features

### Landing Page
- **Hero Section**: Compelling headline with clear value proposition
- **Value Propositions**: Three key benefits with icons and descriptions
- **Call-to-Action**: Multiple CTAs to start the assessment
- **Responsive Design**: Mobile-first approach with beautiful gradients

### Multi-Step Form
- **5-Step Assessment**: Comprehensive business evaluation
- **Progress Tracking**: Visual progress indicator
- **Form Validation**: Client-side validation with proper error handling
- **Responsive UI**: Works seamlessly on all devices

### Form Steps
1. **Business Profile**: Industry, company size, revenue
2. **Digital Setup**: Current tools and digital maturity
3. **Pain Points & Goals**: Challenges and objectives
4. **Budget & Timeline**: Implementation preferences
5. **Contact Information**: Lead capture with consent

### Thank You Page
- **Success Confirmation**: Clear completion message
- **Download Options**: Plan download and consultation booking
- **Next Steps**: Clear guidance for users
- **Social Proof**: Testimonials and trust indicators

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Form Handling**: React state management
- **Responsive Design**: Mobile-first approach

## 📁 Project Structure

```
digitalplan/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Landing page
│   │   ├── form/page.tsx         # Multi-step form
│   │   ├── thank-you/page.tsx    # Thank you page
│   │   ├── layout.tsx            # Root layout
│   │   └── globals.css           # Global styles
│   ├── components/
│   │   ├── ui/                   # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── select.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── radio-group.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── separator.tsx
│   │   │   └── label.tsx
│   │   └── navigation.tsx        # Navigation component
│   └── lib/
│       └── utils.ts              # Utility functions
├── public/                       # Static assets
├── tailwind.config.ts           # Tailwind configuration
├── next.config.ts               # Next.js configuration
└── package.json                 # Dependencies
```

## 🎨 UI Components Used

### Landing Page Components
- **Card**: Hero container and value proposition cards
- **Button**: Primary and secondary CTAs
- **Typography**: Headlines and descriptions
- **Icons**: Lucide React icons for visual appeal

### Form Components
- **Card**: Form container with shadow
- **Progress**: Step progress indicator
- **Select**: Dropdown selections
- **RadioGroup**: Single choice options
- **Checkbox**: Multiple choice selections
- **Input**: Text and email fields
- **Textarea**: Long-form text input
- **Label**: Form field labels
- **Separator**: Visual dividers

### Thank You Page Components
- **Card**: Success message and content sections
- **Button**: Download and consultation CTAs
- **Typography**: Success messages and instructions
- **Icons**: Status and action icons

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd digitalplan
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 User Flow

1. **Landing Page**: User sees compelling value proposition
2. **Start Assessment**: Clicks "Start My Plan" button
3. **Multi-Step Form**: Completes 5-step assessment
4. **Form Submission**: Provides contact information
5. **Thank You Page**: Receives confirmation and next steps

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly interactions

### Accessibility
- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Screen reader compatibility

### Performance
- Next.js 15 optimizations
- Tailwind CSS purging
- Optimized images and assets
- Fast loading times

### User Experience
- Smooth transitions and animations
- Clear visual hierarchy
- Intuitive navigation
- Progress feedback

## 🔧 Customization

### Styling
- Modify `tailwind.config.ts` for theme changes
- Update `src/app/globals.css` for custom CSS variables
- Customize component styles in individual files

### Content
- Update text content in component files
- Modify form fields in `src/app/form/page.tsx`
- Customize testimonials in thank you page

### Functionality
- Add form validation logic
- Implement backend integration
- Add analytics tracking
- Customize email templates

## 📊 Form Data Structure

The form collects the following data:

```typescript
interface FormData {
  // Step 1: Business Profile
  industry: string;
  companySize: string;
  revenue: string;
  
  // Step 2: Digital Setup
  digitalTools: string[];
  digitalMaturity: number;
  
  // Step 3: Pain Points & Goals
  painPoints: string;
  businessGoal: string;
  otherGoal: string;
  
  // Step 4: Budget & Timeline
  budget: string;
  timeline: string;
  
  // Step 5: Contact Info
  name: string;
  email: string;
  phone: string;
  companyName: string;
  emailConsent: boolean;
}
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings
3. Deploy automatically on push

### Other Platforms
- **Netlify**: Configure build command and output directory
- **AWS Amplify**: Connect repository and configure build settings
- **Docker**: Use provided Dockerfile for containerized deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ using Next.js and shadcn/ui**
