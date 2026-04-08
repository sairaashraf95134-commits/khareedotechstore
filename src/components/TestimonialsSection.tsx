import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Khan",
    location: "Lahore",
    rating: 5,
    text: "Khareedo has the best prices in Pakistan! I ordered wireless headphones and they arrived in just 2 days. Amazing quality and super affordable.",
    product: "Wireless Headphones",
  },
  {
    name: "Fatima Noor",
    location: "Karachi",
    rating: 5,
    text: "I've been buying tech gadgets from Khareedo for months now. Their customer service is outstanding and every product I've received has been top-notch.",
    product: "Smart Watch",
  },
  {
    name: "Usman Ali",
    location: "Islamabad",
    rating: 4,
    text: "Great gaming mouse at an unbeatable price. The RGB lighting looks amazing and the sensor is incredibly precise. Highly recommend Khareedo!",
    product: "Gaming Mouse",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding max-w-7xl mx-auto relative">
    <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[200px] pointer-events-none" />

    <div className="text-center mb-16 relative">
      <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Testimonials</p>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
        What Our <span className="gradient-text">Customers</span> Say
      </h2>
      <p className="text-muted-foreground text-lg">Real reviews from real customers across Pakistan</p>
    </div>

    <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 relative">
      {testimonials.map((t, i) => (
        <div
          key={t.name}
          className={`glass-card-elevated p-8 relative group animate-slide-up stagger-${i + 1}`}
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
          {/* Quote icon */}
          <Quote size={32} className="text-primary/20 mb-4" />

          {/* Stars */}
          <div className="flex items-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, j) => (
              <Star
                key={j}
                size={15}
                className={j < t.rating ? "fill-primary text-primary" : "text-muted"}
              />
            ))}
          </div>

          {/* Review text */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>

          {/* Author */}
          <div className="border-t border-glass-border/40 pt-4">
            <p className="font-semibold text-sm">{t.name}</p>
            <p className="text-xs text-muted-foreground">{t.location} · Bought {t.product}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TestimonialsSection;
