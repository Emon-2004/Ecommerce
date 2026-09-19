"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("/api/products")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filtered = products.filter((p) =>
    p.title?.toLowerCase().includes(query.toLowerCase()) ||
    p.category?.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-500 text-sm font-medium">Loading products…</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-red-500 text-lg font-semibold">Oops! Something went wrong.</p>
          <p className="text-gray-400 text-sm mt-1">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orange-200">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center justify-between w-full sm:w-auto gap-4">
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">🛍️ Shop</h1>
            <span className="text-sm text-gray-500">{filtered.length} products</span>
          </div>

          {/* Search Bar */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="flex-1 sm:w-64 border border-gray-300 rounded-md py-2 px-4 text-sm text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button
              onClick={() => setQuery("")}
              className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition-colors duration-150 cursor-pointer"
            >
              {query ? "Clear" : "Search"}
            </button>
          </div>
        </div>
      </header>

      {/* Product Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 text-gray-400">
            <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9M9 21h6" />
            </svg>
            <p className="text-lg font-medium">
              {query ? `No results for "${query}"` : "No products found"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col group"
              >
                {/* Product Image */}
                <div className="relative w-full h-52 bg-gray-100 overflow-hidden cursor-pointer">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-300">
                      <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="flex flex-col flex-1 p-4 gap-2">
                  {/* Category Badge */}
                  {product.category && (
                    <span className="self-start text-xs font-semibold text-pink-600 bg-pink-50 px-2 py-0.5 rounded-full uppercase tracking-wide">
                      {product.category}
                    </span>
                  )}

                  {/* Title */}
                  <h2 className="text-gray-900 font-semibold text-base leading-snug line-clamp-2">
                    {product.title}
                  </h2>

                  {/* Description */}
                  {product.description && (
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                  )}

                  {/* Price + Button */}
                  <div className="mt-auto pt-3 flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">
                      ${product.price?.toFixed(2)}
                    </span>
                    <button className="bg-pink-500 hover:bg-pink-700 active:scale-95 text-white text-sm font-medium px-4 py-2 rounded-xl transition-all duration-150 cursor-pointer">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
