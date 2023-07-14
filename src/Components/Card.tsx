import React, { useState } from "react";
import { DefaultCardItems, CardProperties } from "./DefaultCardItems";
import { Card, Dropdown } from "flowbite-react";
type Props = {
  details: CardProperties;
};
const RequestCard = ({ details = DefaultCardItems }) => {
  return (
    <Card>
      <div className="flex justify-end px-4 pt-4">
        <Dropdown inline label="">
          <Dropdown.Item>
            <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
              <p>Accept</p>
            </div>
          </Dropdown.Item>
          <Dropdown.Item>
            <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
              <p>Deny</p>
            </div>
          </Dropdown.Item>
        </Dropdown>
      </div>
      <div className="flex flex-col items-center pb-10">
        <div className="flex flex-row items-center gap-6">
          <img
            alt="Profile image"
            className="mb-3 rounded-full shadow-lg"
            height="96"
            src="/images/people/profile-picture-3.jpg"
            width="96"
          />
        </div>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Student Name
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          BTech Computer Science
        </span>
        <div className="flex flex-row gap-2">
          <label className="font-bold">Roll No-</label>
          <span>2021BCS-021</span>
        </div>
        <div className="flex flex-row gap-2">
          <label className="font-bold">Email-</label>
          <span>bcs_2021021@iiitm.ac.in</span>
        </div>
        <div className="flex flex-row gap-2">
          <label className="font-bold">ID Proof-</label>
          <a href="https://cloudinary-link" target="_blank">
            https://cloudinary-link
          </a>
        </div>
      </div>
    </Card>
  );
};

export default RequestCard;
