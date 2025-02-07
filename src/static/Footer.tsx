import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/paybyleaplogo.png";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="min-h-[200px] w-full flex items-center justify-center animate__animated animate__fadeIn animate__delay-1s">
      <div className="w-[90%] flex items-center justify-center sm:justify-between flex-col sm:flex-row gap-10">

        <div className="flex items-center justify-center sm:items-start flex-col">
          <img src={logo} alt="Logo" className="w-full sm:w-[150px] h-[40px] object-cover animate__animated animate__fadeIn animate__delay-1s" />
          <p className="sm:ml-7 text-center text-[10px] sm:text-left animate__animated animate__fadeIn animate__delay-2s">
            Your Digital Partner in SME Financial Software Innovation.
          </p>
        </div>

        <div className="flex gap-5">
          <FaFacebook
            className="text-[30px] cursor-pointer hover:text-[#900404] duration-300 relative hover:-top-[10px] transform hover:scale-110 animate__animated animate__fadeIn animate__delay-3s"
          />
          <FaInstagram
            className="text-[30px] cursor-pointer hover:text-[#900404] duration-300 relative hover:-top-[10px] transform hover:scale-110 animate__animated animate__fadeIn animate__delay-3s"
          />
          <FaLinkedin
            className="text-[30px] cursor-pointer hover:text-[#900404] duration-300 relative hover:-top-[10px] transform hover:scale-110 animate__animated animate__fadeIn animate__delay-3s"
          />
          <AiFillTikTok
            className="text-[30px] cursor-pointer hover:text-[#900404] duration-300 relative hover:-top-[10px] transform hover:scale-110 animate__animated animate__fadeIn animate__delay-3s"
          />
        </div>

      </div>
    </div>
  );
}

export default Footer;
