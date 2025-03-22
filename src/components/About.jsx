import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full h-fit pt-16 px-4 pb-1 max-sm:p-2">
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-8 max-sm:gap-4">
        <div className="bg-zinc-800/80 rounded-2xl p-6 max-sm:p-4 h-full">
          <div className="flex flex-col items-center justify-center text-center space-y-8 max-sm:space-y-6 h-full">
            <h2 className="text-5xl max-sm:text-3xl text-cyan-400">About Us</h2>

            <p className="text-zinc-300 text-2xl max-sm:text-lg ">
              Food Villa is your gateway to delicious local cuisine. We connect
              food lovers with the best restaurants in town.
            </p>
            <div className="relative w-full py-6 max-sm:py-4">
              <div className="flex items-center justify-between max-sm:flex-col max-sm:gap-4">
                <div className="flex items-center gap-2 ">
                  <p className="text-zinc-300 text-xl max-sm:text-base font-light">
                    Join thousands of food lovers
                  </p>
                  <i className="ri-heart-fill text-red-500"></i>
                </div>
                <Link
                  to="/"
                  className="group bg-gradient-to-r from-cyan-400 to-purple-500 px-8 max-sm:px-6 py-3 max-sm:py-2 rounded-full text-white font-medium  max-sm:w-full"
                >
                  Explore Menu
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                    <i className="ri-arrow-right-line"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[500px] max-sm:h-[250px] rounded-2xl overflow-hidden">
          <img
            src="../about.webp"
            alt="Food display"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 max-sm:p-3">
            <p className="text-white text-xl max-sm:text-base font-semibold">
              Experience the best of local cuisine
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
