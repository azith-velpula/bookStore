import React from "react";
import useFetchBooks from "../features/useFetchBooks";
import { Link, useNavigate, useParams } from "react-router-dom";
import Spinner from "./Spinner";
import ErrorPage from "./ErrorPage";
import images from "../assets/img/images";
import RelatedBooks from "./RelatedBooks";

const BookPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { books, error, loading } = useFetchBooks();

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <ErrorPage />;
  }

  const book = books.filter((book) => book._id == id)[0];

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://book-store-api-mgoh.onrender.com/books",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: book._id }),
        }
      );
      const message = await response.json();
      alert(message.message);
      navigate("/books");
    } catch (err) {
      navigate("/error");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <header className="bg-black text-white py-3 shadow-md">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold">Book Details</h1>
        </div>
      </header>
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row space-y-8 lg:space-y-0">
          <div className="lg:w-1/3 flex justify-center">
            <img
              src={book.image ? book.image : images.bg}
              alt={book.title}
              className="w-full h-auto max-w-xs rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-2/3">
            <h2 className="text-4xl font-semibold text-gray-800">
              {book.title}
            </h2>
            <p className="text-xl text-gray-600 mt-2">by {book.author}</p>
            <p className="text-gray-600 mt-4">{book.content}</p>
            <p className="text-gray-600 mt-4 font-semibold">
              Published: {book.published}
            </p>
            <div className="mt-8  flex gap-4">
              <Link to={`/books/edit/${book._id}`}>
                <button className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition font-semibold">
                  Edit Book
                </button>
              </Link>
              <button
                className="bg-red-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-red-700 transition font-semibold"
                onClick={handleDelete}
              >
                Delete Book
              </button>
            </div>
            <div className="mt-3">
              <Link to="/books">
                <button className="rounded-lg bg-green-600 py-3 px-5 font-semibold text-white">
                  Other Books
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <RelatedBooks />
    </div>
  );
};

export default BookPage;
