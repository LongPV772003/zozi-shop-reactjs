import React from 'react';

const CommentCard = ({ avatar, name, stars, content }) => {
  return (
    <div className="bg-white w-full shadow-xl rounded-xl shadow-blue-100 p-6 mb-6">
      <div className="flex items-center mb-3">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <h4 className="font-semibold text-lg">{name}</h4>
      </div>

      <div className="text-[#FDD264] text-lg mb-2">
        {'★'.repeat(stars)}{'☆'.repeat(5 - stars)}
      </div>

      <p className=" ">{content}</p>
    </div>
  );
};

export default CommentCard;
