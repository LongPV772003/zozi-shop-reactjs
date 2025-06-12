import { useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import CommentCard from '../components/CommentCard';
import peter from '../assets/peter.png';
import maria from '../assets/maria.png';
import virus from '../assets/virus.png';
import Pagination from "../components/Pagination";
import CardEvent from "../components/CardEvent";
import Event1 from "../assets/event1.png"
import Event2 from "../assets/event2.png"
import Event3 from "../assets/event3.png"

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

const events = Array.from({ length: 10 }, (_, i) => ({
  image: images[i % images.length],
  title: getRandomElement(titles),
  date: getRandomDate(),
  label: getRandomElement(labels),
  description: "aaaaaaaaaaaaaaaaaa",
}));

const BlogDetail = () => {
  const { state } = useLocation();
  const { slug } = useParams();

  const [showMore,setShowMore] = useState(false)
  const handleShow = () =>{
    setShowMore(!showMore)
  }
  const visibleEvents = showMore ? events : events.slice(0, 3);
  const event = state || {
    name: slug.replace(/-/g, " "),
    price: "$20",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdD7G7FFg1UKZFXhyP45b4AvY-qKEFvfjj3w&s",
  };

  const commentsData = [
    {
      avatar: peter,
      name: 'John D.',
      stars: 4,
      content: "I've been consistently impressed with the quality of service provided by this website. They have exceeded my expectations and delivered exceptional results. Highly recommended!"
    },
    {
      avatar: virus,
      name: 'Jane S.',
      stars: 5,
      content: "Amazing experience! The support was fast and very helpful."
    },
    {
      avatar: maria,
      name: 'Mark T.',
      stars: 3,
      content: "Service is decent, could be improved but still good value overall."
    },
    {
      avatar: virus,
      name: 'Jane S.',
      stars: 3,
      content: "AGooddd"
    },
    {
      avatar: virus,
      name: 'Jane S.',
      stars: 1,
      content: "AGooddd"
    },
    {
      avatar: virus,
      name: 'Jane S.',
      stars: 3,
      content: "AGooddd"
    }
  ];
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const totalPages = Math.ceil(commentsData.length / itemsPerPage);

  return (
    <div className="px-4 md:px-24">
      <div className="text-sm my-6">
        <Link to="/" className="hover:underline text-gray-400">Home</Link> {'>'}{" "}
        <Link to="/category" className="hover:underline">event</Link> 
      </div>

      <div className="">
        <div className="font-semibold text-xl">{event.title}</div>
        <div className="flex items-center justify-between py-6">
            <div className="px-2 py-1 bg-[#0098FF] text-white text-sm rounded">{event.label}</div>
            <div className="text-sm text-[#2E4156]">{event.date}</div>
        </div>
        <img src={event.image} alt ={event.title} className="w-full h-[20%] pb-6"/>
        <div>{event.description}</div>
      </div>
      <div className=" w-full">
        <div className="h-[1px] w-full bg-[#D9D9D9] mt-[3%] mb-[3%]"></div>
        <div className="max-w-6xl mx-auto py-6">
          <h2 className="text-3xl font-semibold text-center text-[#FAA74F] mb-4">
            Comments ({commentsData.length})
          </h2>

          <div className="space-y-6 w-[100%]">
            {commentsData .slice(startIndex, startIndex + itemsPerPage).map((item, index) => (
              <CommentCard key={index} {...item} />
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4">
            <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            />
        </div>
      </div>
      <div className="w-full">
        <div className="text-3xl font-semibold text-center text-[#FAA74F] mb-6 mt-6">Related Events</div>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
               {visibleEvents.map((e, index) => (
                 <CardEvent key={index} {...e} />
               ))}
        </div>
      </div>
      <div className="flex justify-center">
          <button onClick={handleShow} className="px-4 py-2 border-[#FAA74F] border-[1px] text-[#FAA74F] rounded-[6px] mb-12 hover:bg-orange-100 mt-8">{showMore ? 'Show less' : 'Show more'}</button>
        </div>
    </div>
  );
};

export default BlogDetail;
