import React, { useState } from 'react';

const SortBar = ({ activeSort, onSortChange, priceFilter, onPriceFilterChange, totalProducts }) => {
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);

  const sortOptions = [
    "Latest",
    "Best seller",
    "Name A-Z",
    "Name Z-A"
  ];

  const priceOptions = ["All", "< $50", "$50 - $200", "> $200"];

  return (
    <div className="flex justify-between items-center px-24 py-4 bg-gray-100 mb-6">
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-700">Sort by</span>

        {sortOptions.map((option) => (
          <button
            key={option}
            onClick={() => onSortChange(option)}
            className={`px-4 py-1 rounded-lg border text-sm ${
              activeSort === option
                ? "bg-[#FAA74F] text-white border-transparent"
                : "border-[#FAA74F] text-[#FAA74F] hover:bg-[#FAA74F] hover:text-white"
            }`}
          >
            {option}
          </button>
        ))}

        <div className="relative">
          <button
            onClick={() => setShowPriceDropdown(!showPriceDropdown)}
            className={`px-4 py-1 rounded-lg border text-sm ${
              showPriceDropdown || priceFilter !== "All"
                ? "bg-[#FAA74F] text-white border-transparent"
                : "border-[#FAA74F] text-[#FAA74F] hover:bg-[#FAA74F] hover:text-white"
            }`}
          >
            Filter Price
          </button>

          {showPriceDropdown && (
            <div className="absolute mt-2 bg-white shadow-lg rounded-lg w-40 z-10">
              {priceOptions.map((opt) => (
                <div
                  key={opt}
                  className={`px-4 py-2 cursor-pointer text-sm hover:bg-orange-100 ${
                    priceFilter === opt ? "bg-orange-100 font-medium" : ""
                  }`}
                  onClick={() => {
                    onPriceFilterChange(opt);
                    setShowPriceDropdown(false);
                  }}
                >
                  {opt}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="text-sm text-gray-700">
        Showing {totalProducts} products
      </div>
    </div>
  );
};

export default SortBar;
