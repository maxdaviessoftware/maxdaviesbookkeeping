import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/dac11671-764f-4512-a8d8-ae369ae3cbfb.png" 
              alt="Max Davies" 
              className="w-12 h-12 rounded-lg object-cover"
            />
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
                <a href="tel:+447419359051" className="hover:text-primary transition-colors">+44 7419 359051</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:maxdaviesbookkeeping@gmail.com?subject=Max Davies Bookkeeping" className="hover:text-primary transition-colors">maxdaviesbookkeeping@gmail.com</a>
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