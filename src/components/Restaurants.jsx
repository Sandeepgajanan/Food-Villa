import React, { useEffect, useState } from "react";
import Restocard from "./Restocard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
const Restaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchResto, setSearchResto] = useState("");

  useEffect(() => {
    fetchRestaurants();
  },[]);

  async function fetchRestaurants() {
    let response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let json = await response.json();
    let checkData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    if (checkData != undefined) {
      setAllRestaurants(checkData);
      setFiltered(checkData);
    }
  }

  
  return (
    <div className="w-full min-h-fit pt-16 px-4 max-sm:px-2 ">
      <div className="flex w-1/2 m-5 justify-between border-zinc-600 rounded-md overflow-hidden max-sm:w-full max-sm:ml-0">
        <input
          type="text"
          name="search"
          placeholder="Search here"
          className="border-none outline-none w-full p-3 bg-zinc-700 text-zinc-100"
          value={searchResto}
          onChange={(e) => {
            setSearchResto(e.target.value);
          }}
        />
        <button
          className="px-3 bg-zinc-700 text-zinc-100 border-l-2"
          onClick={() => {
            const data = filterData(searchResto, allRestaurants);
            setFiltered(data);
          }}
        >
          Search
        </button>
      </div>

      {/* Restaurant Cards */}
      <div className="flex flex-wrap gap-12 max-sm:gap-2 max-sm:flex-col ">
        {allRestaurants.length > 0 ? (
          filtered.length > 0 ? (
            filtered.map((item) => (
              <Restocard key={item.info.id} resto={item} />
            ))
          ) : (
            <p className="text-zinc-500 text-center w-full">
              No matching restaurants found.
            </p>
          )
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
};

export default Restaurants;
