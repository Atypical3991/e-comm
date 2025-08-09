export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition h-full flex flex-col">
      {/* Image: full card width, square (height == width) */}
      <div className="w-full aspect-square mb-3 overflow-hidden rounded">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product info */}
      <div className="mt-auto">
        <h3 className="font-semibold text-sm truncate">{product.name}</h3>
        <p className="text-gray-600 text-sm">
          ${Number(product.price).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
