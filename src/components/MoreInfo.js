import React from 'react';
import { IoGiftOutline } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import { MdSecurity } from "react-icons/md";
import { RiStore2Line } from "react-icons/ri";
const MoreInfo = () => {
  return (
    <div className = "program flex justify-evenly text-xl text-[#FAA74F] bg-[#F5F5F5]">
          <div className="gift flex -center justify-center items-center py-8 mr-8">
            <IoGiftOutline className="mr-5 text-3xl"/>
            <div>Gift baskets</div>
          </div>
          <div className="gift flex -center justify-center items-center mr-8">
          <div className="border-l-2 h-14 border-[#FAA74F] mr-7"></div>
            <CiDiscount1 className="mr-5 text-3xl"/>
            <div>Discount program</div>
          </div>
          <div className="gift flex -center justify-center items-center mr-8">
          <div className="border-l-2 h-14 border-[#FAA74F] mr-7"></div>
            <MdSecurity className="mr-5 text-3xl"/>
            <div>Buyer Protection</div>
          </div>
          <div className="gift flex -center justify-center items-center">
          <div className="border-l-2 h-14 border-[#FAA74F] mr-7"></div>
            <RiStore2Line className="mr-5 text-3xl"/>
            <div>Offline Stores</div>
          </div>
        </div>
  );
};

export default MoreInfo;
