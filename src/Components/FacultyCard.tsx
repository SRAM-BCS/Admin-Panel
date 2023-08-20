import React from "react";
import { DefaultFacultyCardItems } from "./DefaultCardItems";
import { Card } from "flowbite-react";

const FacultyCard = ({ details = DefaultFacultyCardItems[0] }) => {
  return (
    <Card>
      <h5 className="flex mb-1 text-xl font-medium text-gray-900 dark:text-white">
        {details?.name}
      </h5>
      <span className="flex text-sm text-gray-500 dark:text-gray-400">
        {details?.code}
      </span>
      <div className="flex gap-2">
        <label className="font-bold">Email-</label>
        <span>{details.email}</span>
      </div>
    </Card>
  );
};

export default FacultyCard;
