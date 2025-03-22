import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const formatPrice = (price) => {
  if (!price) return "N/A";
  return price >= 10000 ? `₹${price / 100}` : `₹${price}`;
};
const formatRating = (rating) => {
  if (!rating) return "No rating specified";
  return `${rating}`;
};

const Recommended = ({ menuItems }) => {
  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  if (!menuItems)
    return (
      <div className="w-full text-center my-5 ">
        <h1 className="text-white bold text-2xl max-sm:text-lg">No menu items specified</h1>
      </div>
    );
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold text-white my-3  underline max-sm:text-lg">
        Recommended
      </h1>
      {menuItems.map((item, index) => (
        <div
          className="p-2  mt-4 shadow-md mb-2 flex bg-zinc-800/80 rounded-md w-full  justify-between max-w-screen-md max-sm:flex-col max-sm:gap-4"
          key={index}
        >
          <div className="w-2/3 space-y-3 max-sm:w-full">
            <h1 className="text-zinc-100 font-bold text-xl max-sm:text-lg">
              {item.card.info.name}
            </h1>
            <h2 className="text-zinc-100 text-lg max-sm:text-sm">
              <i className="ri-money-rupee-circle-fill mr-2 text-base"></i>
              {formatPrice(item.card.info.defaultPrice)}
            </h2>
            <h2 className="text-green-300 text-base">
              <i className="ri-star-fill mr-2 text-base"></i>
              {formatRating(item.card.info.ratings.aggregatedRating.rating)}
            </h2>
            <p className="text-zinc-100 font-light line-clamp-3">
              {item.card.info.description}
            </p>
          </div>
          <div className=" w-52  max-sm:w-full max-sm:h-48 rounded-md overflow-hidden relative">
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`}
              alt="img"
              className="w-full h-full object-cover object-center "
            />
            <button
              onClick={() => addFoodItem(item)}
              className="text-lg  absolute z-0 bottom-1 shadow-md left-[4.3rem] px-5 py-1 rounded-md bg-zinc-800 text-yellow-400 font-bold text-center hover:scale-105 transition-all max-sm:text-sm"
            >
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recommended;
