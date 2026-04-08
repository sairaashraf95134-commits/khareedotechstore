import { Zap, Shield, Truck } from "lucide-react";

const features = [
  { icon: Zap, title: "Latest Tech", desc: "Cutting-edge gadgets curated for the modern lifestyle" },
  { icon: Shield, title: "Quality Assured", desc: "Every product rigorously tested and certified" },
  { icon: Truck, title: "Fast Delivery", desc: "Free express shipping on orders over $50" },
];

const IntroSection = () => (
  <section className="section-padding max-w-7xl mx-auto relative">
    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[180px] pointer-events-none" />

    <div className="text-center mb-16">
      <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Why Choose Us</p>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
        Why <span className="gradient-text">Khareedo</span>?
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
        Khareedo provides the latest and most affordable tech gadgets to upgrade your lifestyle with convenience and innovation.
      </p>
    </div>
    <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
      {features.map((f, i) => (
        <div
          key={f.title}
          className={`glass-card-elevated p-8 text-center group animate-slide-up stagger-${i + 1}`}
          style={{ transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s ease, border-color 0.5s ease' }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.transform = 'translateY(-6px)';
            el.style.boxShadow = '0 20px 50px hsl(var(--primary) / 0.12), inset 0 1px 0 hsl(var(--glass-border) / 0.4)';
            el.style.borderColor = 'hsl(var(--primary) / 0.25)';
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.transform = '';
            el.style.boxShadow = '';
            el.style.borderColor = '';
          }}
        >
          <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-500">
            <f.icon size={24} className="text-primary-foreground" />
          </div>
          <h3 className="text-lg font-bold mb-2">{f.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default IntroSection;
