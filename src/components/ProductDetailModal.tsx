import { X, Star, ShoppingCart } from "lucide-react";
import { Product, useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface Props {
  product: Product | null;
  onClose: () => void;
}

const ProductDetailModal = ({ product, onClose }: Props) => {
  const { addToCart } = useCart();

  if (!product) return null;

  const handleAdd = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  const fullStars = Math.floor(product.rating);
  const hasHalf = product.rating % 1 >= 0.5;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div className="absolute inset-0 bg-background/85 backdrop-blur-md" />
      <div className="relative glass-card-elevated max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300 z-10">
          <X size={18} />
        </button>
        <div className="md:flex">
          <div className="md:w-1/2 relative overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full aspect-square object-cover rounded-t-[var(--radius)] md:rounded-l-[var(--radius)] md:rounded-tr-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
          </div>
          <div className="p-8 md:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={`transition-colors ${i < fullStars ? "fill-primary text-primary" : i === fullStars && hasHalf ? "fill-primary/50 text-primary" : "text-muted"}`}
                />
              ))}
              <span className="text-sm text-muted-foreground ml-2 font-medium">{product.rating}/5</span>
            </div>
            <p className="text-3xl font-bold gradient-text mb-5">${product.price}</p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">{product.details}</p>
            <button onClick={handleAdd} className="glow-button flex items-center justify-center gap-2 rounded-xl py-3.5">
              <ShoppingCart size={18} /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
