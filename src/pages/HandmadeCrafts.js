import CategoryBanner from "../components/CategoryLink";
import { useRef,useState,useContext } from 'react';
import Card from "../components/Card"
import nonla from '../assets/nonla.png';
import handmade1 from '../assets/handmade1.png';
import handmade2 from '../assets/handmade2.png';
import handmade3 from '../assets/handmade3.png';
import SortBar from '../components/SortBar';
import Pagination from "../components/Pagination";
const HandmadeCrafts = () => {
  const [priceFilter, setPriceFilter] = useState("All");
      const images = [nonla, handmade1, handmade2, handmade3];

      const products = Array.from({ length: 100 }, (_, i) => ({
        image: images[i % images.length],
        name: `Product ${i + 1}`,
        price: `$${10 + (i % 20)}`
      }));
      const [currentPage, setCurrentPage] = useState(1);
          const itemsPerPage = 16;
          const [sortType, setSortType] = useState("Popular");
          const filteredItems = products.filter((item) => {
              const price = parseFloat(item.price.replace("$", ""));
            
              switch (priceFilter) {
                case "< $10":
                  return price < 10;
                case "$10 - $20":
                  return price >= 10 && price <= 20;
                case "> $20":
                  return price > 20;
                default:
                  return true;
              }
            });
      
          const sortedItems = [...filteredItems].sort((a, b) => {
              const priceA = parseFloat(a.price.slice(1));
              const priceB = parseFloat(b.price.slice(1));
            
              switch (sortType) {
                case "Latest":
                  return b.name.localeCompare(a.name);
                case "Best seller":
                  return b.price.length - a.price.length;
                case "Price":
                  return priceA - priceB;
                default:
                  return 0;
              }
            });
        
          const startIndex = (currentPage - 1) * itemsPerPage;
          const currentItems = products.slice(startIndex, startIndex + itemsPerPage);
          const totalPages = Math.ceil(sortedItems.length / itemsPerPage);
  return (
    <div>
      <SortBar 
            activeSort={sortType}
            onSortChange={setSortType}
            priceFilter={priceFilter}
            onPriceFilterChange={setPriceFilter}
            totalProducts={filteredItems.length}
        />
         <div className="flex flex-wrap gap-[34px] justify-round mt-10 px-24">
        {sortedItems
            .slice(startIndex, startIndex + itemsPerPage)
            .map((item, idx) => (
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
    </div>
  );
};
export default HandmadeCrafts