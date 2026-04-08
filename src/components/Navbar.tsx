import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface NavbarProps {
  onCartClick: () => void;
}

const Navbar = ({ onCartClick }: NavbarProps) => {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = ["Home", "Products", "About", "Contact"];

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-glass-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <span className="text-xl font-bold gradient-text cursor-pointer" onClick={() => scrollTo("home")}>
          Khareedo
        </span>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button onClick={onCartClick} className="relative text-foreground hover:text-primary transition-colors">
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full gradient-bg text-[10px] font-bold flex items-center justify-center text-primary-foreground">
                {totalItems}
              </span>
            )}
          </button>
          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass-card border-t border-glass-border animate-fade-up">
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="block w-full text-left px-6 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
