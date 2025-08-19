import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Video } from "lucide-react";

const CalendarBooking = () => {
  const handleBookConsultation = () => {
    window.open('https://calendly.com/maxdavies236/bookkeeping-software-meeting-with-max-davies-clone', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            Schedule Your Free Consultation
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
            Ready to streamline your finances? Book your online consultation 
            and let's discuss how we can help your business grow.
          </p>
        </div>

        <div className="max-w-md mx-auto mb-12">
          <Card className="p-6 shadow-soft border border-border/50 hover:shadow-medium transition-shadow">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-hero-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                <Video className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Online Consultation</h3>
              <div className="flex items-center justify-center space-x-2 text-text-light mb-3">
                <Clock className="w-4 h-4" />
                <span className="text-sm">30 minutes</span>
              </div>
              <p className="text-text-light text-sm leading-relaxed">Perfect for initial discussions and software demos</p>
            </div>
            
            <ul className="space-y-2 mb-6">
              <li className="text-sm text-foreground flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                <span>Software walkthrough</span>
              </li>
              <li className="text-sm text-foreground flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                <span>Service overview</span>
              </li>
              <li className="text-sm text-foreground flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                <span>Custom quote</span>
              </li>
            </ul>
            
            <Button 
              className="w-full" 
              variant="outline" 
              onClick={handleBookConsultation}
            >
              Book Online Consultation
            </Button>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 lg:p-12 shadow-medium border border-border/50">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  What to Expect in Your Consultation
                </h3>
                <ul className="space-y-4 text-text-light">
                  <li className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Business Assessment:</strong>
                      <br />We'll review your current bookkeeping processes and identify areas for improvement.
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Video className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Software Demo:</strong>
                      <br />See our proprietary bookkeeping software in action and how it can benefit your business.
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Custom Proposal:</strong>
                      <br />Receive a tailored service plan and transparent pricing based on your specific needs.
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-section-bg p-6 rounded-xl">
                <h4 className="text-lg font-semibold mb-4 text-foreground">Ready to Get Started?</h4>
                <p className="text-text-light mb-6 leading-relaxed">
                  Join the 50+ businesses that trust us with their financial success. 
                  Schedule your free consultation today and discover how our family business 
                  can help yours thrive.
                </p>
                <div className="space-y-3">
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={handleBookConsultation}
                  >
                    Schedule Free Consultation
                  </Button>
                  <div className="text-center text-sm text-text-light">
                    Or call us directly at <strong className="text-foreground">+44 7419 359051</strong>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CalendarBooking;