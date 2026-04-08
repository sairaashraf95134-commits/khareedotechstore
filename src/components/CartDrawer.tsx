import { X, Plus, Minus, Trash2 } from "lucide-react";
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
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <div className="absolute right-0 top-0 h-full w-full max-w-md glass-card border-l border-glass-border flex flex-col animate-[slideInRight_0.3s_ease-out]" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between p-6 border-b border-glass-border">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-4 p-4 rounded-xl bg-muted/30 border border-glass-border">
                  <img src={item.product.image} alt={item.product.name} className="w-16 h-16 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">{item.product.name}</h4>
                    <p className="text-sm gradient-text font-semibold">${item.product.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-7 h-7 rounded-md border border-glass-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-7 h-7 rounded-md border border-glass-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.product.id)} className="text-muted-foreground hover:text-destructive transition-colors self-start">
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-glass-border">
            <div className="flex justify-between items-center mb-4">
              <span className="text-muted-foreground">Total</span>
              <span className="text-2xl font-bold gradient-text">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full glow-button rounded-xl py-3.5">Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
