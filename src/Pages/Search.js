import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import CardPlaceHolder from "../Component/CardPlaceHolder";
import BookCard from "../Component/BookCard";

const Search = ({}) => {
  const param = useParams();
  const [searchedBooks, setSearchedBooks] = useState([]);
  const query = param.query;

  // Search All Books
  const search = async (query) => {
    await axios.get(`http://gutendex.com/books/?search=${query}`).then((response) => {
      setSearchedBooks(response.data.results);
      console.log(query);
    });
  };

  // Fire Search when component mount
  useEffect(() => {
    setSearchedBooks([]);
    search(query);
  }, [query]);

  return (
    <>
      <div className="flex flex-wrap grid gap-x-1 justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5 ">
        {searchedBooks.length == 0 ? <CardPlaceHolder /> : null}
        {searchedBooks.map((books, index) => (index < 5 ? <BookCard book={books} key={books.id} /> : null))}
      </div>
    </>
  );
};

export default Search;
