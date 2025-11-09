import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Educational_technology_classroom_hero_b380bf24.png";

interface HeroProps {
  onBrowseSoftware?: () => void;
  onBrowseHardware?: () => void;
}

export default function Hero({ onBrowseSoftware, onBrowseHardware }: HeroProps) {
  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="text-hero-heading">
          Empowering Education Through Technology
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto" data-testid="text-hero-subheading">
          Comprehensive solutions for modern educational institutions. From smart classrooms to campus management systems.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button 
            size="lg" 
            variant="default"
            onClick={onBrowseSoftware}
            data-testid="button-browse-software"
          >
            Browse Software
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="bg-background/10 backdrop-blur-sm border-white/30 text-white hover:bg-background/20"
            onClick={onBrowseHardware}
            data-testid="button-browse-hardware"
          >
            Explore Hardware
          </Button>
        </div>
      </div>
    </section>
  );
}
