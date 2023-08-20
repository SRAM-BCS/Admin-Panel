import React, { useState,FormEvent } from "react";
import { DefaultCardItems, CardProperties } from "./DefaultCardItems";
import { Card, Dropdown } from "flowbite-react";
import { toast } from 'react-toastify';
import { getToken } from "../Services/GetToken";

const RequestCard = ({ details = DefaultCardItems[0], token="" }) => {

  const handleApiCall = async (status: number) => {

  }
  const handleClick = async (status: number,e:FormEvent) => {
    e.preventDefault();
    alert("accept")
    const token = getToken()
    toast.info(`Are you sure you want to ${status}?Accept:Reject this Request?`, {
      position: 'top-center',
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      onClose: () => handleApiCall(status),
    });
  }
  return (
    <Card>
      <div className="flex justify-end px-4 pt-4">
        <Dropdown inline label="">
          <Dropdown.Item>
            <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" onClick={(e:FormEvent)=>handleClick(1,e)}>
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
            src={details?.profileImage}
            width="96"
          />
        </div>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {details?.name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {details?.branch}
        </span>
        <div className="flex flex-row gap-2">
          <label className="font-bold">Roll No-</label>
          <span>{details.roll}</span>
        </div>
        <div className="flex flex-row gap-2">
          <label className="font-bold">Email-</label>
          <span>{details.email}</span>
        </div>
        <div className="flex flex-row gap-2">
          <label className="font-bold">ID Proof-</label>
          <a href={details?.idImage} target="_blank">
            <span>View</span>
          </a>
        </div>
      </div>
    </Card>
  );
};

export default RequestCard;
