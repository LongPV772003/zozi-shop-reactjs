import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { useCart } from '../context/CartContext';
import { RiArrowDropDownLine } from "react-icons/ri";
import { useAuth } from "../context/AuthContext";
import Tippy from "@tippyjs/react";


const Navbar = () => {
  const { user, logout } = useAuth();
  console.log(user)
  const [menuOpen, setMenuOpen] = useState(false);
  const { toggleCart } = useCart();
  const [showMenu, setShowMenu] = useState(false);
  const [active,setActive] = useState("home")
  const handleMenuClick = (menu) => {
    setActive(menu.toLowerCase().replace(/\s+/g, "-"));
    setMenuOpen(false);
  };
  const categories = [
    "Handmade Crafts",
    "Home Decor",
    "Jewelry & Accessories",
    "Personalized Gifts",
    "Art & Paintings",
    "Cultural Souvenirs",
  ];

  return (
    <nav className="bg-white border-b shadow-sm px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-around">
        <Link to="/" className="flex items-center" >
          <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />
        </Link>

        <div className="hidden md:flex space-x-8 text-base font-medium">
          <Link to="/" onClick={() => handleMenuClick("home")} className={`${active === "home" ? "text-[#FAA74F]" : "text-gray-700"} hover:text-[#FAA74F]`}>Home</Link>
          <div
            className="relative"
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
          >
            <Link
              to="/category"
              className="flex justify-center items-center text-gray-700 hover:text-[#FAA74F]"
            >
              Category
              <RiArrowDropDownLine className="text-[28px]" />
            </Link>

            {showMenu && (
              <div className="absolute top-[90%] left-0 w-56 mt-2 bg-white border rounded shadow z-50">
                {categories.map((cat, idx) => (
                  <Link
                    key={idx}
                    to={`/category/${cat.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={() => handleMenuClick(cat)} className={`${
                      active === cat.toLowerCase().replace(/\s+/g, "-") ? "text-[#FAA74F]" : "text-gray-700"
                    } block px-4 py-2 hover:bg-gray-100 hover:text-[#FAA74F] transition`}
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/events" onClick={() => handleMenuClick("events")} className={`${active === "events" ? "text-[#FAA74F]" : "text-gray-700"} hover:text-[#FAA74F]`}>Events</Link>
          <Link to="/blog" onClick={() => handleMenuClick("blog")} className={`${active === "blog" ? "text-[#FAA74F]" : "text-gray-700"} hover:text-[#FAA74F]`}>Blog</Link>
          <Link to="/contact" onClick={() => handleMenuClick("contact")} className={`${active === "contact" ? "text-[#FAA74F]" : "text-gray-700"} hover:text-[#FAA74F]`}>Contact us</Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Link onClick={() => handleMenuClick("search")} className={`${active === "search" ? "text-[#FAA74F]" : ""}`} to= "/search" ><IoIosSearch className="text-2xl text-gray-700 hover:text-[#FAA74F] cursor-pointer"/></Link>
          <IoCartOutline className="text-2xl text-gray-700 hover:text-[#FAA74F] cursor-pointer"  onClick={toggleCart}/>
          {user ? (
            <Tippy
              content={
                <div className="flex flex-col bg-white shadow-lg rounded p-2 text-sm">
                  <span className="px-2 py-1 font-medium">{user.name || 'User'}</span>
                  <button
                    onClick={logout}
                    className="hover:bg-red-100 px-2 py-1 text-left text-red-500 rounded"
                  >
                    Đăng xuất
                  </button>
                </div>
              }
              interactive
              trigger="click"
              placement="bottom"
            >
              <div>
                <FaRegUser className="text-xl text-gray-700 hover:text-[#FAA74F] cursor-pointer" />
              </div>
            </Tippy>
          ) : (
            <Tippy
              content={
                <div className="flex flex-col bg-white shadow-lg rounded p-2 text-sm">
                  <Link to="/login" className="hover:bg-[#FAA74F] py-1 px-2 rounded">Đăng nhập</Link>
                  <Link to="/register" className="hover:bg-[#FAA74F] py-1 px-2 rounded">Đăng ký</Link>
                </div>
              }
              interactive
              trigger="click"
              placement="bottom"
            >
              <div>
                <FaRegUser className="text-xl text-gray-700 hover:text-[#FAA74F] cursor-pointer" />
              </div>
            </Tippy>
          )}
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-base font-medium flex flex-col px-4">
          <Link to="/" className="text-[#FAA74F]" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/category" className="text-gray-700 hover:text-[#FAA74F]" onClick={() => setMenuOpen(false)}>Category</Link>
          <Link to="/events" className="text-gray-700 hover:text-[#FAA74F]" onClick={() => setMenuOpen(false)}>Events</Link>
          <Link to="/blog" className="text-gray-700 hover:text-[#FAA74F]" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link to="/contact" className="text-gray-700 hover:text-[#FAA74F]" onClick={() => setMenuOpen(false)}>Contact us</Link>
          <div className="flex items-center space-x-4 pt-2">
            <IoIosSearch className="text-2xl text-gray-700 hover:text-[#FAA74F] cursor-pointer"/>
            <IoCartOutline className="text-2xl text-gray-700 hover:text-[#FAA74F] cursor-pointer"/>
            {user ? (
              <Tippy
                content={
                  <div className="flex flex-col bg-white shadow-lg rounded p-2 text-sm">
                    <span className="px-2 py-1 font-medium">{user.name || 'User'}</span>
                    <button
                      onClick={logout}
                      className="hover:bg-red-100 px-2 py-1 text-left text-red-500 rounded"
                    >
                      Đăng xuất
                    </button>
                  </div>
                }
                interactive
                trigger="click"
                placement="bottom"
              >
                <div>
                  <FaRegUser className="text-xl text-gray-700 hover:text-[#FAA74F] cursor-pointer" />
                </div>
              </Tippy>
            ) : (
              <Tippy
                content={
                  <div className="flex flex-col bg-white shadow-lg rounded p-2 text-sm">
                    <Link to="/login" className="hover:bg-[#FAA74F] py-1 px-2 rounded">Đăng nhập</Link>
                    <Link to="/register" className="hover:bg-[#FAA74F] py-1 px-2 rounded">Đăng ký</Link>
                  </div>
                }
                interactive
                trigger="click"
                placement="bottom"
              >
                <div>
                  <FaRegUser className="text-xl text-gray-700 hover:text-[#FAA74F] cursor-pointer" />
                </div>
              </Tippy>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
