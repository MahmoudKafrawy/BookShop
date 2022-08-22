import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <>
      <Link to={`/book/${book.id}`}>
        <div className="bookcard">
          <div title={book.title} className="bookcard_container_image">
            <img className="bookcard_image" src={book.formats["image/jpeg"]} />
          </div>
          <div>
            <p className="bookcard_title">{book.title.substr(0, 48)}</p>
            <div title={book.authors.length == 0 ? "Unknow" : book.authors[0].name} className="bookcard_author">
              {book.authors.length == 0 ? "Unknow" : book.authors[0].name.substr(0, 10)}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BookCard;
