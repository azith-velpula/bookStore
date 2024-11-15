import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-gray-50 font-sans">
      <section className="h-56">
        <div className="h-full flex flex-col justify-center items-center bg-black bg-opacity-80">
          <h1 className="text-white text-5xl font-bold text-center">
            Contact Us
          </h1>
          <p className="text-white text-lg mt-4 text-center max-w-2xl">
            Have questions, feedback, or just want to say hello? Reach out to
            us!
          </p>
          <Link to="/">
            <p className="text-white underline">Home</p>
          </Link>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-col md:flex-row md:space-x-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Get In Touch
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Our team is here to assist you. Feel free to reach out through
                our contact form, give us a call, or visit us in-store. We look
                forward to connecting with you!
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                <strong>Phone:</strong> 123-456-7890
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                <strong>Email:</strong> info@bookstore.com
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                <strong>Address:</strong> 123 Book Street
              </p>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <form className="bg-white shadow-md rounded-lg p-8">
                <div className="mb-6">
                  <label
                    className="block text-gray-700 font-semibold mb-2"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 font-semibold mb-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 font-semibold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    rows="5"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
