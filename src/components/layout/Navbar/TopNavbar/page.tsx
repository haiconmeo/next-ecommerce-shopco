"use client";

import Breadcrumb from "@/components/common/Breadcrumb";
import { useCart } from "@/types/CartContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function CheckoutPage() {
  const { cartItems, totalPrice } = useCart();
  const router = useRouter();

  useEffect(() => {
    // Nếu giỏ hàng trống, chuyển hướng về trang giỏ hàng
    if (cartItems.length === 0) {
      router.push("/cart");
    }
  }, [cartItems, router]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  // Ngăn render nếu giỏ hàng trống để tránh hiển thị nội dung không cần thiết
  if (cartItems.length === 0) {
    return null; // Hoặc có thể hiển thị một spinner loading
  }

  return (
    <main className="bg-[#FBF9F5] py-12 md:py-20 font-serif">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <Breadcrumb
          items={[
            { label: "Trang Chủ", href: "/" },
            { label: "Giỏ Hàng", href: "/cart" },
            { label: "Thanh Toán", href: "/checkout" },
          ]}
        />

        <h1 className="text-4xl md:text-5xl font-bold text-[#4A2E20] mb-8">
          Thông Tin Thanh Toán
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Cột Form thông tin */}
          <div className="bg-white p-8 rounded-2xl border border-[#4A2E20]/10">
            <h2 className="text-2xl font-bold text-[#4A2E20] mb-6">
              Thông Tin Giao Hàng
            </h2>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#4A2E20] mb-1">Họ và Tên</label>
                <input type="text" id="name" className="w-full px-4 py-2 bg-[#FBF9F5] border border-[#4A2E20]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8E4B37]" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#4A2E20] mb-1">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 bg-[#FBF9F5] border border-[#4A2E20]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8E4B37]" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#4A2E20] mb-1">Số Điện Thoại</label>
                <input type="tel" id="phone" className="w-full px-4 py-2 bg-[#FBF9F5] border border-[#4A2E20]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8E4B37]" />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-[#4A2E20] mb-1">Địa Chỉ</label>
                <textarea id="address" rows={3} className="w-full px-4 py-2 bg-[#FBF9F5] border border-[#4A2E20]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8E4B37]"></textarea>
              </div>
            </form>
          </div>

          {/* Cột Tóm tắt đơn hàng */}
          <div className="bg-white p-8 rounded-2xl border border-[#4A2E20]/10 sticky top-28">
            <h2 className="text-2xl font-bold text-[#4A2E20] mb-6">
              Đơn Hàng Của Bạn
            </h2>
            <div className="space-y-4 max-h-64 overflow-y-auto pr-2 mb-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 bg-white rounded-lg border border-[#4A2E20]/10 p-1">
                      <Image src={item.srcUrl} alt={item.title} layout="fill" objectFit="contain" />
                      <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#4A2E20] text-xs font-bold text-white">{item.quantity}</span>
                    </div>
                    <span className="font-medium text-[#4A2E20]">{item.title}</span>
                  </div>
                  <span className="font-semibold text-[#4A2E20]">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
            <hr className="border-t-[#4A2E20]/10 my-5" />
            <div className="space-y-3 text-lg">
              <div className="flex justify-between">
                <span className="text-[#4A2E20]/60">Tạm tính</span>
                <span className="font-semibold text-[#4A2E20]">{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#4A2E20]/60">Phí vận chuyển</span>
                <span className="font-semibold text-[#4A2E20]">Miễn phí</span>
              </div>
              <hr className="border-t-[#4A2E20]/10 my-3" />
              <div className="flex justify-between font-bold text-xl">
                <span className="text-[#4A2E20]">Tổng cộng</span>
                <span className="text-2xl text-[#8E4B37]">{formatPrice(totalPrice)}</span>
              </div>
            </div>
            <button type="submit" form="checkout-form" className="mt-8 w-full bg-[#8E4B37] hover:bg-[#7a412f] text-white font-semibold px-6 py-4 rounded-full transition-colors">
              Hoàn Tất Đặt Hàng
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}