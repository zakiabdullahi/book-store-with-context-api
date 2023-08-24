import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useContext, useState } from "react";
import { DarkModeContext } from "../Contexts/DarkModeContext";

const Header = () => {
  const { darkMode, toggle } = useContext(DarkModeContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className=" dark:bg-slate-900 dark:text-white fixed left-0 right-0 top-0 backdrop-blur-md shadow  bg-white bg-opacity-60 border-b-1 border-gray-100 z-10">
        <div className="max-w-4xl mx-auto flex justify-between items-center p-4">
          <Link to="/">Book Store</Link>
          <div className="flex items-center space-x-2">
            <ul className="hidden md:flex space-x-2 text-gray-600">
              <Link to="/">Home</Link>
              <Link to="/books">Books</Link>
              <Link to="/create-book">Create Book</Link>
            </ul>

            <button onClick={() => toggle(!darkMode)}>
              {darkMode ? (
                <BsFillSunFill className="text-2xl text-[#32b3ed]" />
              ) : (
                <BsFillMoonStarsFill className="text-2xl" />
              )}
            </button>
            <button className="block md:hidden" onClick={() => toggleNavBar()}>
              {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="dark:bg-slate-800 dark:text-white bg-indigo-600 absolute left-0 right-0 w-full text-white transition duration-200 ease-out md:ease-in md:hidden ">
          <ul className="flex flex-col  items-end space-y-4 text-white p-4">
            <Link onClick={toggleNavBar} to="/">
              Home
            </Link>
            <Link onClick={toggleNavBar} to="/books">
              Books
            </Link>
            <Link onClick={toggleNavBar} to="/create-book">
              Create Book
            </Link>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
