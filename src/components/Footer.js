import React from 'react';
import { FaFacebook,FaInstagram, FaPinterestP,FaYoutube } from "react-icons/fa";
import payment from '../assets/payment.png';
import logo from '../assets/logo2.png';
const Footer = () => {
  return (
    <footer className="w-full px-24 bg-gray-50 pt-10 pb-6 mt-4 text-sm">
        <div className="px-4 flex gap-16">
          <div>
            <img src={logo} alt="Logo" className="w-18 mb-3" />
            <p className="mb-4 text-gray-600">Unique Gifts, Unforgettable Memories</p>
            <div className="flex space-x-3 text-gray-700 text-xl">
              <FaFacebook className="hover:text-[#FAA74F] cursor-pointer"/>
              <FaInstagram className="hover:text-[#FAA74F] cursor-pointer"/>
              <FaPinterestP className="hover:text-[#FAA74F] cursor-pointer"/>
              <FaYoutube className="hover:text-[#FAA74F] cursor-pointer"/>
            </div>
          </div>
          <div>
            <h4 className="text-gray-400 font-semibold uppercase mb-3">Category</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="hover:text-[#FAA74F] cursor-pointer">Handmade Crafts</li>
              <li className="hover:text-[#FAA74F] cursor-pointer">Home Decor</li>
              <li className="hover:text-[#FAA74F] cursor-pointer">Jewelry & Accessories</li>
              <li className="hover:text-[#FAA74F] cursor-pointer">Personalized Gifts</li>
              <li className="hover:text-[#FAA74F] cursor-pointer">Art & Paintings</li>
              <li className="hover:text-[#FAA74F] cursor-pointer">Cultural Souvenirs</li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-400 font-semibold uppercase mb-3">Support</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="hover:text-[#FAA74F] cursor-pointer" >Help & Support</li>
              <li className="hover:text-[#FAA74F] cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-[#FAA74F] cursor-pointer">Privacy Policy</li>
              <li className="hover:text-[#FAA74F] cursor-pointer">Help</li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-400 font-semibold uppercase mb-3">Newsletter</h4>
            <div className="flex mb-5">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 border rounded-[8px] mr-5"
              />
              <button className="bg-[#FAA74F] text-white px-4 py-2 rounded-[8px] hover:bg-orange-500">Subscribe</button>
            </div>
            <p className="">Your Journey, Your Story, Our Gifts</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-12 flex justify-between items-center">
          <p className="text-gray-500">@ 2025 - ZOZI - Designed & Develop by monzB</p>
          <div className="flex space-x-4">
            <img src={payment} alt="payment" className="h-6" />
          </div>
        </div>
      </footer>
  );
};
export default Footer;
