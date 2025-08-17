"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import CustomerReviews from "../components/CustomerReviews";
import ProductRecommendationCarousel from "../components/RecommendationCarousel";

export default function ProductDetailPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [cartQuantity, setCartQuantity] = useState<number | null>(null);

  const product = {
    id: "1",
    name: "Elegant Diamond Necklace",
    price: 250.0,
    discount: 50.0,
    description:
      "An elegant diamond necklace crafted with premium quality diamonds and gold plating. Perfect for special occasions.",
    mainImage: "https://picsum.photos/seed/23/600/600",
    images: [
      "https://picsum.photos/seed/23/600/600",
      "https://picsum.photos/seed/24/600/600",
      "https://picsum.photos/seed/25/600/600",
      "https://picsum.photos/seed/26/600/600",
      "https://picsum.photos/seed/27/600/600",
      "https://picsum.photos/seed/28/600/600",
      "https://picsum.photos/seed/29/600/600",
    ],
  };

  const [selectedImage, setSelectedImage] = useState(product.mainImage);
  const [message, setMessage] = useState<string | null>(null);
  const [added, setAdded] = useState(false); // 🔑 track if product is added

  const handleAddToCart = async () => {
    if (!session) {
      router.push("/api/auth/signin");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: product.id }),
      });

      if (!res.ok) throw new Error("Failed to add to cart");

      await res.json(); // we don’t even need details here
      setAdded(true); // ✅ mark as added
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleViewCart = () => {
    router.push("/cart");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Product Layout */}
      <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-8">
        {/* Images Section */}
        <div>
          <div className="grid grid-cols-[75%_25%] gap-4">
            {/* Main Image */}
            <div className="aspect-square relative">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg shadow cursor-pointer"
              />
            </div>

            {/* Right thumbnails (3 stacked) */}
            <div className="flex flex-col gap-4">
              {product.images.slice(0, 3).map((img, idx) => (
                <div
                  key={idx}
                  className={`w-full aspect-square rounded-lg shadow overflow-hidden border-2 cursor-pointer ${
                    selectedImage === img
                      ? "border-blue-600"
                      : "border-transparent"
                  }`}
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img}
                    alt={`thumb${idx}`}
                    className="w-full h-full object-cover hover:opacity-80 transition"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom thumbnails */}
          <div className="flex gap-4 mt-4 overflow-x-auto pb-2 flex-nowrap">
            {product.images.slice(3).map((img, idx) => (
              <div
                key={idx}
                className={`flex-shrink-0 w-1/4 aspect-square rounded-lg overflow-hidden shadow cursor-pointer border-2 ${
                  selectedImage === img
                    ? "border-blue-600"
                    : "border-transparent"
                }`}
                onClick={() => setSelectedImage(img)}
                style={{ minWidth: "25%" }}
              >
                <img
                  src={img}
                  alt={`thumb${idx}`}
                  className="w-full h-full object-cover hover:opacity-80 transition"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>

          {/* Price Section */}
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

            <button
              onClick={added ? handleViewCart : handleAddToCart}
              disabled={loading}
              className={`mt-4 w-full py-3 rounded-lg transition font-medium ${
                added
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              {loading ? "Adding..." : added ? "View Cart" : "Add to Cart"}
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

      {/* Recommendations & Reviews */}
      <ProductRecommendationCarousel />
      <CustomerReviews />
    </div>
  );
}
