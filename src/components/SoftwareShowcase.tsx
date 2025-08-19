import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, BarChart3, PieChart, TrendingUp, Calendar } from "lucide-react";
import softwareDashboard from "@/assets/software-dashboard.jpg";

const SoftwareShowcase = () => {
  return (
    <section id="software" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            Our Proprietary Bookkeeping Software
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
            Built from years of experience, our custom software provides real-time insights, 
            automated workflows, and comprehensive reporting that puts you in control.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              See It In Action
            </h3>
            <p className="text-lg mb-6 text-text-light leading-relaxed">
              Watch how our software simplifies complex financial tasks, automates routine 
              processes, and provides crystal-clear insights into your business performance.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <BarChart3 className="w-5 h-5 text-primary" />
                <span className="text-foreground">Real-time financial dashboards</span>
              </div>
              <div className="flex items-center space-x-3">
                <PieChart className="w-5 h-5 text-accent" />
                <span className="text-foreground">Automated expense categorization</span>
              </div>
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-foreground">Predictive cash flow analysis</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-accent" />
                <span className="text-foreground">Tax deadline reminders</span>
              </div>
            </div>
            
            <Button variant="hero" size="lg">
              Schedule Software Demo
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-medium">
              <img 
                src={softwareDashboard} 
                alt="FamilyBooks Pro software dashboard" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                <div className="bg-primary/90 text-primary-foreground p-6 rounded-full">
                  <Play className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 text-center shadow-soft">
            <div className="text-3xl font-bold text-primary mb-2">2min</div>
            <div className="text-sm text-text-light">Monthly report generation</div>
          </Card>
          <Card className="p-6 text-center shadow-soft">
            <div className="text-3xl font-bold text-accent mb-2">95%</div>
            <div className="text-sm text-text-light">Time savings on data entry</div>
          </Card>
          <Card className="p-6 text-center shadow-soft">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-text-light">Cloud access anywhere</div>
          </Card>
          <Card className="p-6 text-center shadow-soft">
            <div className="text-3xl font-bold text-accent mb-2">100%</div>
            <div className="text-sm text-text-light">Data security guaranteed</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SoftwareShowcase;