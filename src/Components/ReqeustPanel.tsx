import React, { useEffect, useState } from "react";
import Layout from "./Layout";

import { NavItem } from "./DefaultNavItems";
import {
  CalendarIcon,
  FolderIcon,
  InboxIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Card from "./Card";
import { useAuth } from "../AuthContext";
import { getToken } from "../Services/GetToken";
export const studentNavItems: NavItem[] = [
  {
    label: "Student Dashboard",
    href: "/student-dashboard",
    icon: <UserIcon className="w-6 h-6" />,
  },
  {
    label: "Reqeust Panel",
    href: "/student/request-panel",
    icon: <InboxIcon className="w-6 h-6" />,
  },
];
const RequestPanelPage: React.FC = () => {
  const authCtx = useAuth();
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    async function getRequests(token: string) {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/admin/student/status/pending",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      if (response.ok) {
        const requestData = await response.json();
        setRequests(requestData);
        console.log(requestData);
      } else {
        throw new Error("error in API call");
      }
    }
    const token = getToken();
    if (!token) {
      alert("No token found");
      authCtx.logout();
    } else {
      getRequests(token);
    }
  }, [requests.length]);
  return (
    <Layout header={"STUDENT"} navItems={studentNavItems}>
      <div className="p-9  grid lg:gap-4 lg:grid-cols-4 md:gap-3 md:grid-cols-3 sm:gap-4 sm:grid-cols-1">
        {requests.length ? requests.map((request: any) => {return <></>}):"No Requests"}
        <Card />
      </div>
    </Layout>
  );
};

export default RequestPanelPage;
