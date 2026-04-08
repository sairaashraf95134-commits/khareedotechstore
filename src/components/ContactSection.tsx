import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  const inputClass = "w-full bg-muted/30 border border-glass-border/60 rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_20px_hsl(var(--primary)/0.1)] transition-all duration-500";

  return (
    <section id="contact" className="section-padding max-w-7xl mx-auto relative">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="text-center mb-16 relative">
        <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Reach Out</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Get in <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-muted-foreground text-lg">We'd love to hear from you</p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 relative">
        <div className="space-y-6">
          {[
            { icon: Mail, label: "Email", value: "support@khareedo.com" },
            { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
            { icon: MapPin, label: "Address", value: "123 Tech Street, Silicon Valley, CA 94025" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-4 glass-card-elevated p-5 group"
              style={{ transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.4s ease' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(4px)';
                e.currentTarget.style.borderColor = 'hsl(var(--primary) / 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.borderColor = '';
              }}
            >
              <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center shrink-0 group-hover:shadow-lg group-hover:shadow-primary/20 transition-shadow duration-500">
                <item.icon size={18} className="text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-0.5">{item.label}</h4>
                <p className="text-muted-foreground text-sm">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="glass-card-elevated p-8 space-y-5">
          <input type="text" placeholder="Your Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
          <input type="email" placeholder="Your Email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
          <textarea placeholder="Your Message" required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} />
          <button type="submit" className="w-full glow-button rounded-xl py-3.5 flex items-center justify-center gap-2 group">
            <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
