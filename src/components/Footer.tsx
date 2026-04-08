const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-glass-border/50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-3 gap-12 mb-12">
          <div>
            <span className="text-2xl font-extrabold gradient-text">Khareedo</span>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">Your trusted destination for premium tech gadgets. Shop smarter, live better.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Quick Links</h4>
            <div className="space-y-2.5">
              {["Home", "Products", "About", "Contact"].map((l) => (
                <button key={l} onClick={() => scrollTo(l.toLowerCase())} className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                  {l}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Connect</h4>
            <div className="flex gap-3">
              {[
                { name: "Twitter", letter: "X" },
                { name: "Facebook", letter: "F" },
                { name: "Instagram", letter: "I" },
                { name: "YouTube", letter: "Y" },
              ].map((s) => (
                <a
                  key={s.name}
                  href="#"
                  className="w-10 h-10 rounded-xl border border-glass-border/60 flex items-center justify-center text-muted-foreground text-xs font-bold transition-all duration-500"
                  style={{ transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.4s ease, color 0.4s ease, box-shadow 0.4s ease' }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = 'translateY(-3px)';
                    el.style.borderColor = 'hsl(var(--primary) / 0.4)';
                    el.style.color = 'hsl(var(--foreground))';
                    el.style.boxShadow = '0 8px 20px hsl(var(--primary) / 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = '';
                    el.style.borderColor = '';
                    el.style.color = '';
                    el.style.boxShadow = '';
                  }}
                >
                  {s.letter}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-glass-border/30 pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2026 Khareedo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
