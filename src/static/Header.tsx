import logo from "../assets/paybyleaplogo.png";
import { useState, useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";
import { MdCancel } from "react-icons/md";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [activeNav, setActiveNav] = useState("home"); // Track active section

  useEffect(() => {
    // Fade in the navbar on initial load
    setNavbarVisible(true);
  }, []);

  return (
    <div className="w-full h-[100px] flex justify-center items-center relative z-50">
      {/* Fixed Navbar with Animation */}
      <div
        className={`w-full h-[100px] flex justify-center items-center fixed bg-white shadow-lg z-50 transition-opacity duration-1000 ${
          navbarVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-[90%] h-full flex items-center justify-between">
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="w-[170px] h-[170px] object-contain transition-transform duration-700 hover:scale-105"
          />

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center gap-[15px]">
            <div className="flex items-center sm:gap-5">
              {["Home", "About Us", "Services", "Why", "Message Us"].map((item, index) => {
                const sectionId = item.toLowerCase().replace(" ", "");
                return (
                  <a
                    key={index}
                    href={`#${sectionId}`}
                    className={`font-semibold sm:text-[16px] cursor-pointer duration-300 transform transition-transform hover:scale-105 ${
                      activeNav === sectionId ? "text-[#900404] font-bold" : "hover:text-[#900404]"
                    }`}
                    onClick={() => setActiveNav(sectionId)}
                  >
                    {item}
                  </a>
                );
              })}
            </div>

            {/* Contact Button */}
            <a href="#messageus">
              <button className="hidden lg:flex w-[150px] h-[45px] rounded-full border border-[#900404] font-semibold hover:text-white hover:bg-[#900404] cursor-pointer duration-300 justify-center items-center transform transition-all hover:scale-105">
                Contact Now
              </button>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div
            className="w-[50px] h-[40px] rounded-sm flex items-center justify-center cursor-pointer duration-300 sm:hidden transform transition-transform hover:rotate-180"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <MdCancel className="text-[30px]" /> : <CiMenuFries className="text-[30px]" />}
          </div>
        </div>
      </div>

      {/* Mobile Menu with Slide-in Animation */}
      {toggle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
          <div className="h-[350px] w-full flex items-center justify-center absolute top-[100px] left-0 z-50 animate__animated animate__slideInDown">
            <div className="h-full bg-white shadow-lg w-[90%] flex items-center pt-4 flex-col gap-5">
              {["Home", "About Us", "Services", "Why", "Message Us"].map((item, index) => {
                const sectionId = item.toLowerCase().replace(" ", "");
                return (
                  <a
                    key={index}
                    href={`#${sectionId}`}
                    className={`font-semibold text-[20px] cursor-pointer duration-300 h-[45px] w-full text-center border-b border-solid transform transition-transform hover:scale-105 ${
                      activeNav === sectionId ? "text-[#900404] font-bold" : "hover:text-[#900404]"
                    }`}
                    onClick={() => {
                      setActiveNav(sectionId);
                      setToggle(false); // Close menu when clicking a link
                    }}
                  >
                    {item}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
