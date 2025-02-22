import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className=" h-screen  bg-zinc-900/80 flex items-center justify-center ">
      <div className="text-center px-4">
        <h1 className="text-5xl max-sm:text-4xl font-bold text-white mb-4">Oops! Page Not Found</h1>
        <p className="text-gray-400 max-sm:text-sm mb-8">
          The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="px-6 py-3 inline-block max-sm:px-4 max-sm:py-2 max-sm:text-sm bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-lg hover:scale-105 transition-all  "
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
