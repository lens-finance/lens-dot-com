import { createFileRoute } from '@tanstack/react-router'
import { Button } from '../components/ui/button'
import { SectionContainer } from '../components/ui/container'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Background gradient */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[500px] bg-gradient-to-br from-primary/20 to-transparent opacity-50 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-primary to-[oklch(0.75_0.18_175)] bg-clip-text text-transparent">
              Lens Finance
            </span>
            <span className="block mt-3">Your Financial Journey in Focus</span>
          </h1>
          
          <p className="text-xl text-foreground/80 max-w-2xl mb-8 animate-fade-in animate-delay-100">
            Connect with your finances through natural language. Get insights, track spending, and make informed decisions with our powerful MCP server.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-200">
            <Button variant="gradient" size="lg" className="min-w-40">
              <a href="https://app.lens-finance.com/signup" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
            {/* TODO: build demo environment 
            <Button variant="outline" size="lg" className="min-w-40">
              View Demo
            </Button> */}
          </div>
          
          <div className="mt-20 relative w-full max-w-4xl mx-auto animate-fade-in animate-delay-300">
            <div className="relative bg-card border border-border shadow-xl">
              <div className="absolute top-4 left-0 right-0 flex items-center justify-start px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/80"></div>
                  <div className="w-3 h-3 rounded-full bg-primary/30"></div>
                  <div className="w-3 h-3 rounded-full bg-primary/80"></div>
                </div>
              </div>
              <div className="p-4 pt-10 font-mono text-sm overflow-hidden">
                <div className="flex">
                  <span className="text-primary">$</span>
                  <span className="ml-2 typing-animation">
                    Tell me about my recent spending in restaurants
                  </span>
                </div>
                <div className="mt-4 pl-4 border-l-2 border-primary/30 text-left">
                  <p className="text-foreground/90 mb-2">
                    I analyzed your last 30 days of transactions:
                  </p>
                  <ul className="space-y-1 text-foreground/70">
                    <li>➤ You spent <span className="text-primary">$342.18</span> across 8 restaurant visits</li>
                    <li>➤ This is <span className="text-primary">18%</span> lower than your previous month</li>
                    <li>➤ Your most frequent restaurant was <span className="text-primary">Bistro Central</span> (3 visits)</li>
                    <li>➤ Your largest single expense was <span className="text-primary">$86.45</span> at Harbour Grill</li>
                  </ul>
                  <p className="mt-3 text-foreground/90">
                    Would you like to see a breakdown by cuisine type or set a budget for dining out?
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 blur-2xl rounded-full"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 blur-xl rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <SectionContainer className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Powerful Financial Intelligence</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Our MCP server provides you with intelligent insights and powerful tools to manage your financial health.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featureCards.map((feature, index) => (
            <div key={index} className="bg-card border border-border p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Pricing Plans Section */}
      <SectionContainer className="bg-card border-y border-border">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Choose the plan that's right for you with unlimited chat queries on our Pro plan.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="border border-border p-8 md:w-80">
            <div className="mb-4 font-medium text-primary/80">Free</div>
            <h3 className="text-3xl font-bold mb-2">$0</h3>
            <p className="text-foreground/70 mb-6">Perfect for trying out Lens Finance</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <CheckIcon className="mr-2 text-primary" /> 10 chat queries per month
              </li>
              <li className="flex items-center">
                <CheckIcon className="mr-2 text-primary" /> Basic financial queries
              </li>
              <li className="flex items-center">
                <CheckIcon className="mr-2 text-primary" /> Connect up to 3 accounts
              </li>
            </ul>
            <Button variant="outline" className="w-full"><a href="https://app.lens-finance.com/signup" target="_blank" rel="noopener noreferrer">Get Started Free</a></Button>
          </div>

          <div className="relative border border-primary p-8 md:w-80 bg-secondary">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-medium">
              Popular
            </div>
            <div className="mb-4 font-medium text-primary">Pro</div>
            <h3 className="text-3xl font-bold mb-2">$5</h3>
            <p className="text-foreground/70 mb-6">For businesses and power users</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <CheckIcon className="mr-2 text-primary" /> <strong className="text-primary">Unlimited chat queries</strong> 
              </li>
              <li className="flex items-center">
                <CheckIcon className="mr-2 text-primary" /> <strong className="text-primary">Advanced financial queries</strong>
              </li>
              <li className="flex items-center">
                <CheckIcon className="mr-2 text-primary" /> <strong className="text-primary">Unlimited accounts</strong>
              </li>
              <li className="flex items-center">
                <CheckIcon className="mr-2 text-primary" /> <strong className="text-primary">Priority support</strong>
              </li>
            </ul>
            <Button variant="gradient" className="w-full"><a href="https://app.lens-finance.com/signup" target="_blank" rel="noopener noreferrer">Upgrade to Pro</a></Button>
          </div>
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <SectionContainer className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to gain clarity on your finances?</h2>
        <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
          Join thousands of users who are transforming their financial journey with Lens Finance.
        </p>
        <Button variant="gradient" size="lg" className="min-w-44"><a href="https://app.lens-finance.com/signup" target="_blank" rel="noopener noreferrer">Get Started Now</a></Button>
      </SectionContainer>
    </div>
  )
}

// Feature cards data
const featureCards = [
  {
    title: 'Natural Language Queries',
    description: 'Ask questions about your finances in plain English and get insightful answers instantly.'
  },
  {
    title: 'Spending Analysis',
    description: 'Automatically categorize and analyze your spending habits to identify trends and opportunities.'
  },
  {
    title: 'Financial Insights',
    description: 'Get personalized insights and recommendations to improve your financial health.'
  },
  {
    title: 'Secure Connection',
    description: 'Your financial data is encrypted end-to-end and never stored on our servers.'
  },
  {
    title: 'Real-time Updates',
    description: 'Connect to your financial institutions for real-time transaction updates and analysis.'
  },
  {
    title: 'Cross-platform Access',
    description: 'Access your financial dashboard from any device, anytime, anywhere.'
  }
]

// Check icon component
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="square" 
      strokeLinejoin="miter"
      className={className}
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  )
}
