import { useEffect, useState } from "react";
import bg from "../../assets/about-bg.png";
import img from "../../assets/about-left-image.png";


const About = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true); // Trigger the animations when the component mounts
  }, []);

  return (
    <div
      id="aboutus"
      className={`min-h-[600px] flex justify-center items-center relative bg-cover bg-center ${
        fadeIn ? "fade-in" : ""
      }`}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-[90%] flex flex-col-reverse lg:flex-row items-center justify-between">
        <div
          className={`${
            fadeIn ? "slide-left" : ""
          } w-full lg:w-[500px]`}
        >
          <img src={img} alt="" />
        </div>

        <div
          className={`flex flex-col gap-5 ${fadeIn ? "slide-right" : ""}`}
        >
          <h1 className="text-[35px] font-bold text-[#900404] lg:text-black">
            Who We Are
          </h1>
          <p className="text-[16px] lg:text-white w-full lg:w-[500px] text-black">
            PayByLeap is a team of expert developers, designers, and financial
            technology strategists dedicated to crafting high-performance
            financial solutions for businesses. We bridge the gap between SMEs and
            enterprise-grade financial software, ensuring that businesses of all
            sizes can leverage the power of digital finance.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <p className="w-full sm:w-[300px] text-white">
              <span className="font-bold text-[20px] text-black">🎯 Our Mission:</span> To equip SMEs with custom
              financial software that enhances efficiency, security, and customer
              experience.
            </p>
            <p className="w-full sm:w-[300px] text-white">
              <span className="font-bold text-[20px] text-black">🚀 Our Vision:</span> To be the leading digital agency for
              SMEs looking to integrate financial technology seamlessly into their
              business operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
