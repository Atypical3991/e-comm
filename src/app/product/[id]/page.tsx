"use client";

// import { useCart } from "@/context/CartContext";
import { useState } from "react";
import CustomerReviews from "../components/CustomerReviews";
import ProductRecommendationCarousel from "../components/RecommendationCarousel";

export default function ProductDetailPage() {
  //   const { addToCart } = useCart();
  const [sortOption, setSortOption] = useState("latest");
  const [ratingFilter, setRatingFilter] = useState<number | null>(null);

  // Dummy product
  const product = {
    id: 1,
    name: "Elegant Diamond Necklace",
    price: 250.0,
    discount: 50.0,
    description:
      "An elegant diamond necklace crafted with premium quality diamonds and gold plating. Perfect for special occasions.",
    mainImage: "https://picsum.photos/seed/23/600/600",
    images: [
      "https://picsum.photos/seed/23/600/600",
      "https://picsum.photos/seed/23/600/600",
      "https://picsum.photos/seed/23/600/600",
      "https://picsum.photos/seed/23/600/600",
      "https://picsum.photos/seed/23/600/600",
      "https://picsum.photos/seed/23/600/600",
      "https://picsum.photos/seed/23/600/600",
      "https://picsum.photos/seed/23/600/600",
      "https://picsum.photos/seed/23/600/600",
    ],
  };

  const reviews = [
    { id: 1, user: "Alice", rating: 5, comment: "Absolutely stunning!" },
    {
      id: 2,
      user: "Bob",
      rating: 4,
      comment: "Great quality, worth the price.",
    },
    {
      id: 3,
      user: "Clara",
      rating: 3,
      comment: "Good, but shipping took long.",
    },
    { id: 4, user: "Dan", rating: 5, comment: "My wife loved it!" },
    { id: 5, user: "Eva", rating: 2, comment: "Not as shiny as in photos." },
  ];

  const filteredReviews = reviews
    .filter((r) => (ratingFilter ? r.rating === ratingFilter : true))
    .sort((a, b) => {
      if (sortOption === "highest") return b.rating - a.rating;
      if (sortOption === "lowest") return a.rating - b.rating;
      return b.id - a.id; // latest
    });

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Product Layout */}
      <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-8">
        {/* Images Section */}
        <div>
          <div className="flex gap-4">
            {/* Main Image */}
            <div className="aspect-square">
              <img
                src={product.mainImage}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg shadow"
              />
            </div>

            {/* Two small images */}
            <div className="flex flex-col gap-4 w-1/2">
              <div className="aspect-square">
                <img
                  src={product.images[0]}
                  alt="thumb1"
                  className="w-full h-full object-cover rounded-lg shadow"
                />
              </div>
              <div className="aspect-square">
                <img
                  src={product.images[1]}
                  alt="thumb2"
                  className="w-full h-full object-cover rounded-lg shadow"
                />
              </div>
            </div>
          </div>

          {/* More bottom images */}
          <div className="flex gap-4 mt-4 overflow-x-auto pb-2">
            {product.images.slice(2).map((img, idx) => (
              <div key={idx} className="flex-shrink-0 w-1/4 aspect-square">
                <img
                  src={img}
                  alt={`thumb${idx}`}
                  className="w-full h-full object-cover rounded-lg shadow"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>

          {/* Elegant Price Section */}
          <div className="bg-white border rounded-lg shadow p-6 space-y-3">
            <div className="flex justify-between text-lg">
              <span>Price</span>
              <span>${product.price.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>Discount</span>
              <span>- ${product.discount.toFixed(2)}</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-xl">
              <span>Total</span>
              <span className="text-blue-600">
                ${(product.price - product.discount).toFixed(2)}
              </span>
            </div>

            {/* Add to Cart */}
            <button
              //   onClick={() => addToCart(product.id)}
              className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
          </div>

          {/* Description */}
          <div>
            <h2 className="font-semibold text-lg mb-2">Description</h2>
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </div>
      {/* Recommendations Section */}
      <ProductRecommendationCarousel />
      {/* Reviews Section */}
      <CustomerReviews />
    </div>
  );
}
