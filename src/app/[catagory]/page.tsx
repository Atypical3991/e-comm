"use client";

import { useState } from "react";
import Layout from "./components/Layout";
import Filters from "./components/Filters";
import ProductCard, { Product } from "./components/ProductCard";

const allProducts: Product[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: Math.round(Math.random() * 200) + 20,
  image: `https://picsum.photos/seed/${i + 1}/600/600`,
}));

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;

  const totalPages = Math.ceil(allProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const displayedProducts = allProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  return (
    <Layout>
      <div className="flex flex-col md:flex-row flex-1">
        <Filters />

        <section className="flex-1 p-4 md:p-6 bg-gray-50">
          {/* Product grid: responsive */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {displayedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-wrap justify-center items-center gap-2 mt-8">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="px-4 py-2 bg-white border rounded-lg hover:bg-gray-100 disabled:opacity-50"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 border rounded-lg ${
                  currentPage === i + 1
                    ? "bg-blue-500 text-white"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="px-4 py-2 bg-white border rounded-lg hover:bg-gray-100 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
}
