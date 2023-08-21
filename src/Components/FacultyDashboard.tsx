import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { NavItem } from "./DefaultNavItems";
import { UserIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import FacultyCard from "./FacultyCard";
import { useAuth } from "../AuthContext";
import { getToken } from "../Services/GetToken";
import LoadingAnimation from "./Loading";

export const facultyNavItems: NavItem[] = [
  {
    label: "Faculty Dashboard",
    href: "/faculty-dashboard",
    icon: <UserIcon className="w-6 h-6" />,
  },
  {
    label: "Add Faculty Panel",
    href: "/faculty/add-faculty",
    icon: <UserPlusIcon className="w-6 h-6" />,
  },
];

const FacultyDashboardPage: React.FC = () => {
  const authCtx = useAuth();
  const [faculties, setFaculties] = useState([]);
  useEffect(() => {
    async function getRequests(token: string) {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/admin/faculty/all",
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
        setFaculties(requestData.data);
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
  }, [faculties.length]);
  return (
    <Layout header={"FACULTY"} navItems={facultyNavItems}>
      <div className="mt-6 flex flex-col gap-6 mx-6">
        {faculties.length ? (
          faculties.map((faculty) => {
            return <FacultyCard details={faculty} />;
          })
        ) : (
          <LoadingAnimation />
        )}
      </div>
    </Layout>
  );
};

export default FacultyDashboardPage;
