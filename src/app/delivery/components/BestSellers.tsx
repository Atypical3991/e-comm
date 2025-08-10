"use client";

interface BestSellersProps {
  title?: string;
  count?: number; // number of products to show
}

export default function BestSellers({
  title = "Best Sellers",
  count = 8,
}: BestSellersProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: count }).map((_, idx) => (
          <img
            key={idx}
            src={`https://picsum.photos/200?random=${idx + 10}`}
            alt={`${title} ${idx + 1}`}
            className="w-full h-full object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}
