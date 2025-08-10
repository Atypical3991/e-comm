"use client";

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface RecommendationCarouselProps {
  title?: string;
  products: Product[];
}

function RecommendationCarousel({
  title = "You May Also Like",
  products,
}: RecommendationCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-8xl mx-auto p-6">
      <div className="mt-10">
        {/* Title */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Product List */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[200px] bg-white rounded-lg shadow hover:shadow-md transition flex-shrink-0"
            >
              <div className="w-full aspect-square overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-semibold truncate">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProductRecommendationCarousel() {
  const dummyProducts = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: Math.random() * 100 + 10,
    image: `https://picsum.photos/300?random=${i}`,
  }));

  return <RecommendationCarousel products={dummyProducts} />;
}
