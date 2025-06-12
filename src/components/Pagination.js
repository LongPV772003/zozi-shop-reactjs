import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center bg-[#f7f9ff] rounded-full py-4 px-6 shadow-md gap-6 mb-12">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        <IoChevronBack />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-7 h-7 flex items-center justify-center rounded-full ${
            page === currentPage ? 'bg-[#FAA74F] text-white' : 'text-slate-800 hover:bg-gray-200'
          }`}
        >
          {page}
        </button>
      ))}

      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        <IoChevronForward />
      </button>
    </div>
  );
};

export default Pagination;
