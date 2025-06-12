import CardEvent from "../components/CardEvent";
import { useState } from "react";
import Bevent from "../assets/bannerevent.png"
import Event1 from "../assets/event1.png"
import Event2 from "../assets/event2.png"
import Event3 from "../assets/event3.png"
import Pagination from "../components/Pagination";
import SortEvent from "../components/SortEvent";

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


export default function Events() {
    const [sortType, setSortType] = useState("Popular");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = events.slice(startIndex, startIndex + itemsPerPage);
    const totalPages = Math.ceil(events.length / itemsPerPage);
  return (
    <div className="py-8">
      <div className="text-sm text-gray-400 px-4 md:px-10 lg:px-24">
        Home &gt; <span className="text-black font-medium">Events</span>
      </div>

      <img src ={Bevent} alt="Banner Event" className="w-full"/>
      <SortEvent 
        activeSort={sortType}
        onSortChange={setSortType}
        totalProducts={events.length}
        />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 px-4 md:px-10 lg:px-24">
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
