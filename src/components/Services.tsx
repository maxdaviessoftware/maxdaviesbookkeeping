import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calculator, TrendingUp, Shield, Clock, RefreshCw } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Monthly Bookkeeping",
      description: "Complete monthly financial records with detailed categorisation and reconciliation.",
      features: ["Bank reconciliation", "Expense tracking", "Invoice management", "Financial statements"]
    },
    {
      icon: TrendingUp,
      title: "Financial Analysis",
      description: "Deep insights into your business performance with actionable recommendations.",
      features: ["Cash flow analysis", "Profit optimisation", "Budget planning", "Growth strategies"]
    },
    {
      icon: RefreshCw,
      title: "Sync with other software",
      description: "Max Davies Software provides other software to integrate with Bookkeeping functions.",
      features: ["Sales Tracking", "Timesheets", "Commission calculations", "Forecasting"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            Comprehensive Bookkeeping Services
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
            From day-to-day bookkeeping to strategic financial planning, we provide 
            the complete suite of services your business needs to thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {services.map((service, index) => (
            <Card key={index} className="p-8 shadow-medium border border-border/50 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-hero-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-text-light leading-relaxed">{service.description}</p>
              </div>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="bg-primary rounded-2xl p-8 lg:p-12 text-center shadow-medium">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-primary-foreground">
              Why Choose Our Family Business?
            </h3>
            <p className="text-lg mb-8 text-primary-foreground/90 leading-relaxed">
              We understand that your business is more than numbers—it's your livelihood, 
              your passion, and your legacy. That's why we treat every client like family.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="flex flex-col items-center space-y-3">
                <Shield className="w-8 h-8 text-accent" />
                <div className="text-primary-foreground">
                  <div className="font-semibold">Bank-Level Security</div>
                  <div className="text-sm text-primary-foreground/80">Your data is always protected</div>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <Clock className="w-8 h-8 text-accent" />
                <div className="text-primary-foreground">
                  <div className="font-semibold">24-Hour Response</div>
                  <div className="text-sm text-primary-foreground/80">We're here when you need us</div>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <TrendingUp className="w-8 h-8 text-accent" />
                <div className="text-primary-foreground">
                  <div className="font-semibold">Proven Results</div>
                  <div className="text-sm text-primary-foreground/80">Decades of success</div>
                </div>
              </div>
            </div>
            
            <Button 
              variant="accent" 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => window.open('https://calendly.com/maxdavies236/bookkeeping-software-meeting-with-max-davies-clone', '_blank')}
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;