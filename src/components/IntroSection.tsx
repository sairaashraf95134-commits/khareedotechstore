import { Zap, Shield, Truck } from "lucide-react";

const features = [
  { icon: Zap, title: "Latest Tech", desc: "Cutting-edge gadgets curated for you" },
  { icon: Shield, title: "Quality Assured", desc: "Every product tested and certified" },
  { icon: Truck, title: "Fast Delivery", desc: "Free shipping on orders over $50" },
];

const IntroSection = () => (
  <section className="section-padding max-w-7xl mx-auto">
    <div className="text-center mb-16 animate-fade-up">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        Why <span className="gradient-text">Khareedo</span>?
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
        Khareedo provides the latest and most affordable tech gadgets to upgrade your lifestyle with convenience and innovation.
      </p>
    </div>
    <div className="grid sm:grid-cols-3 gap-8">
      {features.map((f) => (
        <div key={f.title} className="glass-card p-8 text-center group hover:border-primary/40 transition-all duration-300 hover:-translate-y-1">
          <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-5 group-hover:shadow-lg group-hover:shadow-primary/20 transition-shadow">
            <f.icon size={24} className="text-primary-foreground" />
          </div>
          <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
          <p className="text-muted-foreground text-sm">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default IntroSection;
