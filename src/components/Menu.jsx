import Shim from "./Shim";
import Recommended from "./Recommended";
import { useParams } from "react-router-dom";
import useRestoDetails from "../utils/useRestoDetails";

const Menu = () => {

  const {id} = useParams();

  const {restoData,menuItems}=useRestoDetails(id);
  
  const { name, totalRatingsString, costForTwoMessage, locality, areaName } =
    restoData || {};

  if (!restoData && !menuItems) {
    return <Shim />;
  }
  return (
    <div className="w-full min-h-screen p-4 ">
      <div className="w-full flex  h-60    p-2 justify-between rounded-lg bg-zinc-800/80 shadow-md max-sm:flex-col max-sm:h-fit max-sm:gap-4">
        <div className="w-2/3 max-sm:w-full">
          <h1 className="font-bold text-3xl max-sm:text-2xl text-center rounded-md text-white">
            {name}
          </h1>
          <div className="grid grid-cols-2 max-sm:grid-cols-1 place-items-center gap-y-10 mt-6">
            {[
              {
                icon: "ri-star-fill",
                text: totalRatingsString,
              },
              {
                icon: "ri-money-rupee-circle-fill",
                text: costForTwoMessage,
              },
              { icon: "ri-map-pin-2-fill", text: locality },
              { icon: "ri-building-2-fill", text: areaName },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-zinc-950/80 w-72 max-sm:w-full flex items-center justify-center rounded-lg py-1 px-3 text-lg max-sm:text-lg font-bold text-white gap-2 "
              >
                <i className={`${item.icon} text-yellow-400`}></i>
                {item.text}
              </div>
            ))}
          </div>
        </div>
        <div className=" w-96 max-sm:w-full max-sm:h-48 rounded-md overflow-hidden">
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restoData.cloudinaryImageId}`}
            alt={name}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      <Recommended menuItems={menuItems} />
    </div>
  );
};

export default Menu;
