import React from "react";
import { Product } from "@/types/product.types";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductListSecProps {
  title: string;
  data: Product[];
  viewAllLink?: string;
}

const ProductListSec: React.FC<ProductListSecProps> = ({
  title,
  data,
  viewAllLink,
}) => {
  return (
    <section>
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <div className="flex justify-between items-center mb-6 md:mb-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4A2E20]">
            {title}
          </h2>
          {viewAllLink && (
            <Link href={viewAllLink} className="flex items-center gap-2 text-[#4A2E20] hover:text-[#8E4B37] transition-colors">
              <span className="font-medium">Xem tất cả</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5">
          {data.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductListSec;