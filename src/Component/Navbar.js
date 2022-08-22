import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = ({ search, comingSoon }) => {
  const searchRef = useRef();

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 pt-4 pb-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <Link to="/" className="flex items-center">
            <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">Book Store</span>
          </Link>
          <div className="w-3/5">
            <form
              onSubmit={(e) => {
                search(e, searchRef.current.value);
              }}
            >
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
              >
                Search
              </label>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  ref={searchRef}
                  type="search"
                  id="default-search"
                  className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search By autor,title,name..."
                  required=""
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="flex items-center" onClick={() => comingSoon()}>
            <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">
              EN
            </a>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
          <div className="flex items-center justify-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li>
                <Link to="/" href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">
                  Home
                </Link>
              </li>
              <li onClick={() => comingSoon()}>
                <a href="#" className="text-gray-900 dark:text-white hover:underline">
                  Best Seller
                </a>
              </li>
              <li onClick={() => comingSoon()}>
                <a href="#" className="text-gray-900 dark:text-white hover:underline">
                  Category
                </a>
              </li>
              <li onClick={() => comingSoon()}>
                <a href="#" className="text-gray-900 dark:text-white hover:underline">
                  Find Store
                </a>
              </li>
              <li onClick={() => comingSoon()}>
                <a href="#" className="text-gray-900 dark:text-white hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
