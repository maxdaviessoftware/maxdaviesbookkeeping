import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="text-primary-foreground py-20 lg:py-32 relative overflow-hidden" style={{
      backgroundImage: `url('/lovable-uploads/b2511658-1bc3-402d-927f-d8bdad58b525.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>Trusted & Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Family Business</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>Custom Software</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Professional Bookkeeping
            <span className="block">with a</span>
            <span className="block text-accent-foreground">Personal Touch</span>
          </h1>
          
          <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Three generations of financial expertise, powered by our proprietary software. 
            We help businesses streamline their finances with precision and care.
          </p>
          
          <div className="mb-8">
            <div className="inline-block bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-8 py-3">
              <span className="text-2xl font-bold text-accent-foreground">Monthly prices from £45</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              variant="accent" 
              className="text-lg px-8 py-4"
              onClick={() => window.open('https://calendly.com/maxdavies236/30min', '_blank')}
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              See Our Software Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-primary-foreground/80">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">40</div>
              <div className="text-primary-foreground/80">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;