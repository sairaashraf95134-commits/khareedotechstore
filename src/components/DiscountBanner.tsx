import { Percent, ArrowRight } from "lucide-react";

const DiscountBanner = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
      <div
        className="relative overflow-hidden rounded-2xl p-8 sm:p-12"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--gradient-start) / 0.15) 0%, hsl(var(--gradient-end) / 0.15) 50%, hsl(var(--gradient-start) / 0.1) 100%)',
          border: '1px solid hsl(var(--primary) / 0.2)',
        }}
      >
        {/* Decorative orbs */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center shrink-0 shadow-lg shadow-primary/25">
              <Percent size={28} className="text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-1">
                <span className="gradient-text">20% OFF</span> on First Purchase
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base">Use code <span className="font-bold text-foreground">KHAREEDO20</span> at checkout</p>
            </div>
          </div>
          <button onClick={scrollToProducts} className="glow-button text-sm sm:text-base px-8 py-3.5 rounded-xl flex items-center gap-2 group shrink-0">
            Shop Now
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiscountBanner;
