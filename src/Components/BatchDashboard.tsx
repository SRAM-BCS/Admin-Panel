import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { classroomNavItems } from "./ClassroomDashboard";
import BatchCard from "./BatchCard";
import { useAuth } from "../AuthContext";
import { getToken } from "../Services/GetToken";
import LoadingAnimation from "./Loading";

const BatchDashboardPage: React.FC = () => {
  const authCtx = useAuth();
  const [batches, setBatches] = useState([]);
  useEffect(() => {
    async function getBatches(token: string) {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/admin/batch/all",
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
        setBatches(requestData.data);
        console.log(requestData.data);
      } else {
        throw new Error("error in API call");
      }
    }
    const token = getToken();
    if (!token) {
      alert("No token found");
      authCtx.logout();
    } else {
      getBatches(token);
    }
  }, [batches.length]);
  return (
    <Layout header={"CLASSROOM"} navItems={classroomNavItems}>
      <div className="mt-6 flex flex-col gap-6 mx-6">
        {!batches.length ? (
          <LoadingAnimation />
        ) : (
          batches.map((batch) => {
            return <BatchCard details={batch} />;
          })
        )}
      </div>
    </Layout>
  );
};

export default BatchDashboardPage;
