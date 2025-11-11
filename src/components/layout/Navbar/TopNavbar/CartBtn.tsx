"use client";

import { useCart } from "@/types/CartContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartBtn = () => {
  const { cartCount } = useCart();

  return (
    <Link href="/cart" className="relative mr-2 p-1">
      <Image
        priority
        src="/icons/cart.svg"
        height={100}
        width={100}
        alt="cart"
        className="max-w-[24px] max-h-[24px]"
      />
      {cartCount > 0 && (
        <span className="absolute -top-1 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#FF3333] text-[10px] font-bold text-white">
          {cartCount}
        </span>
      )}
    </Link>
  );
};

export default CartBtn;
