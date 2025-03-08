import React from "react";

const ContactPage = () => {
  return (
    <div className="flex h-screen items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg flex w-full max-w-7xl h-[800px] overflow-hidden">
        {/* Left Section */}
        <div className="w-1/2 bg-cover bg-center p-8 flex flex-col justify-center text-white"
          style={{ backgroundImage: "url('https://source.unsplash.com/600x400/?nature,water')" }}>
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="mt-2">We’d love to hear from you. Fill out the form and we’ll get back to you shortly.</p>
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-gray-700">Contact Us</h2>
          <form className="mt-4 space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" required />
            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" required />
            <textarea placeholder="Your Message" className="w-full p-3 border rounded h-32" required></textarea>
            <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
