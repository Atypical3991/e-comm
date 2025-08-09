"use client";

import { useState } from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import Link from "next/link";
import ProductRecommendationCarousel from "../components/RecommendationCarousel";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 1,
      name: "Elegant Necklace",
      price: 49.99,
      image: "https://picsum.photos/200?random=1",
      quantity: 1,
    },
    {
      id: 2,
      name: "Gold Earrings",
      price: 29.99,
      image: "https://picsum.photos/200?random=2",
      quantity: 2,
    },
  ]);

  const increaseQuantity = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <div className="p-6 grid grid-cols-1 md:grid-cols-[70%_30%] gap-8">
        {/* LEFT COLUMN - Cart */}
        <div className="max-w-6xl">
          <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

          <div className="bg-white rounded-lg shadow-lg p-6 min-h-[500px] flex flex-col">
            {/* Cart Items */}
            <div className="flex-1 space-y-4">
              {cart.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-50 rounded-lg shadow-md p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-gray-500">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="p-2 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        <FaMinus />
                      </button>
                      <span className="px-3">{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="p-2 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        <FaPlus />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Summary */}
            {cart.length > 0 && (
              <div className="mt-6 flex justify-between items-center border-t pt-4">
                <h2 className="text-lg font-semibold">
                  Total: ${total.toFixed(2)}
                </h2>
                <div className="flex gap-4">
                  <Link
                    href="/products"
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    Add More Products
                  </Link>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN - Best Sellers */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Best Sellers</h2>
          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <img
                key={idx}
                src={`https://picsum.photos/200?random=${idx + 10}`}
                alt={`Best Seller ${idx + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-8xl mx-auto p-6">
        <ProductRecommendationCarousel />
      </div>
    </>
  );
}
