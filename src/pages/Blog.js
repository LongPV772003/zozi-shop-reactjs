import CardEvent from "../components/CardEvent";
import { useState } from "react";
import Bgblog from "../assets/bgbloc.png"
import Event1 from "../assets/event1.png"
import Event2 from "../assets/event2.png"
import Event3 from "../assets/event3.png"
import Pagination from "../components/Pagination";
import SortEvent from "../components/SortEvent";
import { FaRegCircleUser } from "react-icons/fa6";

const images = [Event1, Event2, Event3];

const labels = ["Handmade", "Local", "Eco-Friendly", "Limited Edition"];
const titles = [
  "The Ultimate Guide to Souvenir Gifts",
  "Top 10 Artisan Picks This Summer",
  "Creative Handmade Crafts to Try",
  "Eco-Friendly Gifts for Every Occasion",
  "Unique Local Finds You’ll Love",
  "From Market to Masterpiece",
  "Celebrate Culture with Local Art",
  "Perfect Gifts Under $20",
  "Trending Craft Styles in 2025",
  "Discover Artisan Markets"
];

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getRandomDate = () => {
  const start = new Date(2022, 0, 1);
  const end = new Date(2024, 11, 31);
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

const events = Array.from({ length: 50 }, (_, i) => ({
  image: images[i % images.length],
  title: getRandomElement(titles),
  date: getRandomDate(),
  label: getRandomElement(labels),
  description: "aaaaaaaaaaaaaaaaaa",
}));


export default function Blog() {
    const [sortType, setSortType] = useState("Popular");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = events.slice(startIndex, startIndex + itemsPerPage);
    const totalPages = Math.ceil(events.length / itemsPerPage);
  return (
    <div className="py-8">
      <div className="text-sm text-gray-400 px-4 md:px-10 lg:px-24">
        Home &gt; <span className="text-black font-medium">Blog</span>
      </div>
      <div className="px-4 md:px-10 lg:px-24 mt-6">
        <div className="relative w-full h-80 rounded-xl overflow-hidden ">
            <img src={Bgblog} alt="Banner" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex flex-col justify-end py-6 px-10 text-white z-10 w-[50%]">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm mb-2 inline-block w-max">Hand made</span>
                <h2 className="text-xl font-semibold mb-2">The Impact of Technology on the Workplace: How Technology is Changing</h2>
                <div className="flex items-center gap-3 text-sm text-gray-200">
                <div className="flex items-center gap-1 my-2">
                    <FaRegCircleUser className="w-5 h-5 rounded-full" alt="Author" />
                    <span >Tracey Wilson</span>
                </div>
                <span>•</span>
                <span>August 20, 2022</span>
                </div>
            </div>
            </div>
      </div>


      <SortEvent 
        activeSort={sortType}
        onSortChange={setSortType}
        totalProducts={events.length}
        />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 px-4 md:px-10 lg:px-24 mt-12">
        {currentItems.map((e, index) => (
          <CardEvent key={index} {...e} />
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
}
