import { useParams } from "react-router-dom";
import useFetchBooks from "../features/useFetchBooks";
import EditBookForm from "./EditBookForm";
import ErrorPage from "./ErrorPage";
import Spinner from "./Spinner";

const EditBook = () => {
  const { id } = useParams();
  const { books, error, loading } = useFetchBooks();
  if (error) {
    return <ErrorPage />;
  }
  if (loading) {
    return <Spinner />;
  }
  const book = books.filter((book) => book._id == id)[0];
  return <EditBookForm book={book} />;
};
export default EditBook;
