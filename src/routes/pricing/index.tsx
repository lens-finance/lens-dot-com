import { createFileRoute } from '@tanstack/react-router'
import { SectionContainer } from '../../components/ui/container'
import { Button } from '../../components/ui/button'
import { useState } from 'react'

export const Route = createFileRoute('/pricing/')({
  component: PricingPage,
})

function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly')

  return (
    <div className="flex flex-col pt-24">
      {/* Hero Section */}
      <section className="relative py-16">
        {/* Background gradient */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[300px] bg-gradient-to-br from-primary/20 to-transparent opacity-50 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8 animate-fade-in animate-delay-100">
            Choose the plan that's right for you. Start with our free tier or upgrade for more API credits and premium features.
          </p>
        </div>
      </section>

      {/* Pricing Toggle */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex items-center bg-card border border-border p-1">
          <button
            onClick={() => setBillingPeriod('monthly')}
            className={`px-4 py-2 text-sm transition-all ${
              billingPeriod === 'monthly'
                ? 'bg-primary text-primary-foreground'
                : 'text-foreground/70 hover:text-foreground'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingPeriod('yearly')}
            className={`px-4 py-2 text-sm transition-all ${
              billingPeriod === 'yearly'
                ? 'bg-primary text-primary-foreground'
                : 'text-foreground/70 hover:text-foreground'
            }`}
          >
            Yearly
            <span className="ml-1 text-xs inline-block bg-secondary text-secondary-foreground px-1.5 py-0.5">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <SectionContainer className="py-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Tier */}
          <div className="border border-border bg-card flex flex-col h-full transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
            <div className="p-8 border-b border-border">
              <div className="mb-4 text-lg font-medium text-primary">Free</div>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-foreground/60 ml-1">/ forever</span>
              </div>
              <p className="text-foreground/70">
                Perfect for trying out Lens Finance and small projects
              </p>
            </div>
            <div className="p-8 flex-grow">
              <h3 className="text-xl font-semibold mb-4">What's included:</h3>
              <ul className="space-y-4 mb-8">
                <PricingFeature included>
                  <strong className="text-primary">10</strong> chat queries per month
                </PricingFeature>
                <PricingFeature included>
                  Basic financial queries
                </PricingFeature>
                <PricingFeature included>
                  Connect up to 3 financial accounts
                </PricingFeature>
                <PricingFeature included>
                  Standard response time
                </PricingFeature>
                <PricingFeature included>
                  Basic reporting features
                </PricingFeature>
                <PricingFeature>
                  Advanced analytics
                </PricingFeature>
                <PricingFeature>
                  Custom categories
                </PricingFeature>
                <PricingFeature>
                  Priority support
                </PricingFeature>
              </ul>
              <Button variant="outline" className="w-full"><a href="https://app.lens-finance.com/signup" target="_blank" rel="noopener noreferrer">
                Get Started Free
              </a></Button>
            </div>
          </div>

          {/* Pro Tier */}
          <div className="relative border border-primary bg-secondary flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-medium">
              Popular
            </div>
            <div className="p-8 border-b border-border">
              <div className="mb-4 text-lg font-medium text-primary">Pro</div>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold">
                  {billingPeriod === 'monthly' ? '$5' : '$50'}
                </span>
                <span className="text-foreground/60 ml-1">
                  / {billingPeriod === 'monthly' ? 'month' : 'year'}
                </span>
              </div>
              <p className="text-foreground/70">
                For businesses and power users who need more capabilities
              </p>
            </div>
            <div className="p-8 flex-grow">
              <h3 className="text-xl font-semibold mb-4">What's included:</h3>
              <ul className="space-y-4 mb-8">
                <PricingFeature included>
                  <strong className="text-primary">Unlimited chat queries per month</strong> 
                </PricingFeature>
                <PricingFeature included>
                  <strong className="text-primary">Advanced financial queries</strong>
                </PricingFeature>
                <PricingFeature included>
                  <strong className="text-primary">Connect unlimited financial accounts</strong>
                </PricingFeature>
                <PricingFeature included>
                  <strong className="text-primary">Priority response time</strong>
                </PricingFeature>
                <PricingFeature included>
                  Advanced reporting and exports
                </PricingFeature>
                <PricingFeature included>
                  Advanced analytics and predictions
                </PricingFeature>
                <PricingFeature included>
                  Custom categories and tagging
                </PricingFeature>
                <PricingFeature included>
                  Priority support
                </PricingFeature>
              </ul>
              <Button variant="gradient" className="w-full"><a href="https://app.lens-finance.com/signup" target="_blank" rel="noopener noreferrer">
                Upgrade to Pro
              </a></Button>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Chat Queries Explanation */}
      <SectionContainer className="bg-card border-y border-border mt-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Understanding Chat Queries</h2>
          
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">What is a chat query?</h3>
                <p className="text-foreground/80">
                  A chat query is any question you ask our Lens Finance assistant about your finances.
                  Each conversation you start with our AI counts as one query.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Types of queries you can make</h3>
                <p className="text-foreground/80 mb-3">
                  You can ask our assistant about:
                </p>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Account balances and recent transactions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Spending patterns and budget analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Financial advice and planning assistance</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">When do queries reset?</h3>
                <p className="text-foreground/80">
                  Your available queries reset at the beginning of each billing period. Unused queries do not roll over.
                  For annual plans, you get fresh queries each month (not all at once).
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer>
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-foreground/70">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Enterprise Section */}
      <SectionContainer className="bg-gradient-to-r from-secondary to-secondary/50 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
            Our enterprise plans offer customized solutions for larger organizations with specific requirements.
          </p>
          <Button variant="gradient" size="lg">Contact Sales</Button>
        </div>
      </SectionContainer>
    </div>
  )
}

function PricingFeature({ 
  children, 
  included = false 
}: { 
  children: React.ReactNode; 
  included?: boolean 
}) {
  return (
    <li className="flex items-start">
      {included ? (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="square" 
          strokeLinejoin="miter"
          className="text-primary mr-2 flex-shrink-0 mt-0.5"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      ) : (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="square" 
          strokeLinejoin="miter"
          className="text-muted-foreground mr-2 flex-shrink-0 mt-0.5"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      )}
      <span className={included ? 'text-foreground' : 'text-muted-foreground'}>
        {children}
      </span>
    </li>
  )
}

const faqs = [
  {
    question: "Can I upgrade or downgrade my plan at any time?",
    answer: "Yes, you can upgrade your plan at any time. When upgrading, you'll be charged the prorated amount for the remainder of your billing period. Downgrades will take effect at the end of your current billing period."
  },
  {
    question: "What happens if I use all my chat queries?",
    answer: "If you use all your allocated chat queries before the end of your billing period, you'll need to upgrade to our Pro plan for unlimited queries or wait until your queries reset at the beginning of your next billing period."
  },
  {
    question: "Is there a limit to how many financial accounts I can connect?",
    answer: "Free users can connect up to 3 financial accounts. Pro users can connect unlimited accounts from our supported financial institutions."
  },
  {
    question: "Do you offer discounts for startups or non-profits?",
    answer: "Yes, we offer special pricing for eligible startups, educational institutions, and non-profit organizations. Please contact our sales team for more information."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. For enterprise plans, we also support invoicing and payment by ACH or wire transfer."
  },
  {
    question: "Is there a free trial for the Pro plan?",
    answer: "Yes, you can try the Pro plan for 14 days. No credit card required. After the trial period, you can choose to subscribe or continue using the Free plan."
  }
]