import { ShoppingCart, Eye, Star } from "lucide-react";
import { Product } from "@/contexts/CartContext";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface Props {
  product: Product;
  onViewDetails: (product: Product) => void;
  index: number;
}

const ProductCard = ({ product, onViewDetails, index }: Props) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  const fullStars = Math.floor(product.rating);
  const hasHalf = product.rating % 1 >= 0.5;

  return (
    <div className={`glass-card-elevated overflow-hidden group animate-slide-up stagger-${index + 1}`}
      style={{ transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.5s ease' }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = 'translateY(-8px) scale(1.02)';
        el.style.boxShadow = '0 20px 60px hsl(var(--primary) / 0.15), 0 0 40px hsl(var(--glow) / 0.08), inset 0 1px 0 hsl(var(--glass-border) / 0.4)';
        el.style.borderColor = 'hsl(var(--primary) / 0.3)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = '';
        el.style.boxShadow = '';
        el.style.borderColor = '';
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={512}
          height={512}
          className="w-full aspect-square object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        
        {/* Price badge */}
        <div className="absolute top-4 right-4 glass-card px-3 py-1.5 text-sm font-bold gradient-text">
          Rs. {product.price.toLocaleString()}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors duration-300">{product.name}</h3>
        
        {/* Star ratings */}
        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              className={`transition-colors ${
                i < fullStars
                  ? "fill-primary text-primary"
                  : i === fullStars && hasHalf
                  ? "fill-primary/50 text-primary"
                  : "text-muted"
              }`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1.5">{product.rating}</span>
        </div>

        <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{product.description}</p>
        <div className="flex gap-3">
          <button onClick={handleAdd} className="flex-1 glow-button text-sm py-2.5 flex items-center justify-center gap-2 rounded-xl">
            <ShoppingCart size={15} /> Add to Cart
          </button>
          <button onClick={() => onViewDetails(product)} className="outline-glow-button text-sm flex items-center gap-2">
            <Eye size={15} /> Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
