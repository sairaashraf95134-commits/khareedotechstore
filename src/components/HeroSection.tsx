import heroBanner from "@/assets/hero-banner.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBanner} alt="Premium tech gadgets" width={1920} height={800} className="w-full h-full object-cover opacity-30 scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      {/* Animated orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[150px] animate-pulse-glow pointer-events-none" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[120px] animate-pulse-glow pointer-events-none" style={{ animationDelay: '0.8s' }} />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-glass-border bg-muted/30 backdrop-blur-sm mb-8 animate-fade-up">
          <Sparkles size={14} className="text-primary" />
          <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">Shop Smarter, Live Better</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.95] mb-8 tracking-tight animate-slide-up">
          Welcome to
          <br />
          <span className="gradient-text">Khareedo</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up stagger-2">
          Your Trusted Destination for Premium Tech Gadgets
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up stagger-3">
          <button onClick={scrollToProducts} className="glow-button text-base sm:text-lg px-10 py-4 rounded-2xl flex items-center gap-3 group">
            Shop Now
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="outline-glow-button text-base sm:text-lg px-10 py-4 rounded-2xl">
            Learn More
          </button>
        </div>

        {/* Stats row */}
        <div className="flex items-center justify-center gap-8 sm:gap-16 mt-20 animate-slide-up stagger-4">
          {[
            { value: "10K+", label: "Happy Customers" },
            { value: "500+", label: "Products" },
            { value: "4.9★", label: "Avg Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
