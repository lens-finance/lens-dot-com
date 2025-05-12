import { createFileRoute } from '@tanstack/react-router'
import { SectionContainer } from '../../components/ui/container'
import { Button } from '../../components/ui/button'

export const Route = createFileRoute('/features/')({
  component: FeaturesPage,
})

function FeaturesPage() {
  return (
    <div className="flex flex-col pt-24">
      {/* Hero Section */}
      <section className="relative py-20">
        {/* Background gradient */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[300px] bg-gradient-to-br from-primary/20 to-transparent opacity-50 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Powerful Features
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8 animate-fade-in animate-delay-100">
            Discover how LENS Finance transforms your relationship with money through advanced natural language processing and financial analytics.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <SectionContainer className="py-16">
        {mainFeatures.map((feature, index) => (
          <div 
            key={index} 
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center mb-24 last:mb-0`}
          >
            <div className="md:w-1/2 flex flex-col">
              <div className="mb-3 text-primary text-2xl">{feature.icon}</div>
              <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
              <p className="text-foreground/80 mb-6">{feature.description}</p>
              <ul className="space-y-3 mb-6">
                {feature.bulletPoints.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <CheckIcon className="mr-2 text-primary mt-1 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="bg-card border border-border p-6 relative">
                <div className="absolute -top-3 left-0 right-0 flex items-center justify-start px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/80"></div>
                    <div className="w-3 h-3 rounded-full bg-primary/30"></div>
                    <div className="w-3 h-3 rounded-full bg-primary/80"></div>
                  </div>
                </div>
                <div className="pt-4 font-mono text-sm">
                  {feature.codeExample}
                </div>
              </div>
            </div>
          </div>
        ))}
      </SectionContainer>

      {/* Additional Features Grid */}
      <SectionContainer className="bg-card border-y border-border">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Additional Capabilities</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Explore the full range of tools and features that make LENS Finance the perfect solution for your financial needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {additionalFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="border border-border p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5"
            >
              <div className="text-primary mb-3 text-xl">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* API Integration */}
      <SectionContainer>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Seamless API Integration</h2>
            <p className="text-foreground/80 mb-6">
              Our robust API allows you to integrate LENS Finance's powerful financial intelligence capabilities directly into your applications. With simple endpoints and comprehensive documentation, you can add natural language financial analysis to any project.
            </p>
            <div className="space-y-4 mb-6">
              <div className="border border-border p-4">
                <h4 className="font-semibold mb-2">RESTful Endpoints</h4>
                <p className="text-foreground/70">Access financial data and insights with simple HTTP requests</p>
              </div>
              <div className="border border-border p-4">
                <h4 className="font-semibold mb-2">Webhooks</h4>
                <p className="text-foreground/70">Real-time notifications for account activities and insights</p>
              </div>
              <div className="border border-border p-4">
                <h4 className="font-semibold mb-2">SDKs Available</h4>
                <p className="text-foreground/70">Implementations for JavaScript, Python, and more</p>
              </div>
            </div>
            <Button variant="gradient">View API Documentation</Button>
          </div>
          <div className="md:w-1/2">
            <div className="bg-card border border-border p-6 font-mono text-sm">
              <div className="text-muted-foreground mb-2">// Example API request</div>
              <div className="text-primary">POST /api/v1/analyze</div>
              <div className="mt-4">
                <div className="text-muted-foreground mb-2">// Request body</div>
                <div>{`{`}</div>
                <div className="pl-4"><span className="text-primary">"query":</span> <span className="text-foreground/80">"What were my top expenses last month?"</span>,</div>
                <div className="pl-4"><span className="text-primary">"timeframe":</span> <span className="text-foreground/80">"last_30_days"</span>,</div>
                <div className="pl-4"><span className="text-primary">"account_ids":</span> [<span className="text-foreground/80">"acc_123", "acc_456"</span>]</div>
                <div>{`}`}</div>
                <div className="mt-4 text-muted-foreground mb-2">// Response</div>
                <div>{`{`}</div>
                <div className="pl-4"><span className="text-primary">"analysis":</span> {`{`}</div>
                <div className="pl-8"><span className="text-primary">"top_expenses":</span> [</div>
                <div className="pl-12">{`{ "category": "Housing", "amount": 1200.00 },`}</div>
                <div className="pl-12">{`{ "category": "Transportation", "amount": 350.75 },`}</div>
                <div className="pl-12">{`{ "category": "Dining", "amount": 285.33 }`}</div>
                <div className="pl-8">],</div>
                <div className="pl-8"><span className="text-primary">"total_spent":</span> <span className="text-foreground/80">2458.63</span>,</div>
                <div className="pl-8"><span className="text-primary">"comparison_to_previous":</span> <span className="text-foreground/80">"-5.2%"</span></div>
                <div className="pl-4">{`}`}</div>
                <div>{`}`}</div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <SectionContainer className="text-center bg-gradient-to-r from-secondary to-secondary/50 py-20">
        <h2 className="text-3xl font-bold mb-4">Ready to experience these features?</h2>
        <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
          Start using LENS Finance today and transform how you understand and manage your financial data.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="gradient" size="lg">Get Started Now</Button>
          <Button variant="outline" size="lg">View Pricing</Button>
        </div>
      </SectionContainer>
    </div>
  )
}

// Main features data
const mainFeatures = [
  {
    icon: '🔍',
    title: 'Natural Language Processing',
    description: 'Ask questions about your finances in plain English and get detailed, meaningful insights instantly.',
    bulletPoints: [
      'Query your finances with natural language',
      'Get contextual answers based on your financial history',
      'Follow-up questions for deeper insights',
      'Advanced sentiment analysis for financial advice'
    ],
    codeExample: (
      <div>
        <div className="flex items-center">
          <span className="text-primary">$</span>
          <span className="ml-2">How much did I spend on groceries last month compared to the previous month?</span>
        </div>
        <div className="mt-4 pl-4 border-l-2 border-primary/30">
          <p className="text-foreground/90 mb-2">
            Last month you spent <span className="text-primary">$487.35</span> on groceries, which is 
            <span className="text-primary"> 12.3% less</span> than the month before (<span className="text-primary">$556.00</span>).
          </p>
          <p className="mt-2 text-foreground/90 mb-2">
            Your top grocery stores were:
          </p>
          <ul className="space-y-1 text-foreground/70">
            <li>1. Whole Foods: <span className="text-primary">$221.45</span> (4 visits)</li>
            <li>2. Trader Joe's: <span className="text-primary">$156.18</span> (3 visits)</li>
            <li>3. Farmer's Market: <span className="text-primary">$109.72</span> (2 visits)</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    icon: '📊',
    title: 'Intelligent Categorization',
    description: 'Our advanced machine learning algorithms automatically categorize your transactions with incredible accuracy.',
    bulletPoints: [
      'Automatic transaction categorization',
      'Custom category creation and management',
      'Category spending trends and insights',
      'Anomaly detection for unusual spending'
    ],
    codeExample: (
      <div>
        <div className="flex items-center">
          <span className="text-primary">$</span>
          <span className="ml-2">Show me my spending categories for Q1</span>
        </div>
        <div className="mt-4 pl-4 border-l-2 border-primary/30">
          <p className="text-foreground/90 mb-3">
            Here's your Q1 spending breakdown by category:
          </p>
          <div className="space-y-2 mb-3">
            <div className="flex items-center">
              <div className="w-24 text-left text-foreground/80">Housing</div>
              <div className="flex-1 h-5 bg-secondary mx-2">
                <div className="h-full bg-primary" style={{ width: '35%' }}></div>
              </div>
              <div className="w-20 text-right text-primary">35%</div>
            </div>
            <div className="flex items-center">
              <div className="w-24 text-left text-foreground/80">Food</div>
              <div className="flex-1 h-5 bg-secondary mx-2">
                <div className="h-full bg-primary" style={{ width: '22%' }}></div>
              </div>
              <div className="w-20 text-right text-primary">22%</div>
            </div>
            <div className="flex items-center">
              <div className="w-24 text-left text-foreground/80">Transport</div>
              <div className="flex-1 h-5 bg-secondary mx-2">
                <div className="h-full bg-primary" style={{ width: '18%' }}></div>
              </div>
              <div className="w-20 text-right text-primary">18%</div>
            </div>
            <div className="flex items-center">
              <div className="w-24 text-left text-foreground/80">Shopping</div>
              <div className="flex-1 h-5 bg-secondary mx-2">
                <div className="h-full bg-primary" style={{ width: '15%' }}></div>
              </div>
              <div className="w-20 text-right text-primary">15%</div>
            </div>
            <div className="flex items-center">
              <div className="w-24 text-left text-foreground/80">Other</div>
              <div className="flex-1 h-5 bg-secondary mx-2">
                <div className="h-full bg-primary" style={{ width: '10%' }}></div>
              </div>
              <div className="w-20 text-right text-primary">10%</div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: '📈',
    title: 'Predictive Analytics',
    description: 'Look ahead with our predictive models that forecast your financial future based on your spending patterns.',
    bulletPoints: [
      'Cash flow predictions',
      'Budget forecasting',
      'Savings goal projections',
      'Expense trend analysis'
    ],
    codeExample: (
      <div>
        <div className="flex items-center">
          <span className="text-primary">$</span>
          <span className="ml-2">Can I afford a $2500 vacation in August?</span>
        </div>
        <div className="mt-4 pl-4 border-l-2 border-primary/30">
          <p className="text-foreground/90 mb-3">
            Based on your current finances and spending patterns:
          </p>
          <div className="text-foreground/90 mb-2">
            <span className="text-primary font-semibold">✓ Yes</span>, a $2500 vacation in August appears affordable.
          </div>
          <p className="text-foreground/70 mb-2">
            Your predicted account balance in August will be approximately <span className="text-primary">$8,750</span> after regular expenses.
          </p>
          <p className="text-foreground/70 mb-2">
            To ensure this vacation doesn't impact your financial goals, I recommend:
          </p>
          <ul className="space-y-1 text-foreground/70 mb-3">
            <li>• Saving an extra <span className="text-primary">$417/month</span> for the next 6 months</li>
            <li>• Reducing dining out by <span className="text-primary">15%</span> until August</li>
          </ul>
        </div>
      </div>
    )
  }
];

// Additional features data
const additionalFeatures = [
  {
    icon: '🔐',
    title: 'Bank-Level Security',
    description: 'End-to-end encryption and secure authentication protocols protect your financial data.'
  },
  {
    icon: '🔄',
    title: 'Real-Time Sync',
    description: 'Connect to thousands of financial institutions for up-to-the-minute transaction data.'
  },
  {
    icon: '🖥️',
    title: 'Multi-Platform Access',
    description: 'Access your financial dashboard from any device with our responsive web interface.'
  },
  {
    icon: '📱',
    title: 'Mobile App Integration',
    description: 'Seamlessly integrate with our mobile apps for iOS and Android for on-the-go access.'
  },
  {
    icon: '📊',
    title: 'Custom Reports',
    description: 'Generate detailed financial reports tailored to your specific needs and requirements.'
  },
  {
    icon: '🔔',
    title: 'Smart Alerts',
    description: 'Receive notifications about unusual spending, upcoming bills, and financial opportunities.'
  },
  {
    icon: '🏦',
    title: 'Multi-Account Management',
    description: 'Manage all your accounts from different financial institutions in one centralized dashboard.'
  },
  {
    icon: '📝',
    title: 'Transaction Notes',
    description: 'Add custom notes and tags to transactions for better organization and tracking.'
  },
  {
    icon: '⚙️',
    title: 'Customizable Dashboard',
    description: 'Personalize your financial dashboard to focus on the metrics that matter most to you.'
  }
];

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