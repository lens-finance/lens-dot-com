import { createFileRoute } from '@tanstack/react-router'
import { SectionContainer } from '../../components/ui/container'
import { Button } from '../../components/ui/button'

export const Route = createFileRoute('/about/')({
  component: AboutPage,
})

function AboutPage() {
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
            About Lens Finance
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8 animate-fade-in animate-delay-100">
            We're building the future of financial intelligence with advanced MCP technology.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <SectionContainer>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-foreground/80 mb-4">
              At Lens Finance, we believe that everyone deserves clear insight into their financial life. We're on a mission to demystify personal finance by using cutting-edge artificial intelligence to make financial data accessible, understandable, and actionable.
            </p>
            <p className="text-foreground/80 mb-4">
              Our Model Context Protocol (MCP) server technology represents a breakthrough in how people can interact with their financial data. By enabling natural language conversations about your finances, we're creating a more intuitive way to understand your money.
            </p>
            <p className="text-foreground/80">
              We're committed to building tools that empower individuals and businesses to make better financial decisions through transparent, insightful, and personalized financial intelligence.
            </p>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-card border border-border p-10 relative z-10">
              <div className="text-4xl font-bold text-primary mb-6">
                "Financial clarity through conversation."
              </div>
              <div className="text-foreground/70 italic">
                Our guiding principle is to make financial intelligence accessible to everyone through natural language.
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/5 -z-10"></div>
          </div>
        </div>
      </SectionContainer>


      {/* Our Technology */}
      <SectionContainer>
        <h2 className="text-3xl font-bold mb-6 text-center">Our Technology</h2>
        <p className="text-foreground/80 max-w-3xl mx-auto text-center mb-12">
          Lens Finance is built on our proprietary MCP (Model Context Protocol) server technology, which enables sophisticated, context-aware conversations about financial data.
        </p>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="border border-border p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5">
            <h3 className="text-xl font-semibold mb-3">Advanced NLP Engine</h3>
            <p className="text-foreground/80 mb-4">
              Our natural language processing engine understands complex financial queries, context, and user intent to provide accurate, helpful responses.
            </p>
            <ul className="space-y-2 text-foreground/70">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Contextual understanding of financial terminology</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Memory of previous conversations for meaningful follow-ups</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Custom-trained on financial data patterns</span>
              </li>
            </ul>
          </div>
          
          <div className="border border-border p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5">
            <h3 className="text-xl font-semibold mb-3">Security First Architecture</h3>
            <p className="text-foreground/80 mb-4">
              Our platform is built with security at its core, ensuring that your sensitive financial data is always protected.
            </p>
            <ul className="space-y-2 text-foreground/70">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>End-to-end encryption for all data transfers (TODO)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>SOC 2 Type II compliant infrastructure (TODO)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Zero persistent storage of financial credentials (TODO)</span>
              </li>
            </ul>
          </div>
          
          <div className="border border-border p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5">
            <h3 className="text-xl font-semibold mb-3">Financial Data Integration</h3>
            <p className="text-foreground/80 mb-4">
              Seamlessly connect to thousands of financial institutions for comprehensive financial analysis.
            </p>
            <ul className="space-y-2 text-foreground/70">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>10,000+ supported financial institutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Real-time data synchronization</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Intelligent transaction categorization</span>
              </li>
            </ul>
          </div>
          
          <div className="border border-border p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5">
            <h3 className="text-xl font-semibold mb-3">Financial Intelligence System</h3>
            <p className="text-foreground/80 mb-4">
              Our analytics engine provides personalized insights and recommendations based on your financial patterns.
            </p>
            <ul className="space-y-2 text-foreground/70">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Predictive financial forecasting</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Anomaly detection for unusual spending</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Personalized optimization recommendations</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* Our Values */}
      <SectionContainer className="bg-card border-y border-border">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="p-6 border border-border transition-all duration-300 hover:border-primary/30">
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-foreground/70">{value.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Contact Section */}
      <SectionContainer className="text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-foreground/80 max-w-2xl mx-auto mb-8">
          Have questions about Lens Finance? We'd love to hear from you. Reach out to our team for more information.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="gradient" size="lg">Contact Us</Button>
          <Button variant="outline" size="lg">Join Our Newsletter</Button>
        </div>
      </SectionContainer>
    </div>
  )
}

// Company values
const values = [
  {
    title: "Transparency",
    description: "We believe in complete transparency in how we handle your data and how our technology works."
  },
  {
    title: "Security",
    description: "We maintain the highest standards of security to protect your sensitive financial information."
  },
  {
    title: "Accessibility",
    description: "We're committed to making financial intelligence accessible to people of all backgrounds."
  },
  {
    title: "Innovation",
    description: "We continuously push the boundaries of what's possible with financial technology."
  },
  {
    title: "Empowerment",
    description: "We build tools that empower individuals to take control of their financial future."
  },
  {
    title: "Sustainability",
    description: "We're building a sustainable business that balances innovation with responsible growth."
  }
];