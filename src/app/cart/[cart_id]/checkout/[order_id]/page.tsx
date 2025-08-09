"use client";

import { useState } from "react";
import RecommendationCarouselProps from "../components/RecommendationCarousel";

interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
  image: string;
}

export default function OrderSummaryPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Gold Necklace",
      price: 1200,
      qty: 1,
      image: "https://picsum.photos/100?random=100",
    },
    {
      id: 2,
      name: "Diamond Earrings",
      price: 800,
      qty: 2,
      image: "https://picsum.photos/100?random=200",
    },
  ]);

  const updateQty = (id: number, change: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + change) } : item
      )
    );
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[50%_50%] gap-8 p-6">
        {/* LEFT: Order Summary Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 min-h-[500px]">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>

          {/* Cart Items */}
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-gray-50 rounded-lg shadow p-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">${item.price}</p>
                  <div className="flex items-center mt-2 gap-2">
                    <button
                      onClick={() => updateQty(item.id, -1)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span>{item.qty}</span>
                    <button
                      onClick={() => updateQty(item.id, 1)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="font-semibold">
                  ${(item.price * item.qty).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* Total + Place Order */}
          <div className="mt-6 border-t pt-4 flex justify-between items-center">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-xl font-bold">${totalPrice.toFixed(2)}</span>
          </div>
          <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Place Order
          </button>
        </div>

        {/* RIGHT: Placeholder for Best Sellers / Offers */}
        {/* RIGHT COLUMN - Best Sellers */}
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl">
          <h2 className="text-xl font-bold mb-4">Best Sellers</h2>
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, idx) => (
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
        <RecommendationCarouselProps />
      </div>
    </>
  );
}
