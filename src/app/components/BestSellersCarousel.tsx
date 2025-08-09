"use client";

export default function BestSellersCarousel() {
  const items = [
    "https://via.placeholder.com/300x300?text=Best+Seller+1",
    "https://via.placeholder.com/300x300?text=Best+Seller+2",
    "https://via.placeholder.com/300x300?text=Best+Seller+3",
    "https://via.placeholder.com/300x300?text=Best+Seller+4",
    "https://via.placeholder.com/300x300?text=Best+Seller+5",
  ];

  return (
    <section className="w-4/5 mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Best Sellers</h2>

      <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
        {items.map((src, idx) => (
          <div key={idx} className="flex-shrink-0">
            <img
              src={src}
              alt={`Best Seller ${idx + 1}`}
              className="w-[25vw] h-[25vh] object-cover rounded-lg shadow-md"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
