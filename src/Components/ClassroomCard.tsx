import React from "react";
import { DefaultClassroomCardItems } from "./DefaultCardItems";
import { Card } from "flowbite-react";

const ClassroomCard = ({ details = DefaultClassroomCardItems[0] }) => {
  return (
    <Card>
      <div className="flex flex-row items-center content-center justify-center text-center gap-12">
        <img
          src={details?.qrCode}
          className="mb-3  shadow-lg"
          height="96"
          width="96"
          alt="qr"
        />
        <h5 className="flex mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Classroom Name- {details?.classRoom}
        </h5>
      </div>
    </Card>
  );
};

export default ClassroomCard;
