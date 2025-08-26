import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SoftwareShowcase from "@/components/SoftwareShowcase";
import VideoSection from "@/components/VideoSection";
import Services from "@/components/Services";
import CalendarBooking from "@/components/CalendarBooking";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <SoftwareShowcase />
      <VideoSection />
      <Services />
      <CalendarBooking />
      <Footer />
    </div>
  );
};

export default Index;