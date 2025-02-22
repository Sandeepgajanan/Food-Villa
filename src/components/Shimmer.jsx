import React from "react";

const Shimmer = () => {
  return (
    <>
      {[1, 2, 3, 4].map((index) => {
        return (
          <div
            className="bg-zinc-800  rounded-lg shadow-md shadow-zinc-950  w-72  h-96  overflow-hidden my-2 max-sm:w-full  animate-pulse"
            key={index}
          >
            <div className="bg-zinc-700 rounded-md w-full h-52 "></div>
            <div className="p-2">
              <div className="bg-zinc-700 w-20 h-4 mt-2 rounded-md"></div>
              <div className="bg-zinc-700 w-28 h-4 mt-2 rounded-md"></div>
              <div className="flex items-center gap-2 flex-wrap mt-2">
                {[1, 2, 3, 4].map((index) => (
                  <div
                    className="bg-zinc-700 w-14 h-4 rounded-md "
                    key={index}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Shimmer;
