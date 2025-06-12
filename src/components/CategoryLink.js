import { Link } from "react-router-dom";

const CategoryLink = ({ title, image }) => {
  return (
    <div className="">
      <div className="bg-[#f8f9fa] py-4 text-sm text-gray-600 flex space-x-2 px-24">
        <Link to="/" className="hover:underline text-gray-400">Home</Link>
        <span>&gt;</span>
        <Link to="/category" className="hover:underline text-gray-400">Category</Link>
        <span>&gt;</span>
        <span className="font-semibold text-gray-800">{title}</span>
      </div>

      {image ? (<div className="w-full">
        <img
          src={image}
          alt={title}
          className="w-full object-cover h-[320px] mb-12"
        />
      </div>) : <div></div>}
    </div>
  );
};

export default CategoryLink;
