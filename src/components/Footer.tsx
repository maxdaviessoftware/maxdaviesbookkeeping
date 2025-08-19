import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">MD</span>
            </div>
            <div>
              <h3 className="text-lg font-bold">Max Davies Bookkeeping</h3>
              <p className="text-xs text-background/70">Professional Bookkeeping</p>
            </div>
            </div>
            <p className="text-background/80 text-sm leading-relaxed mb-4">
              Three generations of financial expertise, helping businesses thrive 
              with personalized bookkeeping services and proprietary software.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Monthly Bookkeeping</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Tax Preparation</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Financial Analysis</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Software Training</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#about" className="hover:text-background transition-colors">About Us</a></li>
              <li><a href="#software" className="hover:text-background transition-colors">Our Software</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-background/80">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-background" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-background" />
                <span>maxdaviesbookkeeping@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-background" />
                <span>123 Business Ave, Suite 100<br />Your City, ST 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-background" />
                <span>Mon-Fri: 8AM-6PM<br />Sat: 9AM-2PM</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm">
              © 2024 Max Davies Bookkeeping. All rights reserved.
            </p>
            <p className="text-background/60 text-sm mt-4 md:mt-0">
              Proudly serving businesses for over 15 years
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;