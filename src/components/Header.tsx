import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">MD</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Max Davies Bookkeeping</h1>
              <p className="text-xs text-text-light">Professional Bookkeeping Services</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#software" className="text-foreground hover:text-primary transition-colors">Our Software</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm text-text-light">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+44 7419 359051</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>maxdaviesbookkeeping@gmail.com</span>
              </div>
            </div>
            <Button variant="hero">Book Meeting</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;