import { useState } from "react";
import img from "../../assets/about-left-image.png";

const Why = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const data = [
    { id: 0, caption: "SME-Focused", text: "We specialize in building financial software tailored for small and medium businesses.", img },
    { id: 1, caption: "Custom & Scalable Solutions", text: "We develop software that grows with your business.", img },
    { id: 2, caption: "Seamless API Integrations", text: "We connect your systems with top fintech platforms.", img },
    { id: 3, caption: "Security-First Approach", text: "Best-in-class encryption and fraud protection.", img },
    { id: 4, caption: "Expert Team", text: "Dedicated developers, designers, and fintech strategists.", img },
  ];

  return (
    <div id="why" className="min-h-screen w-full flex items-center justify-center">
      <div className="h-full w-[90%] flex flex-col items-center justify-center gap-5 p-4">
        {/* Section Title */}
        <h1 className="text-[30px] font-bold text-center">
          Why Choose<br />
          <span className="text-[#4A4545]">PayBy</span>
          <span className="text-[#970102]">Leap?</span>
        </h1>
        <p className="text-center w-full" >At PayByLeap, we help SMEs unlock the full potential of financial technology—without the hassle of building from scratch.
        </p>

        {/* Cards Grid */}
        <div className="w-full flex flex-wrap items-center justify-center gap-5">
          {data.map((el) => (
            <div
              key={el.id}
              className="h-[200px] w-[270px] shadow-xl rounded-xl flex flex-col items-center justify-center cursor-pointer relative transition-all duration-300"
              onMouseEnter={() => setActiveId(el.id)}
              onMouseLeave={() => setActiveId(null)}
              onClick={() => setActiveId(activeId === el.id ? null : el.id)}
            >
              <img
                src={el.img}
                alt=""
                className="h-[100px] w-[100px] object-contain transition-all duration-300"
              />

              {/* Slide-Up Effect Box */}
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 w-[250px] bg-[#900404] text-white p-3 rounded-lg shadow-lg text-center transition-all duration-300 ${
                  activeId === el.id ? "top-[-80px] opacity-100 scale-100" : "top-[0px] opacity-0 scale-95"
                }`}
              >
                <h2 className="text-lg font-semibold">{el.caption}</h2>
                <p className="text-sm">{el.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Why;
