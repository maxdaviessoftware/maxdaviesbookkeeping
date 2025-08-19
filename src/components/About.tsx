import { Card } from "@/components/ui/card";
import { Heart, Award, Clock } from "lucide-react";
import familyTeamImage from "@/assets/family-team.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
              About Us
            </h2>
            <p className="text-lg mb-6 text-text-light leading-relaxed">
              We're a family-run bookkeeping business with over 40 years of experience helping individuals and companies keep their finances organised, accurate, and stress-free. From the very beginning, our focus has been on building long-term relationships based on trust, reliability, and personal service.
            </p>
            <p className="text-lg mb-6 text-text-light leading-relaxed">
              Unlike many bookkeeping providers, we don't rely on costly licensed software such as Xero or QuickBooks. Instead, we design and develop our own bookkeeping software in-house. This means our system is flexible, tailored, and built around the unique needs of each client—whether you're a sole trader, a growing business, or a larger company.
            </p>
            <p className="text-lg mb-8 text-text-light leading-relaxed">
              By creating our own software, we can adapt quickly, add features that make sense for you, and keep costs fair—because you're not paying for expensive third-party licences. Our clients value this flexibility as much as the personal touch that comes with working with a family business.
            </p>
            <p className="text-lg mb-8 text-text-light leading-relaxed">
              At our core, we believe bookkeeping should be clear, efficient, and tailored to you. That's why we combine professional expertise, custom-built tools, and a friendly approach to deliver a service that works for your business—not the other way around.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Card className="p-6 text-center shadow-soft border border-border/50">
                <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2 text-foreground">Family-Run Business</h3>
                <p className="text-sm text-text-light">Personal service you can trust</p>
              </Card>
              <Card className="p-6 text-center shadow-soft border border-border/50">
                <Award className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-2 text-foreground">Custom Software</h3>
                <p className="text-sm text-text-light">Built in-house for your needs</p>
              </Card>
              <Card className="p-6 text-center shadow-soft border border-border/50">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2 text-foreground">40 Years Experience</h3>
                <p className="text-sm text-text-light">Proven expertise you can rely on</p>
              </Card>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-medium">
              <img 
                src={familyTeamImage} 
                alt="Our family team working together" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;