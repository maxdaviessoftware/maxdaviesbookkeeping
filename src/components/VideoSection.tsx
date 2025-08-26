import { Card } from "@/components/ui/card";

const VideoSection = () => {
  return (
    <section id="video" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            See Our Software in Action
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
            Watch our comprehensive software demonstration to see how we can streamline your bookkeeping processes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-6 shadow-medium border border-border/50">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/rORo6gAeKj4"
                title="Max Davies Bookkeeping Software Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;