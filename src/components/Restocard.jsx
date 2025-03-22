import { Link } from "react-router-dom";

const Restocard = ({ resto }) => {
  return (
    <Link to={`/menu/${resto.info.id}`}>
      <div className="bg-zinc-800  rounded-lg shadow-md shadow-zinc-950 w-72 h-96 transform transition-all hover:scale-95 overflow-hidden my-4 max-sm:w-full ">
        <div className="bg-zinc-500 rounded-md w-full h-56  max-sm:h-52 ">
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resto.info.cloudinaryImageId}`}
            alt="rest"
            className="w-full h-full object-cover object-center"
          />
          <div className="p-2">
            <h2 className="text-zinc-100 font-bold text-lg mt-2  ">
              {resto.info.name}
            </h2>
            <h2 className="text-zinc-100 font-bold text-lg mt-2">
              <span className="text-yellow-300 mr-3 ">
                *{resto.info.avgRating}
              </span>
              -{resto.info.sla.slaString}
            </h2>
            <div className="flex items-center gap-2 flex-wrap mt-2 max-sm:my-3 ">
              {resto.info.cuisines.map((item, index) => (
                <h2
                  className="text-zinc-100  text-xs bg-zinc-900 px-2 rounded-md  max-sm:text-sm"
                  key={index}
                >
                  {item}
                </h2>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Restocard;
