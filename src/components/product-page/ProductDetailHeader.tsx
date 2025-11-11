"use client";

import React, { useState } from "react";
import { Product } from "@/types/product.types";
import Image from "next/image";
import Rating from "@/components/ui/Rating";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useCart } from "@/types/CartContext";

interface ProductDetailHeaderProps {
  data: Product;
}

const ProductDetailHeader: React.FC<ProductDetailHeaderProps> = ({ data }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const finalPrice =
    data.discount.percentage > 0
      ? data.price - (data.price * data.discount.percentage) / 100
      : data.price - data.discount.amount;

  const hasDiscount = data.discount.percentage > 0 || data.discount.amount > 0;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      {/* Cột hình ảnh */}
      <div className="bg-white p-4 rounded-2xl border border-[#4A2E20]/10">
        <div className="relative aspect-square w-full">
          <Image
            src={data.srcUrl}
            alt={data.title}
            layout="fill"
            objectFit="contain"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-lg"
            priority
          />
        </div>
      </div>

      {/* Cột thông tin */}
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#4A2E20] mb-3">
          {data.title}
        </h1>

        <div className="flex items-center mb-4">
          <Rating
            initialValue={data.rating}
            allowFraction
            readonly
            SVGclassName="inline-block"
            size={20}
            fillColor="#8E4B37"
            emptyColor="#D1B5A9"
          />
          <span className="ml-2 text-sm text-[#4A2E20]/80">
            ({data.rating.toFixed(1)})
          </span>
        </div>

        <div className="flex items-baseline gap-3 mb-6">
          <span className="text-3xl font-bold text-[#8E4B37]">
            {formatPrice(finalPrice)}
          </span>
          {hasDiscount && (
            <span className="text-xl text-[#4A2E20]/50 line-through">
              {formatPrice(data.price)}
            </span>
          )}
        </div>

        <p className="text-[#4A2E20]/80 leading-relaxed mb-8">
          Đây là mô tả ngắn về sản phẩm. Nội dung này giúp người dùng hiểu rõ
          hơn về công dụng, ý nghĩa và chất liệu của vật phẩm.
        </p>

        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center border border-[#4A2E20]/20 rounded-full p-1">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 rounded-full hover:bg-[#FBF9F5] transition-colors"
            >
              <Minus className="w-5 h-5 text-[#4A2E20]" />
            </button>
            <span className="w-10 text-center font-semibold text-lg text-[#4A2E20]">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 rounded-full hover:bg-[#FBF9F5] transition-colors"
            >
              <Plus className="w-5 h-5 text-[#4A2E20]" />
            </button>
          </div>
          <button
            onClick={() => addToCart(data, quantity)}
            className="flex-1 bg-[#8E4B37] hover:bg-[#7a412f] text-white font-semibold px-6 py-3 rounded-full transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Thêm vào giỏ hàng</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailHeader;