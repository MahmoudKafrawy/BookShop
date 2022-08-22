import React from "react";
import ReactPaginate from "react-paginate";
import { useParams, useNavigate } from "react-router-dom";

export const PaginationBar = ({ pageNum, getAllBooks, search }) => {
  let navigate = useNavigate();

  //Change page
  const handlePageChange = (data) => {
    navigate(`/all/${data.selected + 1}`, { replace: false });
    getAllBooks(data.selected + 1);
  };

  // Assume pages 500 , can get it from api => items count / items per page
  const pageCount = 500;
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageChange}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName={"inline-flex items-center -space-x-px"}
        pageClassName={
          "py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        }
        pageLinkClassName={"page-link"}
        previousLinkClassName={
          "block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        }
        nextLinkClassName={
          "block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        }
        breakLinkClassName={
          "py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        }
        activeClassName={
          "py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
        }
        // forcePage={pageNum}
      />
    </>
  );
};
export default PaginationBar;
