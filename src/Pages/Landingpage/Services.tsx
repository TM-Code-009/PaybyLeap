import { useEffect, useState } from "react";
import img from "../../assets/services-left-image.png";
import img1 from "../../assets/images__1_-removebg-preview (1).png"
import img2 from "../../assets/download-removebg-preview (1).png"
import img3 from "../../assets/images (2).jpeg"
import img4 from "../../assets/images (3).jpeg"

const Services = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true); // Trigger animations when the component mounts
  }, []);

  const service = [
    { id: 0, caption: "Payment & Billing Platforms –", text: "Custom payment processing and invoicing solutions." },
    { id: 1, caption: "Lending & Credit Solutions –", text: "Loan management and microfinance platforms." },
    { id: 2, caption: "Digital Wallets & Banking Systems –", text: "Secure and scalable banking software." },
    { id: 3, caption: "Financial Automation –", text: "AI-driven financial workflow automation." }
  ];
  const service1 = [
    { id: 0, caption: "Custom Payment Gateway Integration –", text: "Stripe, Flutterwave, Paystack & more." },
    { id: 1, caption: "Banking API Development –", text: "Connect with financial institutions securely." },
    { id: 2, caption: "Embedded Finance Solutions –", text: "Offer financial services within your product." },
    { id: 3, caption: "Fraud Detection & Compliance –", text: "Ensure security and regulatory adherence." }
  ];

  const service2 = [
    { id: 0, caption: "Ready-to-Deploy Payment Solutions", text: "" },
    { id: 1, caption: "Customizable Digital Wallets", text: "" },
    { id: 2, caption: "Branded Loan & Microfinance Platforms", text: "" },
    { id: 3, caption: "Enterprise-Grade Security & Scalability", text: "" }
  ];

  const service3 = [
    { id: 0, caption: "UI/UX Design for Financial Apps", text: "" },
    { id: 1, caption: "User-Centered Wireframing & Prototyping", text: "" },
    { id: 2, caption: "Accessibility & Compliance Optimization", text: "" },
    { id: 3, caption: "Branding & Product Identity Development", text: "" }
  ];

  const service4 = [
    { id: 0, caption: "Digital Payment Transformation", text: "" },
    { id: 1, caption: "Financial Process Automation", text: "" },
    { id: 2, caption: "Fintech Product Roadmaps & Strategy", text: "" },
    { id: 3, caption: "Security, Compliance, & Risk Management", text: "" }
  ];

  return (
    <div
      id="services"
      className={`min-h-screen w-full flex items-center justify-center ${
        fadeIn ? "fade-in" : ""
      }`}
    >
      <div className="w-[90%] h-full">
        <h1 className="text-[40px] font-bold">Our Services</h1>

        <div>
          <div
            className={`flex flex-col lg:flex-row items-center justify-between ${
              fadeIn ? "fade-in-section" : ""
            }`}
          >
            <img
              src={img1}
              alt=""
              className="w-[500px] h-[500px] object-contain"
            />

            <div className="flex flex-col gap-5 lg:pl-14">
              <h1 className="text-[35px] font-bold text-[#900404]">
                1. Custom Financial Software Development
              </h1>
              <p className="w-full">
                We build tailor-made financial solutions that align with your
                business needs. Whether you need a payment gateway, lending
                platform, digital banking system, or automated financial tools,
                we provide end-to-end software development.
              </p>
              <div className="text-[14px]">
                {service.map((el, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <div className="w-[10px] h-[10px] bg-[#900404] rounded-full"></div>
                    <p>
                      <span className="gap-2 font-bold text-[16px]">
                        {el.caption}
                      </span>
                      {el.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col lg:flex-row-reverse items-center justify-between ${
              fadeIn ? "fade-in-section" : ""
            }`}
          >
            <img
              src={img2}
              alt=""
              className="w-[500px] h-[500px] object-contain"
            />

            <div className="flex flex-col gap-5">
              <h1 className="text-[35px] font-bold text-[#900404]">
                2. Payment & Fintech Integration
              </h1>
              <p className="w-full">
                We help businesses integrate third-party financial services
                seamlessly into their systems. If your business needs a custom
                payment solution, KYC verification, or banking API integration,
                we provide expert API development and implementation.
              </p>
              <div className="text-[14px]">
                {service1.map((el, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <div className="w-[10px] h-[10px] bg-[#900404] rounded-full"></div>
                    <p>
                      <span className="gap-2 font-bold text-[16px]">
                        {el.caption}
                      </span>
                      {el.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col lg:flex-row items-center justify-between ${
              fadeIn ? "fade-in-section" : ""
            }`}
          >
            <img
              src={img3}
              alt=""
              className="w-[500px] h-[500px] object-contain"
            />

            <div className="flex flex-col gap-5 lg:pl-14">
              <h1 className="text-[35px] font-bold text-[#900404]">
                3. White-Label Financial Software
              </h1>
              <p className="w-full">
                We develop white-label financial software solutions for
                businesses that want to launch their own payment platforms,
                digital wallets, lending systems, or financial management
                tools—without building from scratch.
              </p>
              <div className="text-[14px]">
                {service2.map((el, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <div className="w-[10px] h-[10px] bg-[#900404] rounded-full"></div>
                    <p>
                      <span className="gap-2 font-bold text-[16px]">
                        {el.caption}
                      </span>
                      {el.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col lg:flex-row-reverse items-center justify-between ${
              fadeIn ? "fade-in-section" : ""
            }`}
          >
            <img
              src={img4}
              alt=""
              className="w-[500px] h-[500px] object-contain"
            />

            <div className="flex flex-col gap-5 lg:pl-14">
              <h1 className="text-[35px] font-bold text-[#900404]">
                4. Fintech Product Design & UI/UX
              </h1>
              <p className="w-full">
                Our team of expert designers ensures that your financial
                software isn’t just functional—but also intuitive, user-friendly,
                and engaging. We focus on conversion-driven design that enhances
                customer trust and experience.
              </p>
              <div className="text-[14px]">
                {service3.map((el, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <div className="w-[10px] h-[10px] bg-[#900404] rounded-full"></div>
                    <p>
                      <span className="gap-2 font-bold text-[16px]">
                        {el.caption}
                      </span>
                      {el.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col lg:flex-row items-center justify-between ${
              fadeIn ? "fade-in-section" : ""
            }`}
          >
            <img
              src={img}
              alt=""
              className="w-[500px] h-[500px] object-contain"
            />

            <div className="flex flex-col gap-5 lg:pl-14">
              <h1 className="text-[35px] font-bold text-[#900404]">
                5. Consulting & Digital Transformation for SMEs
              </h1>
              <p className="w-full">
                Beyond development, we offer strategic guidance on how SMEs can
                adopt financial technology to improve their business operations.
                We provide expert consulting on:
              </p>
              <div className="text-[14px]">
                {service4.map((el, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <div className="w-[10px] h-[10px] bg-[#900404] rounded-full"></div>
                    <p>
                      <span className="gap-2 font-bold text-[16px]">
                        {el.caption}
                      </span>
                      {el.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
