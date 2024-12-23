import { useState, useEffect } from "react";
import axios from "axios";

const useFetchBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://book-store-api-mgoh.onrender.com/books")
      .then((response) => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { books, loading, error };
};

export default useFetchBooks;
console.log("hello")
console.log("el")
console.log("pull request")
