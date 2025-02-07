import { useEffect, useState } from "react";
import img from "../../assets/hero.png";
import img1 from "../../assets/baner-dec-left.png";
import img2 from "../../assets/baner-dec-right.png";

const Hero = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // When the component mounts, trigger the animation
    setFadeIn(true);
  }, []);

  return (
    <div
      id="home"
      className={`min-h-screen w-full flex justify-between ${fadeIn ? "fade-in" : ""}`}
    >
      <img src={img1} alt="" />
      <img src={img2} alt="" />

      <div className="h-full absolute w-full flex items-center justify-center">
        <div className="w-[90%] h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 p-4">
          <div
            className={`flex flex-col gap-5 ${fadeIn ? "slide-left" : ""}`}
          >
            <p className="text-[#900404] font-semibold text-center lg:text-left text-[10px] lg:text-[14px]">
              Empowering Businesses with Custom Financial Software Solutions
            </p>
            <h1 className="text-[20px] lg:text-[40px] font-bold w-full lg:w-[600px] text-center lg:text-left">
              PayByLeap – <br /> Building the Future of Financial Technology for SMEs
            </h1>
            <div className="flex flex-col gap-3 text-[#444041]">
              <p className="lg:w-[600px] w-full text-center lg:text-left text-[12px] lg:text-[16px]">
                At PayByLeap, we specialize in building, designing, and scaling financial software solutions tailored for small and medium-sized enterprises (SMEs). Our mission is to empower businesses with innovative, secure, and scalable financial technology that enhances payments, banking, lending, and financial operations.
              </p>
              <p className="lg:w-[600px] w-full text-center lg:text-left text-[12px] lg:text-[16px]">
                We are a digital agency focused on financial software development, helping SMEs integrate cutting-edge financial solutions into their operations—without the complexity of building from scratch.
              </p>
            </div>
          </div>

          <div
            className={`${
              fadeIn ? "slide-right" : ""
            } lg:h-[500px] lg:w-[500px] h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] object-contain`}
          >
            <img src={img} alt="" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
