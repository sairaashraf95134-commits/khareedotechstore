const Footer = () => (
  <footer className="border-t border-glass-border py-12 px-4">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
      <span className="text-lg font-bold gradient-text">Khareedo</span>
      <div className="flex gap-4">
        {["twitter", "facebook", "instagram", "youtube"].map((s) => (
          <a key={s} href="#" className="w-10 h-10 rounded-lg border border-glass-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all">
            <span className="text-xs font-medium capitalize">{s[0].toUpperCase()}</span>
          </a>
        ))}
      </div>
      <p className="text-sm text-muted-foreground">© 2026 Khareedo. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
