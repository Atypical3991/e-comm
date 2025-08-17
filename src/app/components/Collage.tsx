"use client";

import { useEffect, useState } from "react";

const IMAGES = [
  "https://picsum.photos/seed/13/600/600",
  "https://picsum.photos/seed/14/600/600",
  "https://picsum.photos/seed/15/600/600",
  "https://picsum.photos/seed/16/600/600",
  "https://picsum.photos/seed/17/600/600",
];

export default function Collage() {
  const [shuffled, setShuffled] = useState<string[]>([]);

  useEffect(() => {
    // Shuffle images on load
    const shuffledImgs = [...IMAGES].sort(() => 0.5 - Math.random());
    setShuffled(shuffledImgs.slice(0, 6)); // only take 6 for layout
  }, []);

  return (
    <div className="hidden md:grid grid-cols-3 grid-rows-6 gap-2 w-full h-full p-4 bg-gray-200">
      {shuffled.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt="jewelry"
          className={`object-cover w-full h-full rounded-lg ${
            idx % 3 === 0 ? "col-span-2 row-span-3" : "col-span-1 row-span-2"
          }`}
        />
      ))}
    </div>
  );
}
