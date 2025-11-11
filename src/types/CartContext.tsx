"use client";

import { CartItem } from "@/types/cart.types";
import { Product } from "@/types/product.types";
import toast from "react-hot-toast";
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  cartCount: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Hiển thị thông báo khi thêm sản phẩm
  const showToast = (productTitle: string) => {
    toast.success(`Đã thêm "${productTitle}" vào giỏ hàng!`, {
      style: {
        border: '1px solid #4A2E20',
        padding: '16px',
        color: '#4A2E20',
      },
    });
  };

  const addToCart = (product: Product, quantity: number) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
    showToast(product.title);
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice = item.discount.percentage > 0
      ? item.price - (item.price * item.discount.percentage) / 100
      : item.price - item.discount.amount;
    return total + itemPrice * item.quantity;
  }, 0);

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    cartCount,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};