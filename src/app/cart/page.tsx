"use client";

import Breadcrumb from "@/components/common/Breadcrumb";
import CartItemCard from "@/components/cart-page/CartItemCard";
import { useCart } from "@/types/CartContext";
import { TbBasketExclamation } from "react-icons/tb";
import React from "react";
import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";

export default function CartPage() {
  const { cartItems, totalPrice } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  return (
    <main className="bg-[#FBF9F5] pb-20 font-serif">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-[#4A2E20]/10" />
        {cartItems.length > 0 ? (
          <>
            <div className="my-6">
              <Breadcrumb
                items={[
                  { label: "Trang Chủ", href: "/" },
                  { label: "Giỏ Hàng", href: "/cart" },
                ]}
              />
              <h1 className="text-4xl md:text-5xl font-bold text-[#4A2E20]">
                Giỏ Hàng Của Bạn
              </h1>
            </div>

            <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 items-start">
              {/* Danh sách sản phẩm trong giỏ */}
              <div className="w-full p-5 md:p-6 flex-col space-y-5 rounded-2xl border border-[#4A2E20]/10 bg-white">
                {cartItems.map((item, idx, arr) => (
                  <React.Fragment key={item.id}>
                    <CartItemCard item={item} />
                    {arr.length - 1 !== idx && (
                      <hr className="border-t-[#4A2E20]/10" />
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Tóm tắt đơn hàng */}
              <div className="w-full lg:max-w-[420px] p-5 md:p-6 flex-col space-y-5 rounded-2xl border border-[#4A2E20]/10 bg-white">
                <h2 className="text-2xl font-bold text-[#4A2E20]">
                  Tóm Tắt Đơn Hàng
                </h2>
                <div className="flex flex-col space-y-4 text-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-[#4A2E20]/60">Tạm tính</span>
                    <span className="font-semibold text-[#4A2E20]">{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#4A2E20]/60">Phí vận chuyển</span>
                    <span className="font-semibold text-[#4A2E20]">Miễn phí</span>
                  </div>
                  <hr className="border-t-[#4A2E20]/10" />
                  <div className="flex items-center justify-between font-bold">
                    <span className="text-xl text-[#4A2E20]">Tổng cộng</span>
                    <span className="text-2xl text-[#8E4B37]">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="relative flex-1">
                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4A2E20]/40" />
                    <input type="text" placeholder="Mã giảm giá" className="w-full pl-10 pr-4 py-3 bg-[#FBF9F5] border border-[#4A2E20]/20 rounded-full focus:outline-none focus:ring-2 focus:ring-[#8E4B37]" />
                  </div>
                  <button type="button" className="bg-[#4A2E20] hover:bg-[#331e16] text-white font-semibold px-6 py-3 rounded-full transition-colors">
                    Áp dụng
                  </button>
                </div>
                <button type="button" className="w-full bg-[#8E4B37] hover:bg-[#7a412f] text-white font-semibold px-6 py-4 rounded-full transition-colors flex items-center justify-center gap-2 group">
                  <span>Tiến hành thanh toán</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center flex-col text-[#4A2E20]/40 text-center py-24">
            <TbBasketExclamation strokeWidth={1} className="text-8xl mb-4" />
            <h2 className="text-2xl font-semibold text-[#4A2E20]/80 mb-2">Giỏ hàng của bạn đang trống</h2>
            <p className="mb-6">Hãy cùng An Lạc gieo duyên lành qua những vật phẩm ý nghĩa.</p>
            <Link href="/product" className="bg-[#8E4B37] hover:bg-[#7a412f] text-white font-semibold px-8 py-3 rounded-full transition-colors">
              Khám Phá Vật Phẩm
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
