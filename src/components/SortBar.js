import React, { useState } from 'react';

const SortBar = ({ activeSort, onSortChange, priceFilter, onPriceFilterChange, totalProducts }) => {
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);

  const sortOptions = ["Popular", "Latest", "Best seller", "Price"];
  const priceOptions = ["All", "< $10", "$10 - $20", "> $20"];

  return (
    <div className="flex justify-between items-center px-24 py-4 bg-gray-100 mb-6">
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-700">Sort by</span>
        {sortOptions.map((option) =>
          option === "Price" ? (
            <div key={option} className="relative">
              <button
                onClick={() => {
                  onSortChange("Price");
                  setShowPriceDropdown(!showPriceDropdown);
                }}
                className={`px-4 py-1 rounded-lg border text-sm ${
                  activeSort === "Price"
                    ? "bg-[#FAA74F] text-white border-transparent"
                    : "border-[#FAA74F] text-[#FAA74F] hover:bg-[#FAA74F] hover:text-white"
                }`}
              >
                Price
              </button>
              {showPriceDropdown && (
                <div className="absolute mt-2 bg-white shadow-lg rounded-lg w-40 z-10">
                  {priceOptions.map((opt) => (
                    <div
                      key={opt}
                      className="px-4 py-2 hover:bg-orange-100 cursor-pointer text-sm"
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
          ) : (
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
          )
        )}
      </div>
      <div className="text-sm text-gray-700">
        Showing {totalProducts} products
      </div>
    </div>
  );
};

export default SortBar;
