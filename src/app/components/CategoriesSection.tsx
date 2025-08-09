"use client";

export default function CategoriesSection() {
  const categories = [
    {
      name: "Earrings",
      img: "https://via.placeholder.com/300x300?text=Earrings",
    },
    {
      name: "Bracelets",
      img: "https://via.placeholder.com/300x300?text=Bracelets",
    },
    { name: "Sets", img: "https://via.placeholder.com/300x300?text=Sets" },
    {
      name: "Anklets",
      img: "https://via.placeholder.com/300x300?text=Anklets",
    },
  ];

  return (
    <section className="w-4/5 mx-auto py-12">
      <h2 className="text-2xl font-bold mb-6">Categories</h2>

      <div className="flex gap-4 justify-center whitespace-nowrap overflow-x-auto">
        {categories.map(({ name, img }, idx) => (
          <div
            key={idx}
            className="relative w-[25vw] h-[25vh] rounded-lg overflow-hidden cursor-pointer border border-gray-300"
          >
            {/* Blurred image */}
            <img
              src={img}
              alt={name}
              className="w-full h-full object-cover filter blur-sm scale-110"
              loading="lazy"
            />

            {/* Overlay text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold drop-shadow-lg">
                {name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
