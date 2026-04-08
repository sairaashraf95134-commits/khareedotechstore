import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBanner} alt="Premium tech gadgets" width={1920} height={800} className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-up">
        <p className="text-sm sm:text-base font-medium text-primary tracking-widest uppercase mb-4">
          Shop Smarter, Live Better
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Welcome to <span className="gradient-text">Khareedo</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Your Trusted Destination for Premium Tech Gadgets
        </p>
        <button onClick={scrollToProducts} className="glow-button text-base sm:text-lg px-8 py-4 rounded-xl">
          Shop Now
        </button>
      </div>

      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default HeroSection;
