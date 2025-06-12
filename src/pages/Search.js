import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { useRef,useState,useEffect } from 'react';
import Card from "../components/Card"
import nonla from '../assets/nonla.png';
import handmade1 from '../assets/handmade1.png';
import handmade2 from '../assets/handmade2.png';
import handmade3 from '../assets/handmade3.png';
import Pagination from '../components/Pagination';
import bgImage2 from '../assets/background2.png';
import noResult from '../assets/noproduct.png';
import SortBar from '../components/SortBar';
import { FaCircleXmark,FaSpinner  } from "react-icons/fa6";

import Tippy from '@tippyjs/react/headless';
const removeVietnameseTones = (str) => {
  return str.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d").replace(/Đ/g, "D")
    .toLowerCase();
};

const Search = () => {
  const inputRef = useRef(null);
  const inputWrapperRef = useRef(null); // <-- thêm dòng này
  const [searchValue, setSearchValue] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [priceFilter, setPriceFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState("Popular");
  const itemsPerPage = 8;

  const images = [nonla, handmade1, handmade2, handmade3];
  const products = Array.from({ length: 50 }, (_, i) => ({
      image: images[i % images.length],
      name: `Sản phẩm ${i + 1}`,
      price: `$${Math.floor(Math.random() * 100) + 1}`,
  }));

  useEffect(() => {
    setLoading(true);
    const delayDebounce = setTimeout(() => {
      if (!searchValue.trim()) {
        setSearchResult([]);
        setLoading(false);
      } else {
        const filtered = products.filter(product =>
          removeVietnameseTones(product.name).includes(removeVietnameseTones(searchValue))
        );
        setSearchResult(filtered);
        setLoading(false);
      }
    }, 500);
  
    return () => clearTimeout(delayDebounce);
  }, [searchValue]);
  


  const handleClear = () => {
      setSearchValue('');
      setSearchResult([]);
      inputRef.current?.focus();
  };

  const handleIconClick = () => {
      inputRef.current?.focus();
  };

  const filteredItems = searchResult.length > 0 ? searchResult : products;
  const sortedItems = [...filteredItems].sort((a, b) => {
      const priceA = parseFloat(a.price.slice(1));
      const priceB = parseFloat(b.price.slice(1));
      switch (sortType) {
          case "Latest": return b.name.localeCompare(a.name);
          case "Best seller": return b.price.length - a.price.length;
          case "Price": return priceA - priceB;
          default: return 0;
      }
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = sortedItems.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(sortedItems.length / itemsPerPage);

  return (
      <div className="">
          <div className="w-full flex flex-col sm:flex-row items-center gap-3 sm:gap-4 p-4 rounded-xl px-24">
          <Tippy
          visible={showResult && searchValue}
          interactive
          placement="bottom-start"
          onClickOutside={() => setShowResult(false)}
          render={(attrs) => (
            <div
              className="bg-white shadow-lg rounded-lg p-4 z-50"
              style={{ width: inputWrapperRef.current?.offsetWidth || '100%' }}
              tabIndex="-1"
              {...attrs}
            >
              {loading ? (
                <div className="flex justify-center items-center py-4">
                  <FaSpinner className="animate-spin text-xl text-gray-500" />
                </div>
              ) : searchResult.length > 0 ? (
                searchResult.map((item, index) => (
                  <div
                    key={index}
                    className="py-2 px-3 hover:bg-gray-100 rounded cursor-pointer"
                    onClick={() => {
                      setSearchValue(item.name);
                      setShowResult(false);
                    }}
                  >
                    {item.name}
                  </div>
                ))
              ) : (
                <div className="flex justify-center items-center flex-col py-4">
                  <img src={noResult} alt="" className="h-12 w-12" />
                  No Results
                </div>
              )}
            </div>
          )}
        >
          <div ref={inputWrapperRef} className="relative w-full flex-1">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" onClick={handleIconClick}>
              <IoSearchOutline />
            </span>
            <input
              ref={inputRef}
              type="text"
              value={searchValue}
              onFocus={() => setShowResult(true)}
              onChange={(e) => {
                if (!e.target.value.startsWith(" ")) {
                  setSearchValue(e.target.value);
                }
              }}
              placeholder="Article name or keywords..."
              className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {searchValue && (
              <FaCircleXmark
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                onClick={handleClear}
              />
            )}
          </div>
        </Tippy>

              <select
                  className="w-full sm:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                  <option>All categories</option>
                  <option>Crystals</option>
                  <option>Chairs</option>
                  <option>Decor</option>
              </select>

              <button className="w-full sm:w-auto px-6 py-2 bg-[#FAA74F] text-white font-semibold rounded-lg hover:bg-orange-500 transition">
                  Search
              </button>
          </div>

          <SortBar 
              activeSort={sortType}
              onSortChange={setSortType}
              priceFilter={priceFilter}
              onPriceFilterChange={setPriceFilter}
              totalProducts={filteredItems.length}
          />

          <div className="flex flex-wrap gap-[34px] mt-10 px-24">
              {currentItems.map((item, idx) => (
                  <Card key={idx} image={item.image} name={item.name} price={item.price} />
              ))}
          </div>

          <div className="flex justify-center mt-4">
              <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
              />
          </div>

          <div className="w-full h-full relative flex flex-col justify-center items-center p-16 bg-cover bg-center"
              style={{ backgroundImage: `url(${bgImage2})` }}>
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
              <div className="relative text-center text-white text-4xl font-semibold drop-shadow-lg">
                  What we offer
              </div>
              <div className="relative text-center text-white text-3xl font-semibold mt-5 drop-shadow-lg">
                  Safe & Sustainable Gift for You
              </div>
              <button className="relative mt-8 bg-[#FAA74F] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-500 transition duration-300 shadow-lg">
                  More Products
              </button>
          </div>
      </div>
  );
};

export default Search;