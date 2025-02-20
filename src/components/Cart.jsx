import React from "react";

const Cart = ({ desc, title, tags ,img ,year}) => {
  return (
    <div className="bg-gray-800 p-5 rounded-xl shadow-lg w-[310px] sm:w-[400px] h-[410px]  cursor-pointer hover:bg-black hover:shadow-2xl transition mx-2 hover:translate-y-1.5">
      <div>
        <img src={img} alt="" className="w-full h-[170px] rounded-3xl mb-4" />
      </div>
        
      <div className="flex flex-wrap my-2 gap-2">
        {tags.map((t, index) => (
          <button key={index} className="bg-[#854ce615] text-[#854ce6] rounded-2xl px-2 text-sm">
            {t.toLowerCase()}
          </button>
        ))}
      </div>
      <p className="text-xl my-1 text-gray-100 font-bold">{title}</p>
      <p className="text-gray-400 mb-2">{year}</p>
      <p className="text-gray-400 ">{desc}</p>
    </div>
  );
};

export default Cart;
