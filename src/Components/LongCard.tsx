import React from "react";
import { DefaultCardItems } from "./DefaultCardItems";
import { Card } from "flowbite-react";

const RequestLongCard = ({ details = DefaultCardItems[0] }) => {
  return (
    <Card>
      <div className="flex flex-row justify-end px-4 mx-4 max-w-md- 10"></div>
      <img
        alt="Profile image"
        className="mb-3 rounded-full shadow-lg"
        height="96"
        src={details?.profileImage}
        width="96"
      />
      <div className="flex flex-row items-center gap-6"></div>
      <h5 className="flex mb-1 text-xl font-medium text-gray-900 dark:text-white">
        {details?.name}
      </h5>
      <span className="flex text-sm text-gray-500 dark:text-gray-400">
        {details?.branch}
      </span>
      <div className="flex gap-2">
        <label className="font-bold">Roll No-</label>
        <span>{details.roll}</span>
      </div>
      <div className="flex gap-2">
        <label className="font-bold">Email-</label>
        <span>{details.email}</span>
      </div>
      <div className="flex flex-row gap-2">
        <label className="font-bold">ID Proof-</label>
        <a href={details?.idImage} target="_blank">
          <span>View</span>
        </a>
      </div>
    </Card>
  );
};

export default RequestLongCard;
