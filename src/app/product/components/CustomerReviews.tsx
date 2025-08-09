"use client";

import { useState } from "react";

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  comment: string;
}

const dummyReviews: Review[] = Array.from({ length: 25 }).map((_, idx) => ({
  id: idx + 1,
  author: `Customer ${idx + 1}`,
  rating: Math.floor(Math.random() * 5) + 1,
  date: "2025-08-09",
  comment: "This is a sample review. The product quality is great!",
}));

export default function CustomerReviews() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("latest");
  const [ratingFilter, setRatingFilter] = useState<number | null>(null);

  const reviewsPerPage = 5;
  const filteredReviews = ratingFilter
    ? dummyReviews.filter((r) => r.rating === ratingFilter)
    : dummyReviews;

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sortBy === "highest") return b.rating - a.rating;
    if (sortBy === "lowest") return a.rating - b.rating;
    return b.id - a.id; // latest
  });

  const totalPages = Math.ceil(sortedReviews.length / reviewsPerPage);
  const paginatedReviews = sortedReviews.slice(
    (currentPage - 1) * reviewsPerPage,
    currentPage * reviewsPerPage
  );

  return (
    <div className="bg-white rounded-lg shadow p-6 mt-8">
      {/* Title & Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <h2 className="text-lg font-semibold">Customer Reviews</h2>
        <div className="flex items-center gap-4">
          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded px-3 py-1 text-sm"
          >
            <option value="latest">Latest</option>
            <option value="highest">Highest Rating</option>
            <option value="lowest">Lowest Rating</option>
          </select>
          {/* Filter */}
          <select
            value={ratingFilter || ""}
            onChange={(e) =>
              setRatingFilter(e.target.value ? Number(e.target.value) : null)
            }
            className="border border-gray-300 rounded px-3 py-1 text-sm"
          >
            <option value="">All Ratings</option>
            {[5, 4, 3, 2, 1].map((star) => (
              <option key={star} value={star}>
                {star} Stars
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Review List */}
      <div className="space-y-6">
        {paginatedReviews.map((review) => (
          <div key={review.id} className="pb-4 border-b last:border-none">
            <div className="flex justify-between items-center">
              <span className="font-semibold">{review.author}</span>
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>
            <div className="text-yellow-500">
              {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
            </div>
            <p className="text-gray-700 mt-1">{review.comment}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(idx + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === idx + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
