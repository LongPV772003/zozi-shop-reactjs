import React from 'react';
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Card = ({ image, name, price }) => {
    const slug = name.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link to={`/productdetail/${slug}`} state={{ image, name, price }} className="max-w-xs w-60 rounded overflow-hidden shadow-lg">
      <div className="relative">
        <img className="h-48 w-full" src={image} alt={name} />
        <div className="absolute top-4 left-4 bg-green-500 text-white text-xs px-2 py-1 rounded">New</div>
        <div className="absolute top-2 right-4 bg-gray-100 text-gray-800 p-2 rounded">
          <IoHeartOutline className="text-[20px]" />
        </div>
      </div>
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <div className="text-[14px] mb-1">{name}</div>
          <p className="text-red-500 text-base">{price}</p>
        </div>
        <button
          className="bg-yellow-500 text-white p-3 rounded"
        >
          <IoCartOutline />
        </button>
      </div>
    </Link>
  );
};

export default Card;
