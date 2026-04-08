import { useState, useEffect } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface NavbarProps {
  onCartClick: () => void;
}

const Navbar = ({ onCartClick }: NavbarProps) => {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Home", "Products", "About", "Contact"];

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass-card border-b border-glass-border/50 shadow-lg shadow-background/50" : "bg-transparent border-b border-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-18">
        <span className="text-xl font-extrabold gradient-text cursor-pointer tracking-tight" onClick={() => scrollTo("home")}>
          Khareedo
        </span>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="nav-link px-4 py-2 rounded-lg hover:bg-muted/30">
              {l}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onCartClick}
            className="relative w-10 h-10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-all duration-300"
          >
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full gradient-bg text-[10px] font-bold flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/30 animate-scale-in">
                {totalItems}
              </span>
            )}
          </button>
          <button className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-all duration-300" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass-card border-t border-glass-border/50 p-2 animate-fade-up">
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="block w-full text-left px-4 py-3 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-all duration-300">
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
