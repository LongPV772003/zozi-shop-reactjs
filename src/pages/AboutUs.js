import React from "react";
import About from '../assets/aboutus.png';
import Facebook from '../assets/facebook.png';
import Instagram from '../assets/instagram.png';
import Github from '../assets/git.png';

const AboutUs = () => {
  return (
    <div className="mb-24">
        <div className="text-sm text-gray-400 px-4 md:px-10 lg:px-24 my-6">
            Home &gt; <span className="text-black font-medium">Blog</span>
        </div>
      <div className="w-full h-80 bg-cover bg-center" style={{ backgroundImage: `url(${About})`}}></div>
      <section className="mx-auto px-6 py-12 px-4 md:px-10 lg:px-24">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="text-gray-700">
        At Souvenir Gift, we believe that the best souvenirs are those that capture the essence of a place and the memories it holds. Our mission is to offer a carefully curated selection of high-quality, handmade gifts that serve as timeless reminders of your travels and experiences.
        </p>
        <p className="text-gray-700">
        We work with local artisans and creators to bring you unique, culturally-rich souvenirs that reflect the beauty and diversity of the regions they come from. Whether you're looking for a custom piece of jewelry, handcrafted pottery, or a meaningful keepsake, each item in our collection is designed to evoke the emotions and memories of the special moments in your life.        </p>
        <p className="text-gray-700">
        Our commitment is to provide you with not just a gift, but a story that connects you to the people, places, and cultures that inspire us all. Each souvenir is thoughtfully crafted, making it the perfect gift for yourself or someone special.     </p>
        <p className="text-gray-700">
          Thank you for choosing Souvenir Gift — where memories are made, and gifts are treasured.
        </p>
      </section>
      <section className="bg-gray-50 pt-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">Get in <span className="text-[#FAA74F]">Touch</span></h2>
            <p className="text-gray-600 mb-6">
              We'd love to hear from you! Whether you have a question, feedback, or need help — we’re here to assist.
            </p>
            <form className="w-full space-y-5 text-sm text-gray-700 mb-12">
                <div>
                    <label className="block mb-1 font-semibold">Name</label>
                    <input
                    type="text"
                    placeholder="Enter your name here"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-semibold">Email</label>
                    <input
                    type="email"
                    placeholder="Enter your email here"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-semibold">Phone number</label>
                    <div className="flex">
                    <span className="px-4 py-2 bg-gray-100 border border-r-0 rounded-l-md ">+84</span>
                    <input
                        type="tel"
                        placeholder="0385xxxxxx"
                        className="w-full px-4 py-2 border rounded-r-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    </div>
                </div>
                <div>
                    <label className="block mb-1 font-semibold">How did you find us?</label>
                    <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400">
                    <option value="">Facebook, Instagram,…</option>
                    <option value="facebook">Facebook</option>
                    <option value="instagram">Instagram</option>
                    <option value="search">Search Engine</option>
                    <option value="friend">From a Friend</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#FAA74F] text-white py-2 rounded-md hover:bg-orange-600 transition font-semibold"
                >
                    SEND
                </button>
                </form>


            <div className="flex space-x-6 mt-6 text-sm">
              <a href="" className="flex items-center">
                <img src ={Facebook} alt ="Facebook" className="w-8 h-8 mr-4"/>
                <div className="flex flex-col">
                    <div className="font-semibold">Facebook</div>
                    <div className="text-[#FAA74F]">Zozi@facebook.com</div>
                </div>
              </a>
              <a href="" className="flex items-center">
                <img src ={Instagram} alt ="Facebook" className="w-8 h-8 mr-4"/>
                <div className="flex flex-col">
                    <div className="font-semibold">Instagram</div>
                    <div className="text-[#FAA74F]">zozi@ins.vn</div>
                </div>
              </a>
              <a href="" className="flex items-center">
                <img src ={Github} alt ="Facebook" className="w-8 h-8 mr-4"/>
                <div className="flex flex-col">
                    <div className="font-semibold">Github</div>
                    <div className="text-[#FAA74F]">zozi@com.vn</div>
                </div>
              </a>
            </div>
          </div>

          <div className="w-full h-full">
            <iframe
              title="map"
              className="w-full h-full rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.005118700632!2d105.8222174748616!3d21.03127918061494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4a94b19c3d%3A0x92a7d660df1638f7!2sHoan%20Kiem%20Lake!5e0!3m2!1sen!2s!4v1713332786767!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
