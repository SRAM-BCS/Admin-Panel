import React, { useState } from "react";
import RequestLongCard from "./LongCard";

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: any;
};
const StudentDetailContainer = () => {
  return (
    <div>
      {/* Your paginated content goes here */}
      <div className="flex flex-col gap-6 mx-12 my-10">
        <RequestLongCard />
        <RequestLongCard />
        <RequestLongCard />
      </div>
    </div>
  );
};

export default StudentDetailContainer;
