import React from "react";
import Header from "./Header";
import images from "../assets/img/images";
import { Link } from "react-router-dom";
import About from "./About";
import FeatureBooks from "./FeatureBooks";

const PublicPage = () => {
  return (
    <div style={{ backgroundImage: `url(${images.background})` }}>
      <div className="bg-gray-100 font-sans flex flex-col min-h-screen bg-opacity-90">
        <Header />
        <section className="h-screen bg-opacity-0">
          <div className="container mx-auto text-center h-full flex flex-col justify-center items-center">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-700">
              Welcome to Your Book Haven
            </h1>
            <p className="text-lg md:text-xl mt-4 max-w-lg ">
              Discover a vast collection of books from all genres, tailored for
              every reader's taste.
            </p>
            <Link to={"/books"}>
              <button className="mt-8 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
                Browse Collection
              </button>
            </Link>
          </div>
        </section>
        <FeatureBooks />
        <About />
      </div>
    </div>
  );
};

export default PublicPage;
