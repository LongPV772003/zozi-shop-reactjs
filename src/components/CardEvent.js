import { Link } from "react-router-dom";

export default function CardEvent({ image, title, date, label,  description}) {
    const slug = title.toLowerCase().replace(/\s+/g, "-");
    return (
      <Link to={`/eventdetail/${slug}`} state={{ image, title, date, label,  description}} className="cursor-pointer border flex flex-col gap-3 rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded" />
        <p className="text-xs text-[#4B6BFB] mt-2 ml-2">{label}</p>
        <h3 className="font-semibold mt-1">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{date}</p>
        <p className="hidden">{description}</p>
      </Link>
    );
  }