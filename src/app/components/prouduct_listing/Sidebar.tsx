const Sidebar: React.FC = () => {
  return (
    <aside className="w-full md:w-64 bg-gray-100 p-4 space-y-6">
      <div>
        <h2 className="font-semibold text-lg mb-2">Categories</h2>
        <ul className="space-y-1">
          <li>
            <input type="checkbox" /> Electronics
          </li>
          <li>
            <input type="checkbox" /> Clothing
          </li>
          <li>
            <input type="checkbox" /> Books
          </li>
        </ul>
      </div>

      <div>
        <h2 className="font-semibold text-lg mb-2">Pricing</h2>
        <ul className="space-y-1">
          <li>
            <input type="radio" name="price" /> Under $50
          </li>
          <li>
            <input type="radio" name="price" /> $50 - $100
          </li>
          <li>
            <input type="radio" name="price" /> Over $100
          </li>
        </ul>
      </div>

      <div>
        <h2 className="font-semibold text-lg mb-2">User Rating</h2>
        <ul className="space-y-1">
          <li>
            <input type="radio" name="rating" /> 4★ & up
          </li>
          <li>
            <input type="radio" name="rating" /> 3★ & up
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
