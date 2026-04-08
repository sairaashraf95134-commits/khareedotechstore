import { Target, Heart, Lightbulb } from "lucide-react";

const values = [
  { icon: Target, title: "Our Mission", desc: "To make cutting-edge technology accessible and affordable for everyone, empowering people to live smarter every day." },
  { icon: Heart, title: "Customer First", desc: "Every decision we make starts with our customers. Your satisfaction is our top priority and the foundation of everything we do." },
  { icon: Lightbulb, title: "Innovation", desc: "We constantly explore new technologies and products to bring you the most innovative gadgets before anyone else." },
];

const AboutSection = () => (
  <section id="about" className="section-padding max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        About <span className="gradient-text">Khareedo</span>
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
        Founded with a passion for technology, Khareedo bridges the gap between premium tech and everyday affordability.
      </p>
    </div>
    <div className="grid sm:grid-cols-3 gap-8">
      {values.map((v) => (
        <div key={v.title} className="glass-card p-8 text-center group hover:border-primary/40 transition-all duration-300 hover:-translate-y-1">
          <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-5 group-hover:shadow-lg group-hover:shadow-primary/20 transition-shadow">
            <v.icon size={24} className="text-primary-foreground" />
          </div>
          <h3 className="text-lg font-semibold mb-3">{v.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default AboutSection;
