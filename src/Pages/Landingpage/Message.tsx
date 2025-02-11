import { useState } from "react";
import emailjs from "@emailjs/browser";
import bg from "../../assets/contact-bg.png";

const Message = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e:any) => {
    e.preventDefault();

    emailjs
      .send(
        "service_rgdt14o",  // Replace with EmailJS Service ID
        "", // Replace with EmailJS Template ID
        formData,
        "YUlp4tn081bGH2g1z"   // Replace with EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSent(true);
          setFormData({ name: "", email: "", message: "" }); // Clear form
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div
      id="messageus"
      className="min-h-screen w-full flex items-center justify-center relative bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="h-full w-[90%] flex flex-col lg:flex-row justify-between items-center gap-5">
        <div className="flex flex-col gap-5 lg:gap-10">
          <h1 className="text-[20px] lg:text-[30px] font-bold text-white">
            Let’s Build the Future of SME Finance Together
          </h1>
          <p className="text-[12px] text-white">
            📩 Contact us today and let’s create a financial technology solution for your business.
          </p>
        </div>
        <form onSubmit={sendEmail} className="h-[400px] w-full lg:w-[550px] bg-white rounded-xl flex flex-col p-10 gap-5 text-black">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="h-[45px] w-full rounded-full p-4 bg-gray-200"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="h-[45px] w-full rounded-full p-4 bg-gray-200"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full h-[100px] rounded-xl p-4 bg-gray-200"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="w-[150px] h-[45px] rounded-full bg-[#900404] text-white">
            Send Message
          </button>
          {isSent && <p className="text-green-500 text-center">Message sent successfully!</p>}
        </form>
      </div>
    </div>
  );
};

export default Message;
