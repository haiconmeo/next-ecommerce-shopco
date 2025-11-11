import React from "react";
import Rating from "../ui/Rating";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product.types";

type ProductCardProps = {
  data: Product;
};

const ProductCard = ({ data }: ProductCardProps) => {
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
    <Link
      href={`/product/${data.slug}`}
      className="group flex flex-col items-start aspect-auto"
    >
      <div className="relative bg-white rounded-2xl w-full aspect-square mb-3 overflow-hidden border border-transparent group-hover:border-[#4A2E20]/20 transition-all">
        <Image
          src={data.srcUrl}
          layout="fill"
          objectFit="contain"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
          className="p-4 group-hover:scale-105 transition-transform duration-300"
          alt={data.title}
        />
        {hasDiscount && (
          <span className="absolute top-3 right-3 font-medium text-[10px] xl:text-xs py-1 px-2.5 rounded-full bg-[#FF3333]/10 text-[#FF3333]">
            -{data.discount.percentage}%
          </span>
        )}
      </div>
      <strong className="font-semibold text-[#4A2E20] text-base lg:text-lg group-hover:text-[#8E4B37] transition-colors">
        {data.title}
      </strong>
      <div className="flex items-center mt-1 mb-2">
        <Rating
          initialValue={data.rating}
          allowFraction
          readonly
          SVGclassName="inline-block"
          size={16}
          fillColor="#8E4B37"
          emptyColor="#D1B5A9"
        />
        <span className="ml-2 text-xs text-[#4A2E20]/60">({data.rating.toFixed(1)})</span>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="font-bold text-[#8E4B37] text-lg lg:text-xl">
          {formatPrice(finalPrice)}
        </span>
        {hasDiscount && (
          <span className="text-[#4A2E20]/50 line-through text-base">
            {formatPrice(data.price)}
          </span>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
