import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-3">
        <h1 className="text-2xl font-bold text-blue-600">Bookstore.</h1>
        <nav>
          <ul className="flex gap-5 text-[1.1rem]">
            <Link to="/">
              <li className="text-gray-600 hover:text-blue-600">Home</li>
            </Link>
            <Link to="/books">
              <li className="text-gray-600 hover:text-blue-600">Books</li>
            </Link>
            <a href="#about">
              <li className="text-gray-600 hover:text-blue-600">About</li>
            </a>
            <Link to="/contact">
              <li className="text-gray-600 hover:text-blue-600">Contact</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
