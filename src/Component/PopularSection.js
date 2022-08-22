import React from "react";
import { Link } from "react-router-dom";

import BookCard from "./BookCard";
import CardPlaceHolder from "./CardPlaceHolder";

const PopularSection = ({ books }) => {
  console.log(books);
  return (
    <>
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <p className="popular_title">Popular now</p>
        <Link to="/all/1">
          <p className="popular_view_all">view all</p>
        </Link>
      </div>
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5 ">
        {books.length == 0 ? <CardPlaceHolder /> : null}
        {books.map((books, index) => (index < 5 ? <BookCard book={books} key={books.id} /> : null))}
      </div>
    </>
  );
};

export default PopularSection;
