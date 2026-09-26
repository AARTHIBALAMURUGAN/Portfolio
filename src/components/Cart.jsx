import React from "react";

const Cart = ({ desc, title, tags, img, year }) => {
  return (
    <div className="bg-gray-800 p-5 rounded-xl shadow-lg 
      w-[310px] sm:w-[400px] 
      h-[500px]
      cursor-pointer hover:bg-black hover:shadow-2xl 
      transition mx-2 hover:translate-y-1.5 flex flex-col">

      {/* Image */}
      <img
        src={img}
        alt={title}
        className="w-full h-[170px] object-cover rounded-3xl mb-4"
      />

      {/* Tags */}
      <div className="flex flex-wrap gap-2 h-[70px] overflow-hidden">
        {tags.map((t, index) => (
          <span
            key={index}
            className="bg-[#854ce615] text-[#854ce6] rounded-2xl 
            px-2 py-1 text-sm h-fit"
          >
            {t.toLowerCase()}
          </span>
        ))}
      </div>

      {/* Title */}
      <p className="text-xl mt-2 mb-1 text-gray-100 font-bold">
        {title}
      </p>

      {/* Year */}
      <p className="text-gray-400 mb-2">
        {year}
      </p>

      {/* Description */}
      <p className="text-gray-400 leading-6 line-clamp-3 overflow-hidden">
        {desc}
      </p>

    </div>
  );
};

export default Cart;