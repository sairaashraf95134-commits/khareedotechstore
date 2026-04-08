import { Target, Heart, Lightbulb } from "lucide-react";

const values = [
  { icon: Target, title: "Our Mission", desc: "To make cutting-edge technology accessible and affordable for everyone, empowering people to live smarter every day." },
  { icon: Heart, title: "Customer First", desc: "Every decision we make starts with our customers. Your satisfaction is our top priority and the foundation of everything we do." },
  { icon: Lightbulb, title: "Innovation", desc: "We constantly explore new technologies and products to bring you the most innovative gadgets before anyone else." },
];

const AboutSection = () => (
  <section id="about" className="section-padding max-w-7xl mx-auto relative">
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[200px] pointer-events-none" />

    <div className="text-center mb-16 relative">
      <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Our Story</p>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
        About <span className="gradient-text">Khareedo</span>
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
        Founded with a passion for technology, Khareedo bridges the gap between premium tech and everyday affordability.
      </p>
    </div>
    <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 relative">
      {values.map((v, i) => (
        <div
          key={v.title}
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
            <v.icon size={24} className="text-primary-foreground" />
          </div>
          <h3 className="text-lg font-bold mb-3">{v.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default AboutSection;
