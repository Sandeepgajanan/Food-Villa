import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.item);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
  };
  const cleanCart = () => {
    dispatch(clearCart());
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-16 pb-1 px-4 max-sm:px-2">
      <h1 className="text-3xl font-bold text-white my-5 underline max-sm:text-2xl">
        Your Cart
      </h1>
      {cartItems?.length === 0 ? (
        <div className="text-center text-white mt-10">
          <h2 className="text-2xl font-semibold max-sm:text-xl">
            Nothing yet in cart
          </h2>
          <button
            onClick={() => navigate("/")}
            className="mt-5 px-6 py-2 bg-yellow-400 text-black font-bold rounded-md hover:scale-105 transition-all max-sm:px-4 max-sm:py-1"
          >
            Go to Menu
          </button>
        </div>
      ) : (
        <div className="w-full max-w-4xl space-y-4 max-sm:space-y-2">
          {cartItems?.map((item) => (
            <div
              key={item.card.info.imageId}
              className="flex bg-zinc-800 p-4 rounded-md shadow-md items-center gap-4 max-sm:flex-col max-sm:p-3 max-sm:gap-2"
            >
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`}
                alt={item.name}
                className="w-24 h-24 rounded-md object-cover max-sm:w-full max-sm:h-40"
              />
              <div className="flex-1 text-center max-sm:text-left space-y-2">
                <h2 className="text-xl font-bold text-white max-sm:text-sm">
                  {item.card.info.name}
                </h2>
                <p className="text-sm text-gray-400 max-sm:text-xs">
                  {item.card.info.category}
                </p>
                <p className="text-gray-300 line-clamp-2 max-sm:text-xs">
                  {item.card.info.description}
                </p>
              </div>
              <button
                onClick={() => handleRemove(item.card.info.imageId)}
                className="px-4 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 transition-all max-sm:px-3 max-sm:py-1 max-sm:text-sm"
              >
                Delete
              </button>
            </div>
          ))}
          <button
            onClick={cleanCart}
            className="px-4 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 transition-all max-sm:px-3 max-sm:py-1 max-sm:text-sm"
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
