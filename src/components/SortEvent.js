import React from 'react';

const SortEvent = ({ activeSort, onSortChange, totalProducts }) => {
  const sortOptions = ["Popular", "Latest", "Most View"];

  return (
    <div className="flex justify-between items-center px-4 md:px-10 lg:px-24 py-4 bg-gray-100 mb-6">
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
      </div>
      <div className="text-sm text-gray-700">
        Showing {totalProducts} event
      </div>
    </div>
  );
};

export default SortEvent;