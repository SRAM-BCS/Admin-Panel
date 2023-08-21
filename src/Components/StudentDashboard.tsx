import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { NavItem } from "./DefaultNavItems";
import { InboxIcon, UserIcon } from "@heroicons/react/24/outline";
import { useAuth } from "../AuthContext";
import { getToken } from "../Services/GetToken";
import RequestLongCard from "./LongCard";
import LoadingAnimation from "./Loading";

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
interface Student {
  id: number;
  name: string;
  age: number;
}
const StudentDashboardPage: React.FC = () => {
  const authCtx = useAuth();
  const [students, setStudents] = useState([]); //useState<User[]>([]);
  useEffect(() => {
    const getStudents = async (token: string) => {
      try {
        // Make API call to login
        const response = await fetch(
          process.env.REACT_APP_BACKEND_URL + "/student/get/all/",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );
        if (response.ok) {
          const studentsData = await response.json();
          setStudents(studentsData);
          console.log(studentsData);
        } else {
          throw new Error("error in API call");
        }
      } catch (error) {
        console.error("error:" + error);
        alert("error:" + error);
        window.location.reload();
      }
    };
    const token = getToken();
    if (!token) {
      alert("No token found");
      authCtx.logout();
    } else {
      getStudents(token);
    }
  }, [students.length]);

  return (
    <Layout header={"STUDENT"} navItems={studentNavItems}>
      {/* <StudentDetailContainer studentLists={students} /> */}
      <div>
      {/* Your paginated content goes here */}
      <div className="flex flex-col gap-6 mx-12 my-10">
        {students.length?students.map((student) => {
          return <RequestLongCard details={student}  />
        }):<LoadingAnimation size={60} color="blue" />}
      </div>
    </div>
    </Layout>
  );
};

export default StudentDashboardPage;
