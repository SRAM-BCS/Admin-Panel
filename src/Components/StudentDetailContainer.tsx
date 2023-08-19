import React, { useState } from "react";
import RequestLongCard from "./LongCard";

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: any;
};
const StudentDetailContainer = ({
  currentPage,
  totalPages,
  onPageChange,
}: Props) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      {/* Your paginated content goes here */}
      <div className="mx-12 my-10">
        <RequestLongCard />
      </div>

      {/* Pagination elements at the bottom */}
      <div className="flex items-center justify-center">
        {currentPage > 1 && (
          <button
            className="px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
            onClick={() => onPageChange(currentPage - 1)}
          >
            Previous
          </button>
        )}

        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`px-4 py-2 mx-1 ${
              pageNumber === currentPage
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700 hover:bg-gray-400"
            } rounded focus:outline-none`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}

        {currentPage < totalPages && (
          <button
            className="px-4 py-2 ml-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default StudentDetailContainer;
