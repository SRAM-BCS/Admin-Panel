import React from "react";
import { DefaultFCBCardItems } from "./DefaultCardItems";
import { Card } from "flowbite-react";
import FacultySubject from "./FacultySubject";

const FCBCard = ({ details = DefaultFCBCardItems[0] }) => {
  return (
    <Card>
      <div className="text-left">
        {" "}
        <h5 className="flex mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Faculty Code- {details?.faculty}
        </h5>
        <h5 className="flex mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Batch Code- {details?.course}
        </h5>
        <h5 className="flex mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {" "}
          Course Code- {details?.faculty}
        </h5>
      </div>
    </Card>
  );
};

export default FCBCard;
