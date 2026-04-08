import { ShoppingCart, Eye } from "lucide-react";
import { Product } from "@/contexts/CartContext";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface Props {
  product: Product;
  onViewDetails: (product: Product) => void;
}

const ProductCard = ({ product, onViewDetails }: Props) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="glass-card overflow-hidden group hover:border-primary/40 transition-all duration-300 hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={512}
          height={512}
          className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
        <p className="text-muted-foreground text-sm mb-3">{product.description}</p>
        <p className="text-2xl font-bold gradient-text mb-4">${product.price}</p>
        <div className="flex gap-3">
          <button onClick={handleAdd} className="flex-1 glow-button text-sm py-2.5 flex items-center justify-center gap-2 rounded-lg">
            <ShoppingCart size={16} /> Add to Cart
          </button>
          <button onClick={() => onViewDetails(product)} className="px-4 py-2.5 rounded-lg border border-glass-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all flex items-center gap-2">
            <Eye size={16} /> Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
