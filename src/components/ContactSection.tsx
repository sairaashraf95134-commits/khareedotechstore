import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Get in <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-muted-foreground text-lg">We'd love to hear from you</p>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          {[
            { icon: Mail, label: "Email", value: "support@khareedo.com" },
            { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
            { icon: MapPin, label: "Address", value: "123 Tech Street, Silicon Valley, CA 94025" },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                <item.icon size={20} className="text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-medium mb-1">{item.label}</h4>
                <p className="text-muted-foreground text-sm">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-muted/50 border border-glass-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-muted/50 border border-glass-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
          />
          <textarea
            placeholder="Your Message"
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-muted/50 border border-glass-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors resize-none"
          />
          <button type="submit" className="w-full glow-button rounded-xl py-3">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
