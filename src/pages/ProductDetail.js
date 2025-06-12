import { useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { IoIosAddCircleOutline, } from "react-icons/io";
import { FiMinusCircle } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import CommentCard from '../components/CommentCard';
import peter from '../assets/peter.png';
import maria from '../assets/maria.png';
import virus from '../assets/virus.png';
import nonla from '../assets/nonla.png';
import handmade1 from '../assets/handmade1.png';
import handmade2 from '../assets/handmade2.png';
import handmade3 from '../assets/handmade3.png';
import Pagination from "../components/Pagination";
import Card from "../components/Card";
import { useCart } from '../context/CartContext';
const ProductDetail = () => {
  const { state } = useLocation();
  const { slug } = useParams();
  const [count,setCount] = useState(1)
  const handleIncrease = () =>{
    setCount(count + 1)
  }
  const handleDecrease = () =>{
    if (count > 1) {
      setCount(count - 1);
    }
  }
  const [showMore,setShowMore] = useState(false)
  const handleShow = () =>{
    setShowMore(!showMore)
  }
  const product = state || {
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
  const { addToCart } = useCart();
  return (
    <div>
      <div className="text-sm text-gray-500 px-24 py-4">
        <Link to="/" className="hover:underline text-gray-400">Home</Link> {'>'}{" "}
        <Link to="/category" className="hover:underline text-gray-400">Category</Link> {'>'}{" "}
        <Link to="/handmade" className="hover:underline text-gray-400">Handmade Crafts</Link> {'>'}{" "}
        <span className="text-gray-700">{product.name}</span>
      </div>

      <div className="px-24 py-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col">
          <img src={product.image} alt={product.name} className="rounded-xl w-full object-cover max-h-[400px]" />
          <div className="flex items-center gap-6 mt-6">
            <img src={product.image} alt={product.name} className="rounded-xl w-[100px] h-[100px] object-cover " />
            <img src={product.image} alt={product.name} className="rounded-xl w-[100px] h-[100px] object-cover " />
            <img src={product.image} alt={product.name} className="rounded-xl w-[100px] h-[100px] object-cover " />
            <img src={product.image} alt={product.name} className="rounded-xl w-[100px] h-[100px] object-cover " />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl">{product.name}</h1>
          <p className="text-[#DA1F27] text-3xl mt-2">{product.price}</p>
          <p className="mt-2">Status: <span className="text-[#0098FF]">In stock</span></p>
          <p>Type: <span className="text-[#0098FF]">Hand made</span></p>
          <p className="flex items-center text-[#FAA74F] gap-2">Count: <FiMinusCircle onClick={handleDecrease} className="text-xl ml-4"/><div className="px-3 py-1 border-[1px] border-[#FAA74F]">{count}</div> <IoIosAddCircleOutline onClick={handleIncrease} className="text-xl mr-4"/> <span className="text-gray-400 text-sm">49,673 products available</span></p>

          <div className="flex gap-2 items-center mt-4" >
            <button onClick={() => addToCart({ name: product.name, price: product.price, image: product.image, quantity: count })} className="px-6 w-full py-2 flex items-center justify-center border border-[#FAA74F] text-[#FAA74F] rounded hover:bg-orange-50">Add To Cart <IoCartOutline className="text-lg ml-2"/></button>
            <button className="px-6 w-full py-2 bg-[#FAA74F] text-white rounded hover:bg-orange-500">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="px-24 mt-10">
        <div className="h-[1px] w-full bg-[#D9D9D9] mt-[-4%] mb-[5%]"></div>
        <h2 className="text-2xl font-semibold text-[#FAA74F] mb-2 text-center">Description</h2>
        <p className="my-6">
          The Card Box Bag in the HimHip gift set will be delivered randomly, please do not choose.
        </p>
        <p className="mb-10">
          Today's gifts are no longer simply a way to convey feelings, but they also have more meanings and play an increasingly important role. For example: helping to build a close relationship between business partners, helping businesses show gratitude and retain loyal customers, helping colleagues and employees express respect to each other.
        </p>
      </div>
      <div className="flex items-center px-24">
        <img src={product.image} alt={product.name} className="rounded-xl w-[50%] h-[350px] object-cover mr-8" />
        <img src={product.image} alt={product.name} className="rounded-xl w-[50%] h-[350px] object-cover " />
      </div>
      <div className="px-4 md:px-24 w-full">
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
      <div className="px-4 md:px-24 w-full">
        <div className="text-3xl font-semibold text-center text-[#FAA74F] mb-4 mt-4">Related products</div>
        <div className="flex flex-wrap gap-[34px] justify-round mt-10">
          <Card image={nonla} name="Vietnamese conical hat" price="$15"/>
          <Card image={handmade1} name="Vietnamese conical hat" price="$15"/>
          <Card image={handmade2} name="Vietnamese conical hat" price="$55"/>
          <Card image={handmade3} name="Vietnamese conical hat" price="$25"/>
          {
            showMore ?
             <>
              <Card image={nonla} name="Vietnamese conical hat" price="$15"/>
              <Card image={handmade1} name="Vietnamese conical hat" price="$15"/>
              <Card image={handmade2} name="Vietnamese conical hat" price="$15"/>
              <Card image={handmade3} name="Vietnamese conical hat" price="$15"/>
              <Card image={nonla} name="Vietnamese conical hat" price="$15"/>
              <Card image={handmade1} name="Vietnamese conical hat" price="$15"/>
              <Card image={handmade2} name="Vietnamese conical hat" price="$15"/>
              <Card image={handmade3} name="Vietnamese conical hat" price="$15"/>
                </>
             : <></>
          }
        </div>
      </div>
      <div className="flex justify-center">
          <button onClick={handleShow} className="px-4 py-2 border-[#FAA74F] border-[1px] text-[#FAA74F] rounded-[6px] mb-12 hover:bg-orange-100 mt-8">{showMore ? 'Show less' : 'Show more'}</button>
        </div>
    </div>
  );
};

export default ProductDetail;
