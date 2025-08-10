"use client";

export default function BestSellers() {
  return (
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
  );
}
