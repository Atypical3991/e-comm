export default function ProductCard({ product }) {
  return (
    <div className="border rounded shadow-sm p-4 hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover mb-2"
      />
      <h3 className="font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-500">${product.price}</p>
    </div>
  );
}
