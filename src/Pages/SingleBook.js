import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardPlaceHolder from "../Component/CardPlaceHolder";

const SingleBook = () => {
  const param = useParams();
  const [bookID, setBookID] = useState(param.id);
  const [book, setBook] = useState([]);

  // Get Single  Book
  const getSingleBook = async (bookID) => {
    await axios.get(`https://gutendex.com/books/${bookID}`).then((response) => {
      setBook(response.data);
      console.log(book);
    });
  };

  useEffect(() => {
    getSingleBook(bookID);
  }, []);

  return (
    <>
      {book.length == 0 ? (
        <CardPlaceHolder />
      ) : (
        <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5 ">
          <div className="m-5">
            <img src={book.formats["image/jpeg"]} />
          </div>
          <div className="mx-20">
            <p className="single_book_title">Book Title :</p>
            <p>{book.title}</p>
            <p className="single_book_title">Author :</p>
            <p>{book.authors.length == 0 ? "unknow" : book.authors[0].name}</p>
            <p className="single_book_title">Languages :</p>
            <p>{book.languages[0]}</p>
            <p className="single_book_title">shelves :</p>
            {book.bookshelves.map((a, index) => (
              <p>{book.bookshelves[index]}</p>
            ))}
            <p className="single_book_title">Download count :</p>
            <p>{book.download_count}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleBook;
