import { Route, Routes } from "react-router-dom";
import PublicPage from "./components/PublicPage";
import Contact from "./components/Contact";
import BookList from "./components/BookList";
import BookPage from "./components/BookPage";
import AddBookForm from "./components/AddBookForm";
import EditBook from "./components/EditBook";
import ErrorPage from "./components/ErrorPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<PublicPage />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/books" element={<BookList />} />
          <Route path="/books/add" element={<AddBookForm />} />
          <Route path="/books/:id" element={<BookPage />} />
          <Route path="/books/edit/:id" element={<EditBook />} />
          <Route path="/error" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
