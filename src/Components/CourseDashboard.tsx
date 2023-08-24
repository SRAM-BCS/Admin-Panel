import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { classroomNavItems } from "./ClassroomDashboard";
import CourseCard from "./CourseCard";
import { useAuth } from "../AuthContext";
import { getToken } from "../Services/GetToken";
import LoadingAnimation from "./Loading";

const CourseDashboardPage: React.FC = () => {
  const authCtx = useAuth();
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    async function getCourses(token: string) {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/admin/course/all",
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
        setCourses(requestData.data);
      } else {
        throw new Error("error in API call");
      }
    }
    const token = getToken();
    if (!token) {
      alert("No token found");
      authCtx.logout();
    } else {
      getCourses(token);
    }
  }, [courses.length]);
  return (
    <Layout header={"CLASSROOM"} navItems={classroomNavItems}>
      <div className="mt-6 flex flex-col gap-6 mx-6">
        {!courses.length ? (
          <LoadingAnimation />
        ) : (
          courses.map((course) => {
            return <CourseCard details={course} />;
          })
        )}
      </div>
    </Layout>
  );
};

export default CourseDashboardPage;
