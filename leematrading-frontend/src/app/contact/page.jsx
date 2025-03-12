"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((preFormData) => ({
      ...preFormData,
      [e.target.name]: e.target.value,
    }));
  };
  const sendEmail = () => {
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen pt-20">
      {/* Left Section - Company Contact Info */}
      <div className="w-full md:w-1/2 bg-gray-100 p-6 text-gray-800 flex flex-col justify-center">
        <h1 className="text-2xl font-bold text-blue-500 mb-2">Contact Us</h1>
        <p className="mb-1">
          <strong>Address:</strong> No. 76, Sec. 6, Xinhai Rd., Wenshan Dist.,
          Taipei City 116003, Taiwan (R.O.C.)
        </p>
        <p className="mb-1">
          <strong>Mobile:</strong> +1
        </p>
        <p className="mb-1">
          <strong>Email:</strong> sandralee@leematrading.com
        </p>
      </div>

      {/* Right Section - Contact Form */}
      <div className="w-full md:w-1/2 bg-white p-6 flex flex-col justify-center">
        <h2 className="text-xl font-semibold mb-2">
          We'd love to hear from you!
        </h2>
        <form className="flex flex-col gap-3">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="text-gray-800 border p-2 rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="text-gray-800  border p-2 rounded-md"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="text-gray-800 border p-2 rounded-md h-32"
          />
        </form>
        <button
          onClick={sendEmail}
          className="bg-blue-500 text-white px-4 py-2 mt-3 rounded-md hover:bg-blue-600"
        >
          Send Message
        </button>
      </div>
    </div>
  );
}
