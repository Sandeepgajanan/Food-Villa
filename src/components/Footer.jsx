const Footer = () => {
  return (
    <footer className="w-full bg-zinc-800  py-4">
      <div className="max-w-2xl mx-auto px-4 max-sm:px-2">
        <div className="flex flex-col items-center justify-center space-y-4 max-sm:space-y-3 text-zinc-100">
          <p className="text-center font-bold  max-sm:text-sm">
            © {new Date().getFullYear()} Food Villa. All rights reserved.
          </p>

          <div className="flex items-center space-x-2  max-sm:text-sm max-sm:flex-wrap max-sm:justify-center">
            <span>Made with</span>
            <i className="ri-heart-fill text-red-500 animate-pulse"></i>
            <span>by</span>
            <a
              href="https://www.linkedin.com/in/sandeep-gajana"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-medium"
            >
              Sandeep Gajanan
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
