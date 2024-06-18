import React from "react";
import { Link } from "react-router-dom";

function Cards({ item }) {
  return (
    <Link to={`/book/${item._id}`} className="card-link">
      <div className="card w-72 h-96 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white  m-4 flex flex-col justify-between">
        <div className="image-container h-64">
          <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
        </div>
        <div className="info-container p-4 flex flex-col justify-between flex-grow">
          <h2 className="card-title text-lg font-bold">
            {item.name}
          </h2>
          <div className="card-actions justify-between mt-4">
            <div className="badge badge-outline">${item.price}</div>
            <div className="cursor-pointer px-4 py-2 rounded-full border-none bg-[#22d3ee] hover:text-white duration-200">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Cards;
