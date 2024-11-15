import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditBookForm = ({ book }) => {
  const navigate = useNavigate();
  const [bookData, setBookData] = useState({
    title: book.title,
    genre: book.genre,
    content: book.content,
    published: book.published,
    author: book.author,
    image: book.image,
  });
  const [errors, setErrors] = useState({
    title: "",
    genre: "",
    content: "",
    published: "",
    author: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const validateForm = () => {
    let formIsValid = true;
    let newErrors = {};

    if (!bookData.title) {
      newErrors.title = "Title is required.";
      formIsValid = false;
    }
    if (!bookData.genre) {
      newErrors.genre = "Genre is required.";
      formIsValid = false;
    }
    if (!bookData.content) {
      newErrors.content = "Content is required.";
      formIsValid = false;
    }
    if (!bookData.published) {
      newErrors.published = "Published Year is required.";
      formIsValid = false;
    }
    if (!bookData.author) {
      newErrors.author = "Author is required.";
      formIsValid = false;
    }
    if (!bookData.image) {
      newErrors.image = "Image is required.";
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newBook = {
        ...bookData,
        published: Number(bookData.published),
        id: book._id,
      };
      try {
        const response = await fetch("http://localhost:3500/books", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newBook),
        });
        const message = await response.json();
        alert(message.message);
        navigate("/books");
      } catch (err) {
        navigate("/error");
      }
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <header className="bg-gray-600 text-white py-3 shadow-md">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold">Edit a New Book</h1>
        </div>
      </header>

      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-20">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="title"
                  className="block text-gray-700 font-semibold"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={bookData.title}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                />
                {errors.title && (
                  <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="genre"
                  className="block text-gray-700 font-semibold"
                >
                  Genre
                </label>
                <input
                  type="text"
                  id="genre"
                  name="genre"
                  value={bookData.genre}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                />
                {errors.genre && (
                  <p className="text-red-500 text-sm mt-1">{errors.genre}</p>
                )}
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="content"
                className="block text-gray-700 font-semibold"
              >
                Content
              </label>
              <textarea
                id="content"
                name="content"
                value={bookData.content}
                onChange={handleChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                rows="4"
              />
              {errors.content && (
                <p className="text-red-500 text-sm mt-1">{errors.content}</p>
              )}
            </div>
            <div className="mt-6">
              <label
                htmlFor="published"
                className="block text-gray-700 font-semibold"
              >
                Published Year
              </label>
              <input
                type="text"
                id="published"
                name="published"
                value={bookData.published}
                onChange={handleChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
              />
              {errors.published && (
                <p className="text-red-500 text-sm mt-1">{errors.published}</p>
              )}
            </div>
            <div className="mt-6">
              <label
                htmlFor="author"
                className="block text-gray-700 font-semibold"
              >
                Author
              </label>
              <input
                type="text"
                id="author"
                name="author"
                value={bookData.author}
                onChange={handleChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
              />
              {errors.author && (
                <p className="text-red-500 text-sm mt-1">{errors.author}</p>
              )}
            </div>
            <div className="mt-6">
              <label
                htmlFor="image"
                className="block text-gray-700 font-semibold"
              >
                Image URL
              </label>
              <input
                type="text"
                id="image"
                name="image"
                onChange={handleChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
              />
              {errors.image && (
                <p className="text-red-500 text-sm mt-1">{errors.image}</p>
              )}
            </div>
            <div className="mt-8 text-center flex gap-6 justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Edit Book
              </button>
              <button
                className="bg-green-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-green-700 transition"
                onClick={() => window.history.back()}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default EditBookForm;
