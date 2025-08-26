import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, User, Settings } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    softwareRequirement: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", softwareRequirement: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Card className="p-6 shadow-soft border border-border/50 h-full">
      <div className="mb-6">
        <p className="text-text-light text-sm leading-relaxed">
          Have questions about our services or need a custom solution? 
          Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="flex items-center gap-2 text-foreground">
            <User className="w-4 h-4" />
            Name
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="flex items-center gap-2 text-foreground">
            <Mail className="w-4 h-4" />
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="softwareRequirement" className="flex items-center gap-2 text-foreground">
            <Settings className="w-4 h-4" />
            Software Requirement
          </Label>
          <Textarea
            id="softwareRequirement"
            name="softwareRequirement"
            value={formData.softwareRequirement}
            onChange={handleChange}
            placeholder="Tell us about your specific software needs, current challenges, or questions about our services..."
            required
            className="w-full min-h-[100px] resize-none"
          />
        </div>

        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </form>

      <div className="mt-6 pt-6 border-t border-border text-center">
        <p className="text-text-light text-xs mb-1">
          Or reach out directly:
        </p>
        <p className="text-foreground text-sm font-medium">
          📞 +44 7419 359051 • ✉️ maxdaviesbookkeeping@gmail.com
        </p>
      </div>
    </Card>
  );
};

export default ContactForm;