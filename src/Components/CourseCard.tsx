import React from "react";
import { DefaultCourseCardItems } from "./DefaultCardItems";
import { Card } from "flowbite-react";

const CourseCard = ({ details = DefaultCourseCardItems[0] }) => {
  return (
    <Card>
      <div className="text-left">
        {" "}
        <h5 className="flex mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Course Title- {details?.name}
        </h5>
        <span>Course Code- {details?.code}</span>
      </div>
    </Card>
  );
};

export default CourseCard;
