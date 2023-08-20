import React, { useState } from "react";
import RequestLongCard from "./LongCard";

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: any;
};
type StudentLists = {

}

const StudentDetailContainer = () => {
  return (
    <div>
      {/* Your paginated content goes here */}
      <div className="flex flex-col gap-6 mx-12 my-10">
      </div>
    </div>
  );
};

export default StudentDetailContainer;
