"use client";

import React from "react";
import Image from "next/image";
import { CartItem } from "@/types/cart.types";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/types/CartContext";

interface CartItemCardProps {
  item: CartItem;
}

const CartItemCard: React.FC<CartItemCardProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const finalPrice =
    item.discount.percentage > 0
      ? item.price - (item.price * item.discount.percentage) / 100
      : item.price - item.discount.amount;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
      {/* Hình ảnh và Tên */}
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-24 h-24 bg-white rounded-lg border border-[#4A2E20]/10 p-2">
          <Image
            src={item.srcUrl}
            alt={item.title}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-[#4A2E20]">{item.title}</h3>
          <p className="text-sm text-[#4A2E20]/60">Vật phẩm tâm linh</p>
        </div>
      </div>

      {/* Giá */}
      <div className="w-full sm:w-auto sm:min-w-[120px] text-left sm:text-center">
        <span className="font-semibold text-[#4A2E20]">{formatPrice(finalPrice)}</span>
      </div>

      {/* Số lượng */}
      <div className="flex items-center border border-[#4A2E20]/20 rounded-full p-1">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="p-2 rounded-full hover:bg-[#FBF9F5] transition-colors"
        >
          <Minus className="w-4 h-4 text-[#4A2E20]" />
        </button>
        <span className="w-8 text-center font-medium text-[#4A2E20]">
          {item.quantity}
        </span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="p-2 rounded-full hover:bg-[#FBF9F5] transition-colors"
        >
          <Plus className="w-4 h-4 text-[#4A2E20]" />
        </button>
      </div>

      {/* Tổng tiền và nút Xóa */}
      <div className="flex items-center justify-between w-full sm:w-auto">
        <span className="font-bold text-[#4A2E20] sm:min-w-[120px] sm:text-center">
          {formatPrice(finalPrice * item.quantity)}
        </span>
        <button onClick={() => removeFromCart(item.id)} className="p-2 text-[#4A2E20]/50 hover:text-red-500 transition-colors">
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CartItemCard;