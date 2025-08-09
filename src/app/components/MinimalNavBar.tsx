import { FaUserCircle, FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow bg-white">
      <a href="/" className="text-xl font-bold">
        Home
      </a>
      <div className="flex items-center gap-4">
        <FaUserCircle className="text-2xl cursor-pointer" />
        <FaShoppingCart className="text-2xl cursor-pointer" />
      </div>
    </nav>
  );
}
