import React from "react";

const Shim = () => {
  return (
    <div className="w-full h-fit p-4 animate-pulse ">
      <div className="w-full flex  h-60  p-2 justify-between rounded-lg bg-zinc-800 shadow-md max-sm:flex-col max-sm:h-fit max-sm:gap-4 shadow-zinc-950">
        <div className="w-2/3 max-sm:w-full h-full">
          <h1 className="bg-zinc-700 w-full py-4 rounded-md"></h1>
          <div className="grid grid-cols-2 max-sm:grid-cols-1 place-items-center gap-y-10 mt-8">
            {[1, 2, 3, 4].map((item, index) => (
              <h2
                className="bg-zinc-700 w-72 max-sm:w-full rounded-md py-4"
                key={index}
              ></h2>
            ))}
          </div>
        </div>
        <div className="bg-zinc-700 h-full w-96 max-sm:w-full max-sm:h-48 rounded-md overflow-hidden"></div>
      </div>
      <div className="w-full h-fit flex flex-col justify-center items-center shadow-zinc-950">
        <div className=" mt-10 shadow-md mb-2  bg-zinc-700 rounded-md w-full  max-w-screen-md max-sm:flex-col max-sm:gap-4 h-60"></div>
      </div>
    </div>
  );
};

export default Shim;
