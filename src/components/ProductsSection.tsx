import { useState } from "react";
import { products } from "@/data/products";
import { Product } from "@/contexts/CartContext";
import ProductCard from "./ProductCard";
import ProductDetailModal from "./ProductDetailModal";

const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="products" className="section-padding max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Our <span className="gradient-text">Products</span>
        </h2>
        <p className="text-muted-foreground text-lg">Premium gadgets handpicked for tech enthusiasts</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onViewDetails={setSelectedProduct} />
        ))}
      </div>
      <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  );
};

export default ProductsSection;
