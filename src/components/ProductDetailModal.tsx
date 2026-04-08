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
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <div className="relative glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10">
          <X size={24} />
        </button>
        <div className="md:flex">
          <div className="md:w-1/2">
            <img src={product.image} alt={product.name} className="w-full aspect-square object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none" />
          </div>
          <div className="p-6 md:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
            <div className="flex items-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < fullStars ? "fill-primary text-primary" : i === fullStars && hasHalf ? "fill-primary/50 text-primary" : "text-muted-foreground"}
                />
              ))}
              <span className="text-sm text-muted-foreground ml-2">{product.rating}</span>
            </div>
            <p className="text-3xl font-bold gradient-text mb-4">${product.price}</p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">{product.details}</p>
            <button onClick={handleAdd} className="glow-button flex items-center justify-center gap-2 rounded-xl">
              <ShoppingCart size={18} /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
