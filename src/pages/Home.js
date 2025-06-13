import React, { useEffect } from 'react';
import bgImage from "../assets/background.png"; 
import bgImage2 from "../assets/background2.png"; 
import polaroid1 from "../assets/giftone.png"; 
import polaroid2 from "../assets/gifttwo.png"; 
import MoreInfo from "../components/MoreInfo";
import Card from "../components/Card"
import nonla from '../assets/nonla.png';
import handmade1 from '../assets/handmade1.png';
import handmade2 from '../assets/handmade2.png';
import handmade3 from '../assets/handmade3.png';
import peter from '../assets/peter.png';
import maria from '../assets/maria.png';
import virus from '../assets/virus.png';
import { useState } from "react";
import {HiChevronRight  } from "react-icons/hi2";
import { GrLinkNext } from "react-icons/gr";
import { fetchProducts } from '../api/productApi';
const images = [
  {
    src: handmade1,
    title: "Handmade Jewelry",
    number: "01",
    height: "h-80",
  },
  {
    src: handmade2,
    title: "Sketching Ideas",
    number: "02",
    height: "h-60",
  },
  {
    src: handmade3,
    title: "Handmade Jewelry",
    number: "03",
    height: "h-60",
  },
  {
    src: handmade2,
    title: "Sketching Ideas",
    number: "04",
    height: "h-60",
  },
];
const HomePage = () => {
  const [current, setCurrent] = useState(0);
  const [product, setProduct] = useState([]);
  useEffect(()=>{
    const loadProducts = async()=>{
      try{
        const data = await fetchProducts();
        setProduct(data.products)
        console.log(product)
      }
      catch(err){
        console.log("Không thể tải sản phẩm", err)
      }
    }
    loadProducts();
  },[])

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };
  const firstImage = images[current % images.length];
  const secondImage = images[(current + 1) % images.length];
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };
  return (
    <div className="wrapper">
      <div
          className="w-full h-[500px] bg-cover bg-center flex items-center p-10"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="w-full h-full bg-white/60 flex flex-col md:flex-row justify-between items-center px-6 md:px-16">
            <div className="max-w-lg py-10">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
                Capture the Moment,<br />Gift the Memory
              </h1>
              <p className="mt-5 text-gray-700 text-lg">
                Gifts as Unique as Your Journey
              </p>
              <button className="ml-28 mt-6 bg-[#FAA74F] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-orange-500 transition">
                SHOP NOW
              </button>
            </div>

            <div className="relative mt-8 md:mt-0 w-[350px] h-[300px]">
              <div className="absolute top-0 left-0 w-48 bg-white p-4 rounded shadow-xl rotate-[-10deg] text-start">
                <img src={polaroid1} alt="Polaroid 1" className="w-full rounded mb-2" />
                <p className="text-[10px] text-gray-600 font-italianno">Memories For Life</p>
              </div>

              <div className="absolute w-56 top-24 left-36 bg-white p-4 rounded shadow-xl rotate-[10deg] text-center">
                <img src={polaroid2} alt="Polaroid 2" className="w-full rounded mb-2" />
              </div>
            </div>
          </div>
        </div>
        <MoreInfo/>
       <div className="px-24">
        <div className="text-center text-[#FAA74F] text-3xl font-bold mt-12">Trending now</div>
        <div className="text-center text-lg my-6">Popular products</div>
        <div className="flex flex-wrap gap-[34px] justify-round mt-10">
         {
          product.map(pro => pro.stock <= 10 && <Card image={pro.images?.[0] || nonla} name={pro.name} price={pro.price}/>)
         }
        </div>
        <div className="flex justify-center">
          <button className="px-4 py-2 border-[#FAA74F] border-[1px] text-[#FAA74F] rounded-[6px] hover:bg-orange-100 mt-6">Show more</button>
        </div>
       </div>
       <div className="px-24">
        <div className="text-center text-[#FAA74F] text-3xl font-bold mt-12">Featured products</div>
        <div className="text-center text-lg my-6">Discover our curated selection of featured products</div>
        <div className="flex flex-wrap gap-[34px] justify-round mt-10">
        {
          product.map(pro => pro.price >150 && <Card image={pro.images?.[0] || nonla} name={pro.name} price={pro.price}/>)
        }
        </div>
        <div className="flex justify-center">
          <button className="px-4 py-2 border-[#FAA74F] border-[1px] text-[#FAA74F] rounded-[6px] mb-12 hover:bg-orange-100 mt-6">Show more</button>
        </div>
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
        <div className="flex items-center justify-center bg-gray-100 p-8">
          <div className="flex w-full max-w-6xl overflow-hidden">
            <div className="w-1/2 p-10 flex flex-col justify-center">
              <h1 className="text-4xl font-bold mb-4">
                50+ Beautiful <br /> handmade gift
              </h1>
              <p className="text-gray-500 mb-6">
                Our designer already made a lot of beautiful prototype of handmade gift that inspire you
              </p>
              <button className="bg-orange-400 text-white px-6 py-2 rounded-full w-max hover:bg-orange-500">
                Explore More
              </button>
            </div>

            <div className="w-1/2 relative grid grid-cols-2 gap-2 p-4 items-start">
              {[firstImage, secondImage].map((img, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-xl shadow ${
                    index === 0 ? "h-80" : "h-60"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="object-cover w-full h-full"
                  />
                  {index === 0 && (
                    <div className="absolute w-32 bottom-4 left-4 bg-white bg-opacity-80 p-3 rounded">
                      <p className="text-sm text-gray-600">{img.number}</p>
                      <p className="text-lg font-semibold">{img.title}</p>
                      <GrLinkNext className="absolute bg-[#FAA74F] p-3 left-32 bottom-0 text-white text-[38px]"/>
                    </div>
                  )}
                </div>
              ))}

              <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                <button
                  onClick={nextSlide}
                  className="bg-white p-2 rounded-full shadow hover:bg-gray-200"
                >
                  <HiChevronRight size={20} />
                </button>
              </div>

              <div className="absolute bottom-12 right-5 left-2/3 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === current ? "bg-orange-400" : "bg-gray-300"
                    }`}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-center px-24">
        <h2 className="text-[32px] font-bold text-[#FAA74F] mt-8 mb-4">What Others Are Saying About Us</h2>
        <p className="text-[18px] text-black mb-10">Join The Hundreds Of Happy Customers Who Love Our Souvenirs!</p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Peter Pan",
              role: "Customer",
              img: peter,
              text: "I absolutely love this souvenir! The craftsmanship is impeccable, and it serves as a beautiful reminder of my trip. The details are so intricate, and I can tell a lot of care went into making it. It's now one of my favorite pieces in my home, and I will definitely be back for more!",
            },
            {
              name: "Maria Anna",
              role: "Customer",
              img: maria,
              text: "This was the perfect gift for my friend. They absolutely adored it! The quality is outstanding, and it really captures the essence of the local culture. It's something unique that you can't find anywhere else, and the presentation was lovely. I highly recommend it to anyone looking for something special!",
            },
            {
              name: "Viruss Ice Cream",
              role: "Customer",
              img: virus,
              text: "I purchased this as a gift for my family, and they were all so impressed. The quality exceeded my expectations, and the unique design really stands out. It's the perfect combination of local tradition and modern style. I'm so happy I found this gem!",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow border-b-4 border-blue-500 flex flex-col"
            >
              <div className="flex items-center">
                <img
                  src={testimonial.img}
                  className="w-16 h-16 rounded-full mb-4 object-cover mr-4"
                  alt={testimonial.name}
                />
               <div className="flex flex-col items-start">
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{testimonial.role}</p>
               </div>
              </div>
              <p className="text-sm text-gray-700 text-start text-clip">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default HomePage;
