import YOUTUBE_URL from "../assets/ytassets/logo.svg";
import search from "../assets/ytassets/search.svg";
import User from "../assets/ytassets/user.svg";
import Bell from "../assets/ytassets/bell.svg";
import hamburger from "../assets/ytassets/hamburger.svg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Slices/SideMenuSlice";

const Head = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center mx-auto gap-5  w-full   justify-between py-4 px-6 bg-white text-white shadow-lg">
  {/* Left Section */}
  <div className="flex items-center gap-5">
    <img
      src={hamburger}
      alt="Menu Icon"
      onClick={() => dispatch(toggleMenu())}
      className="cursor-pointer hover:opacity-80"
    />
    <img src={YOUTUBE_URL} alt="YouTube Logo" className="w-24" />
  </div>

  {/* Search Section */}
  <div className="flex items-center w-1/2 border border-gray-300 rounded-full bg-gray-100 p-2">
    <input
      type="text"
      placeholder="Search"
      className="flex-grow bg-transparent px-4 text-black outline-none rounded-l-full"
    />
    <button className="p-2 hover:scale-105">
      <img src={search} alt="Search Icon" className="w-5 h-5" />
    </button>
  </div>

  {/* Right Section */}
  <div className="flex items-center gap-5">
    <img src={Bell} alt="Notifications" className="w-6 h-6 hover:opacity-80" />
    <img src={User} alt="User Avatar" className="w-8 h-8 rounded-full hover:opacity-80" />
  </div>
</div>

  );
};

export default Head;
