import Navbar from "@app/components/prouduct_listing/Navbar";
import Sidebar from "@app/components/prouduct_listing/Sidebar";
import ProductCard, {
  Product,
} from "@app/components/prouduct_listing/ProductCard";

const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 89.99,
    image: "/images/headphones.jpg",
  },
  { id: 2, name: "Casual T-Shirt", price: 19.99, image: "/images/tshirt.jpg" },
  { id: 3, name: "Novel Book", price: 14.99, image: "/images/book.jpg" },
  { id: 4, name: "Smart Watch", price: 129.99, image: "/images/watch.jpg" },
];

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </main>
      </div>
    </div>
  );
};

export default HomePage;
