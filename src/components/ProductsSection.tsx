import { useState } from "react";
import { products } from "@/data/products";
import { Product } from "@/contexts/CartContext";
import ProductCard from "./ProductCard";
import ProductDetailModal from "./ProductDetailModal";

const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="products" className="section-padding max-w-7xl mx-auto relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px] pointer-events-none" />
      
      <div className="text-center mb-16 relative">
        <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Curated Selection</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Our <span className="gradient-text">Products</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">Premium gadgets handpicked for tech enthusiasts</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
        {products.map((p, i) => (
          <ProductCard key={p.id} product={p} onViewDetails={setSelectedProduct} index={i} />
        ))}
      </div>
      <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  );
};

export default ProductsSection;
