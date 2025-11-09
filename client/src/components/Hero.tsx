import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Educational_technology_classroom_hero_b380bf24.png";

interface HeroProps {
  onBrowseSoftware?: () => void;
  onBrowseHardware?: () => void;
}

export default function Hero({ onBrowseSoftware, onBrowseHardware }: HeroProps) {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-blue-600/70" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4 animate-pulse">
            🎓 Trusted by 500+ Educational Institutions
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight animate-fade-in-up" data-testid="text-hero-heading" style={{animationDelay: '0.4s'}}>
          Empowering Education Through 
          <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent animate-gradient">
            Technology
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" data-testid="text-hero-subheading" style={{animationDelay: '0.6s'}}>
          Transform your institution with cutting-edge educational technology solutions. From smart classrooms to comprehensive campus management systems.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            onClick={onBrowseSoftware}
            data-testid="button-browse-software"
          >
            Browse Software Solutions
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="bg-transparent backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            onClick={onBrowseHardware}
            data-testid="button-browse-hardware"
          >
            Explore Hardware
          </Button>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '1s'}}>
          <div className="text-center hover:scale-110 transition-transform duration-300">
            <div className="text-3xl font-bold text-white mb-2 animate-bounce-gentle">500+</div>
            <div className="text-white/80">Institutions Served</div>
          </div>
          <div className="text-center hover:scale-110 transition-transform duration-300">
            <div className="text-3xl font-bold text-white mb-2 animate-bounce-gentle" style={{animationDelay: '0.5s'}}>1M+</div>
            <div className="text-white/80">Students Impacted</div>
          </div>
          <div className="text-center hover:scale-110 transition-transform duration-300">
            <div className="text-3xl font-bold text-white mb-2 animate-bounce-gentle" style={{animationDelay: '1s'}}>98%</div>
            <div className="text-white/80">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}