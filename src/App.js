import logo from "./logo.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import NavBar from "./Component/Navbar";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import ViewAll from "./Pages/ViewAll";

import "react-toastify/dist/ReactToastify.css";
import SingleBook from "./Pages/SingleBook";

function App() {
  let navigate = useNavigate();
  const [books, setBooks] = useState([]);

  // Get All Books
  const getAllBooks = async () => {
    await axios.get(`http://gutendex.com/books/?sort=popular`).then((response) => {
      setBooks(response.data.results);
    });
  };

  // Navigat to search page
  const search = async (e, query) => {
    e.preventDefault();
    navigate(`/search/${query}`, { replace: true });
  };

  //Fetch All Books At component mount
  useEffect(() => {
    getAllBooks();
  }, []);

  //Send coming soon toast
  const comingSoon = () => {
    toast.error("coming soon");
  };

  return (
    <div className="parent">
      <ToastContainer />
      <NavBar search={search} books={books} comingSoon={comingSoon} />
      <Routes>
        <Route path="/" element={<Home books={books} />}></Route>
        <Route path="/search/:query" element={<Search />}></Route>
        <Route path="/all/:page" element={<ViewAll />}></Route>
        <Route path="/book/:id" element={<SingleBook />}></Route>
      </Routes>
    </div>
  );
}

export default App;
