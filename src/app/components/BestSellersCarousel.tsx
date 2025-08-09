"use client";

export default function BestSellersCarousel() {
  const items = [
    "https://picsum.photos/seed/1/600/600",
    "https://picsum.photos/seed/2/600/600",
    "https://picsum.photos/seed/3/600/600",
    "https://picsum.photos/seed/4/600/600",
    "https://picsum.photos/seed/5/600/600",
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
