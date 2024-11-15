import React from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import ErrorPage from "./ErrorPage";
import useFetchBooks from "../features/useFetchBooks";
import images from "../assets/img/images";

const BookList = () => {
  const { books, loading, error } = useFetchBooks();
  if (loading) {
    return <Spinner />;
  }
  if (error) {
    if (error.status != 400) {
      return <ErrorPage />;
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <header className="bg-black text-white py-2 shadow-md flex justify-between items-center px-12">
        <div>
          <h1 className="text-3xl font-bold">Our Books Collection</h1>
        </div>
        <div className="flex gap-5">
          <Link to="/books/add">
            <button className="bg-green-600 px-10 py-3 rounded-lg">
              Add Book
            </button>
          </Link>
          <Link to="/">
            <button className="bg-blue-600 px-12 py-3 rounded-lg">Home</button>
          </Link>
        </div>
      </header>

      <main className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.length ? (
              books.map((book) => (
                <div
                  key={book._id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={book.image ? book.image : images.bg}
                    alt={book.title}
                    className="w-full h-56 object-cover object-center"
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {book.title}
                    </h2>
                    <p className="text-gray-600 mt-2">by {book.author}</p>
                    <Link to={`/books/${book._id}`}>
                      <button className="mt-4 inline-block text-blue-600 font-semibold hover:underline">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-xl">No Books Found!!</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookList;
