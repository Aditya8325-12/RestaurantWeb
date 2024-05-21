import React from "react";

const CardView = ({ data }) => {

  // destucation  
  const { price, category, dishName, description, image } = data;
  return (
    <div className="card rounded-t-md bg-slate-50 px-2 shadow-lg">
      <p className="p-1">{price} </p>
      <p className="px-2 text-lg">{category}</p>
      <h2 className="px-2 py-1 text-2xl">{dishName}</h2>
      <p className="px-3 text-sm">{description}</p>
      <div className="flex items-center justify-between px-3 py-1">
        <hr className="w-10/12 bg-black" />
        <p className="text-sm font-bold">READ</p>
      </div>
      <div className="flex items-center justify-center p-3">
        <img
          className="h-56 w-full rounded-md object-cover"
          src={image}
          alt=""
        />
      </div>
      <div className="flex justify-end px-3 pb-2">
        <button className="rounded-md border border-gray-500 bg-white p-1 px-3 text-slate-400">
          order now
        </button>
      </div>
    </div>
  );
};

export default CardView;
