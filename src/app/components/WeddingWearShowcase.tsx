"use client";

export default function WeddingWearShowcase() {
  return (
    <section className="w-4/5 mx-auto py-12">
      <h2 className="text-2xl font-bold mb-6">Wedding Wears</h2>

      <div className="flex gap-4 h-[60vh]">
        {/* Left Segment: Single large main image */}
        <div className="w-1/2">
          <img
            src="https://picsum.photos/seed/18/600/600"
            alt="Main Wedding Item"
            className="w-full h-full object-cover rounded-lg shadow"
          />
        </div>

        {/* Right Segment: 2 rows with 2 images each (4 images total) */}
        <div className="w-1/2 flex flex-col gap-4">
          {/* Top row */}
          <div className="flex gap-4 h-1/2">
            <div className="w-1/2">
              <img
                src="https://picsum.photos/seed/19/600/600"
                alt="Wedding Item 1"
                className="w-full h-full object-cover rounded-lg shadow"
              />
            </div>
            <div className="w-1/2">
              <img
                src="https://picsum.photos/seed/20/600/600"
                alt="Wedding Item 2"
                className="w-full h-full object-cover rounded-lg shadow"
              />
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex gap-4 h-1/2">
            <div className="w-1/2">
              <img
                src="https://picsum.photos/seed/21/600/600"
                alt="Wedding Item 3"
                className="w-full h-full object-cover rounded-lg shadow"
              />
            </div>
            <div className="w-1/2">
              <img
                src="https://picsum.photos/seed/22/600/600"
                alt="Wedding Item 4"
                className="w-full h-full object-cover rounded-lg shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
