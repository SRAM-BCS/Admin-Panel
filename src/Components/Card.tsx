import React, { useState, FormEvent } from "react";
import { DefaultCardItems, CardProperties } from "./DefaultCardItems";
import { Card, Dropdown, Toast } from "flowbite-react";
import { toast } from "react-toastify";
import { getToken } from "../Services/GetToken";
import CustomToast from "./Toast";
const RequestCard = ({ details = DefaultCardItems[0], token = "" }) => {
  const handleApiCall = async (status: string, roll: string) => {
    try {
      console.log(status, roll);
      console.log(token);
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/admin/student/status/modify",
        {
          method: "POST",
          body: JSON.stringify({ statusNum: status, roll }),
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      if (response.ok) {
        const requestData = await response.json();
        alert("Student request status updated successfully");
        window.location.reload();
        console.log(requestData);
      } else {
        throw new Error("error in API call");
      }
    } catch (e: any) {
      alert(e.message);
    }
  };

  const handleClick = (status: number, roll: string) => {
    toast(
      <CustomToast
        text={`Are you sure you want to ${
          status ? "Accept" : "Reject"
        } this Request?`}
        onYesClick={() => {
          handleApiCall(status.toString(), roll);
        }}
        onNoClick={() => {
          alert("no");
        }}
      />,
      { position: "top-center", autoClose: false }
    );
  };

  return (
    <Card>
      <div className="flex justify-end px-4 pt-4">
        <Dropdown inline label="">
          <Dropdown.Item>
            <div
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => handleClick(1, details.roll)}
            >
              <p>Accept</p>
            </div>
          </Dropdown.Item>
          <Dropdown.Item>
            <div
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => handleClick(0, details.roll)}
            >
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
            src={details?.profileImage.substr(13)}
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
          <a href={details?.idImage.substr(13)} target="_blank">
            <span>View</span>
          </a>
        </div>
      </div>
    </Card>
  );
};

export default RequestCard;
