import { Link, NavLink } from "react-router-dom";
import { Navdata } from "../constants";
const Navbar = () => {
  return (
    <div className="bg-zinc-800 shadow-md shadow-zinc-950  px-4 py-2 w-full mx-auto h-16 flex items-center justify-between max-sm:gap-12">
      <div className="flex items-center justify-center gap-4 group">
        <Link to="/" className="flex items-center justify-center gap-2">
          <img
            src="/logo.png"
            alt="logo"
            className="w-10 h-10 transform group-hover:rotate-6 transition-all max-sm:w-6 max-sm:h-6"
          />
          <h1 className="text-2xl text-cyan-400 font-bold hover:text-cyan-500 transition-all max-sm:text-sm text-nowrap ">
            Food-Villa
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-8 mr-8 max-sm:gap-4">
        {Navdata.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            className={({ isActive }) =>
              `text-lg  font-bold hover:scale-105 transition-all  max-sm:text-sm ${
                isActive ? "text-cyan-500" : "text-white"
              }`
            }
          >
            {item.text}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
