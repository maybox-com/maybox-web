import "../../assets/styles/Dashboard-Nav.css"

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="navbar bg-gray-900 flex justify-between items-center p-4">
      <button
        onClick={toggleSidebar}
        type="button"
        className="inline-flex items-center p-2 text-sm text-gray-100 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden"
      >
        <span className="sr-only">Open sidebar</span>
      </button>

      <p className="text-[#FBA013] text-2xl ml-8 w-6 h-6 font-playtip maybox">MAYBOX</p>

      <p className="text-white flex-1 text-lg text-center font-neueEinstellung beauty">beauty that delivers, subscribe now! 🎉</p>

      <div className="relative ml-5">
        <div className="relative w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <svg className="absolute w-8 h-8 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
          </svg>
        </div>
        <span className="top-0 left-4 absolute w-2.5 h-2.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
      </div>
    </div>
  );
};

export default Navbar;