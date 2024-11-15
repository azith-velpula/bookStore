import images from "../assets/img/images";

const RelatedBooks = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Related Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-64 object-cover object-center"
              src={images.img1}
              alt="Book Cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Pride and Prejudice
              </h3>
              <p className="text-gray-600 mt-2">
                A classic romantic tale set in Regency England, centered on
                Elizabeth Bennet and her evolving relationship with the reserved
                Mr. Darcy
              </p>
              <a href="#" className="text-blue-600 mt-4 inline-block">
                Learn More
              </a>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-64 object-cover"
              src={images.img2}
              alt="Book Cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                The Catcher in the Rye
              </h3>
              <p className="text-gray-600 mt-2">
                The story follows Holden Caulfield, a disillusioned teenager
                navigating New York City after being expelled from school
              </p>
              <a href="#" className="text-blue-600 mt-4 inline-block">
                Learn More
              </a>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-64 object-cover object-center"
              src={images.img3}
              alt="Book Cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                "1984" by George Orwell
              </h3>
              <p className="text-gray-600 mt-2">
                A dystopian novel exploring a totalitarian regime where
                surveillance, propaganda, and oppression dominate.
              </p>
              <a href="#" className="text-blue-600 mt-4 inline-block">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RelatedBooks;
