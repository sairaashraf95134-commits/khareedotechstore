import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface Props {
  open: boolean;
  onClose: () => void;
}

const CartDrawer = ({ open, onClose }: Props) => {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 animate-fade-in" onClick={onClose}>
      <div className="absolute inset-0 bg-background/85 backdrop-blur-md" />
      <div
        className="absolute right-0 top-0 h-full w-full max-w-md flex flex-col"
        style={{
          background: 'linear-gradient(180deg, hsl(var(--glass-bg) / 0.95) 0%, hsl(var(--glass-bg) / 0.9) 100%)',
          backdropFilter: 'blur(32px) saturate(1.5)',
          borderLeft: '1px solid hsl(var(--glass-border) / 0.5)',
          animation: 'slideInRight 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-glass-border/50">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} className="text-primary" />
            <h2 className="text-xl font-bold">Cart</h2>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300">
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag size={48} className="text-muted mx-auto mb-4" />
              <p className="text-muted-foreground">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-4 rounded-xl glass-card-elevated"
                  style={{ transition: 'transform 0.3s ease, border-color 0.3s ease' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'hsl(var(--primary) / 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '';
                  }}
                >
                  <img src={item.product.image} alt={item.product.name} className="w-16 h-16 rounded-xl object-cover" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm truncate">{item.product.name}</h4>
                    <p className="text-sm gradient-text font-bold">${item.product.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-7 h-7 rounded-lg border border-glass-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-300">
                        <Minus size={13} />
                      </button>
                      <span className="text-sm font-bold w-6 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-7 h-7 rounded-lg border border-glass-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-300">
                        <Plus size={13} />
                      </button>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.product.id)} className="text-muted-foreground hover:text-destructive transition-all duration-300 self-start p-1">
                    <Trash2 size={15} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-glass-border/50">
            <div className="flex justify-between items-center mb-5">
              <span className="text-muted-foreground font-medium">Total</span>
              <span className="text-2xl font-bold gradient-text">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full glow-button rounded-xl py-4 text-base font-bold">Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
