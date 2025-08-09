export default function Filters() {
  const categories = [
    {
      name: "Electronics",
      subcategories: ["Phones", "Laptops", "Cameras", "Accessories"],
    },
    {
      name: "Clothing",
      subcategories: ["Men", "Women", "Kids", "Accessories"],
    },
    {
      name: "Home",
      subcategories: ["Furniture", "Kitchen", "Decor", "Outdoor"],
    },
    {
      name: "Books",
      subcategories: ["Fiction", "Non-fiction", "Comics", "Education"],
    },
    {
      name: "Sports",
      subcategories: ["Fitness", "Outdoor", "Team Sports", "Accessories"],
    },
  ];

  return (
    <aside className="w-full md:w-64 p-4 bg-[#1e2938] text-white shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      {/* Pricing Filter */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Price</h3>
        <input
          type="range"
          min="0"
          max="1000"
          className="w-full accent-blue-500"
        />
      </div>

      {/* Review Rating Filter */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Review Rating</h3>
        {[5, 4, 3, 2, 1].map((rating) => (
          <label
            key={rating}
            className="flex items-center gap-2 mb-1 cursor-pointer"
          >
            <input type="checkbox" className="accent-blue-500" />
            <span>{"⭐".repeat(rating)}</span>
          </label>
        ))}
      </div>

      {/* Categories + Subcategories */}
      <div>
        <h3 className="font-medium mb-2">Categories</h3>
        {categories.map((cat) => (
          <div key={cat.name} className="mb-4">
            <p className="font-semibold">{cat.name}</p>
            <ul className="ml-4 mt-1 space-y-1">
              {cat.subcategories.map((sub) => (
                <li key={sub}>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="accent-blue-500" />
                    <span>{sub}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
