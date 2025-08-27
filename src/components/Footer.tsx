import { Phone, Mail } from "lucide-react";

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
              Financial expertise, helping businesses thrive 
              with personalized bookkeeping services and proprietary software.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Monthly Bookkeeping</li>
              <li>Tax Preparation</li>
              <li>Financial Analysis</li>
              <li>Software Training</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#about" className="hover:text-background transition-colors">About Us</a></li>
              <li><a href="#software" className="hover:text-background transition-colors">Our Software</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-background/80">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-background" />
                <a href="tel:+447419359051" className="hover:text-background transition-colors">+44 7419 359051</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-background" />
                <a href="mailto:maxdaviesbookkeeping@gmail.com?subject=Max Davies Bookkeeping" className="hover:text-background transition-colors">maxdaviesbookkeeping@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm">
              © 2024 Max Davies Bookkeeping
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;