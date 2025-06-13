import { useRef, useState, useContext, useEffect } from 'react';
import { useParams } from "react-router-dom";
import CategoryBanner from "../components/CategoryLink";
import Card from "../components/Card";
import nonla from '../assets/nonla.png';
import SortBar from '../components/SortBar';
import Pagination from "../components/Pagination";
import { fetchCategories } from "../api/categoryApi";
import { fetchProducts } from "../api/productApi";
import CategoryLink from '../components/CategoryLink';
import bgSouvenir from '../assets/bgSouvenir.png';

const CategoryPage = () => {
  const { slug } = useParams();
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState([]);
  const [priceFilter, setPriceFilter] = useState("All");
  const [sortType, setSortType] = useState("Latest");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data.categories);
      } catch (err) {
        console.error("Không thể tải danh mục", err);
      }
    };
    loadCategories();
  }, []);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProduct(data.products);
      } catch (err) {
        console.log("Không thể tải sản phẩm", err);
      }
    };
    loadProducts();
  }, []);
  useEffect(() => setCurrentPage(1), [sortType, priceFilter, slug]);
  const productCategory = product.filter(pro => pro.category === slug);

  // Lọc theo giá
  const filteredItems = productCategory.filter((item) => {
    const price = parseFloat(item.price?.toString().replace("$", "") || 0);
    switch (priceFilter) {
      case "< $50":
        return price < 50;
      case "$50 - $200":
        return price >= 50 && price <= 200;
      case "> $200":
        return price > 200;
      default:
        return true;
    }
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    const priceA = parseFloat(a.price);
    const priceB = parseFloat(b.price);

    switch (sortType) {
      case "Latest":
        return new Date(b.createdAt) - new Date(a.createdAt);
      case "Best seller":
        return b.price.toString().length - a.price.toString().length;
      case "Name A-Z":
        return a.name.localeCompare(b.name);
      case "Name Z-A":
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  // Phân trang trên sortedItems
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = sortedItems.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(sortedItems.length / itemsPerPage);

  return (
    <div>
      <CategoryLink title={slug} image={bgSouvenir}/>
      <SortBar
        activeSort={sortType}
        onSortChange={setSortType}
        priceFilter={priceFilter}
        onPriceFilterChange={setPriceFilter}
        totalProducts={filteredItems.length}
      />
      <div className="flex flex-wrap gap-[34px] justify-round mt-10 px-24">
        {currentItems.map((pro, idx) => (
          <Card
            key={idx}
            image={pro.images?.[0] || nonla}
            name={pro.name}
            price={pro.price}
          />
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

export default CategoryPage;
