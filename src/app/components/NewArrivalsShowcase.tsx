"use client";

export default function NewArrivalsShowcase() {
  return (
    <section className="w-4/5 mx-auto py-12">
      <h2 className="text-2xl font-bold mb-6">New Arrivals</h2>

      <div className="flex gap-4 h-[60vh]">
        {/* Left Segment: 2 rows, each with 2 columns */}
        <div className="w-1/2 flex flex-col gap-4">
          {/* Top Row */}
          <div className="flex gap-4 h-1/2">
            <div className="w-1/2">
              <img
                src="https://picsum.photos/seed/13/600/600"
                alt="Item 1"
                className="w-full h-full object-cover rounded-lg shadow"
              />
            </div>
            <div className="w-1/2">
              <img
                src="https://picsum.photos/seed/14/600/600"
                alt="Item 2"
                className="w-full h-full object-cover rounded-lg shadow"
              />
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex gap-4 h-1/2">
            <div className="w-1/2">
              <img
                src="https://picsum.photos/seed/15/600/600"
                alt="Item 3"
                className="w-full h-full object-cover rounded-lg shadow"
              />
            </div>
            <div className="w-1/2">
              <img
                src="https://picsum.photos/seed/16/600/600"
                alt="Item 4"
                className="w-full h-full object-cover rounded-lg shadow"
              />
            </div>
          </div>
        </div>

        {/* Right Segment: Single large image */}
        <div className="w-1/2">
          <img
            src="https://picsum.photos/seed/17/600/600"
            alt="Main Item"
            className="w-full h-full object-cover rounded-lg shadow"
          />
        </div>
      </div>
    </section>
  );
}
