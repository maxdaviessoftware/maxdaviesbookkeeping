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
              A Family Legacy of Financial Excellence
            </h2>
            <p className="text-lg mb-6 text-text-light leading-relaxed">
              For over 15 years, our family has been dedicated to helping businesses 
              manage their finances with precision and care. What started as a small 
              practice has grown into a trusted partnership with dozens of clients.
            </p>
            <p className="text-lg mb-8 text-text-light leading-relaxed">
              We believe that behind every number is a story, and behind every business 
              is a dream. That's why we've developed our own proprietary software to 
              provide you with insights that matter.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Card className="p-6 text-center shadow-soft border border-border/50">
                <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2 text-foreground">Personal Care</h3>
                <p className="text-sm text-text-light">Every client is family to us</p>
              </Card>
              <Card className="p-6 text-center shadow-soft border border-border/50">
                <Award className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-2 text-foreground">Proven Results</h3>
                <p className="text-sm text-text-light">15+ years of excellence</p>
              </Card>
              <Card className="p-6 text-center shadow-soft border border-border/50">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2 text-foreground">Always Available</h3>
                <p className="text-sm text-text-light">Support when you need it</p>
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
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-medium">
              <div className="text-2xl font-bold">3rd</div>
              <div className="text-sm">Generation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;