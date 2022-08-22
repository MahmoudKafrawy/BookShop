import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import BookCard from "../Component/BookCard";
import CardPlaceHolder from "../Component/CardPlaceHolder";
import PaginationBar from "../Component/PaginationBar";

const ViewAll = () => {
  const param = useParams();
  const [pageNum, setPageNum] = useState(param.page);
  const [books, setBooks] = useState([]);

  // Get All Books
  const getAllBooks = async (pageNum) => {
    setBooks([]);
    await axios.get(`https://gutendex.com/books/?page=${pageNum}&sort=popular`).then((response) => {
      setBooks(response.data.results);
    });
  };

  useEffect(() => {
    getAllBooks(pageNum);
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        {books.length == 0 ? <CardPlaceHolder /> : null}
        {books.map((books) => (
          <BookCard book={books} key={books.id} />
        ))}
      </div>
      <div className="paginationBar">
        <PaginationBar setPageNum={setPageNum} pageNum={pageNum} getAllBooks={getAllBooks} />
      </div>
    </>
  );
};

export default ViewAll;
