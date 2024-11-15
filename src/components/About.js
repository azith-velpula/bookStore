import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-white font-sans" id="about">
      <section className="bg-cover bg-center h-[280px]">
        <div className="h-full flex flex-col justify-center items-center bg-black bg-opacity-80">
          <h1 className="text-white text-5xl font-bold text-center">
            About Us
          </h1>
          <p className="text-gray-400 text-lg mt-4 text-center max-w-2xl">
            Discover why books are treasures and how they continue to shape
            lives, minds, and communities.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Books Matter
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Books are more than words on paper; they are windows to other
              worlds, gateways to new perspectives, and tools for personal
              growth. Reading nurtures the mind, fuels creativity, and
              strengthens critical thinking. Whether it’s escaping into a
              gripping novel, learning from a biography, or exploring complex
              ideas through non-fiction, books enrich our lives in countless
              ways.
            </p>
          </div>
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              The Effects of Reading
            </h2>
            <ul className="list-disc list-inside text-gray-600 text-lg space-y-4">
              <li>
                <strong>Mental Stimulation:</strong> Reading keeps the brain
                active and engaged, reducing stress and improving mental
                well-being.
              </li>
              <li>
                <strong>Empathy and Connection:</strong> Books allow us to step
                into others’ shoes, fostering empathy and understanding of
                diverse cultures and experiences.
              </li>
              <li>
                <strong>Skill Development:</strong> From improving vocabulary
                and communication to learning practical skills, books are
                invaluable teachers.
              </li>
              <li>
                <strong>Entertainment:</strong> Beyond learning, books provide
                endless entertainment and adventure, offering an escape from
                everyday routines.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Love for Bookstores
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At our bookstore, we believe in the magic of discovery. Each shelf
              holds stories waiting to be explored, voices waiting to be heard,
              and knowledge waiting to be shared. Bookstores are sanctuaries
              where readers of all ages can find inspiration, comfort, and joy.
              We are honored to be part of this community, connecting people
              with books that transform lives and create lasting memories.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-blue-600 text-white py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold">Join the Journey of Discovery</h2>
          <p className="text-lg mt-4">
            Visit our bookstore today or explore our online collection to find
            your next great read.
          </p>
          <Link to="/books">
            <button className="mt-6 inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
              Browse Collection
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
