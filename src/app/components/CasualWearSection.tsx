"use client";

export default function CasualWearSection() {
  // 8 images total
  const images = [
    "https://via.placeholder.com/300x300?text=Casual+1",
    "https://via.placeholder.com/300x300?text=Casual+2",
    "https://via.placeholder.com/300x300?text=Casual+3",
    "https://via.placeholder.com/300x300?text=Casual+4",
    "https://via.placeholder.com/300x300?text=Casual+5",
    "https://via.placeholder.com/300x300?text=Casual+6",
    "https://via.placeholder.com/300x300?text=Casual+7",
    "https://via.placeholder.com/300x300?text=Casual+8",
  ];

  // Split into 2 equal halves (4 images each)
  const halfway = images.length / 2;
  const topImages = images.slice(0, halfway);
  const bottomImages = images.slice(halfway);

  return (
    <section className="w-4/5 mx-auto py-12">
      <h2 className="text-2xl font-bold mb-6">Casual Wear</h2>

      <div className="flex flex-col gap-4">
        {/* Top Row */}
        <div className="flex justify-center gap-4">
          {topImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Casual Wear ${idx + 1}`}
              className="w-[25vw] h-[25vh] object-cover rounded-lg shadow"
              loading="lazy"
            />
          ))}
        </div>

        {/* Bottom Row */}
        <div className="flex justify-center gap-4">
          {bottomImages.map((src, idx) => (
            <img
              key={idx + halfway}
              src={src}
              alt={`Casual Wear ${idx + halfway + 1}`}
              className="w-[25vw] h-[25vh] object-cover rounded-lg shadow"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
