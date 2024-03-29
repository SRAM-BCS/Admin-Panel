import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { classroomNavItems } from "./ClassroomDashboard";
import { getToken } from "../Services/GetToken";
import { useAuth } from "../AuthContext";

const CourseAddPage: React.FC = () => {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [hover, setHover] = useState(false);
  const authCtx = useAuth();
  const handleAddLogic = async () => {
    try {
      if (!code || !name) {
        alert("Please fill all the fields");
      } else {
        const response = await fetch(
          process.env.REACT_APP_BACKEND_URL + "/admin/course/new",
          {
            method: "POST",
            body: JSON.stringify({ name, code }),
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );
        if (response.ok) {
          const requestData = await response.json();
          alert("Successfully added course");
          setCode("");
          setName("");
        } else {
          throw new Error("error in API call");
        }
      }
    } catch (e) {
      alert("Error in adding course");
      window.location.reload();
    }
  };
  useEffect(() => {
    const tkn = getToken();
    if (!tkn) {
      alert("No token found");
      authCtx.logout();
    } else {
      setToken(tkn);
    }
  }, []);
  return (
    <Layout header={"CLASSROOM"} navItems={classroomNavItems}>
      <div className="flex items-center justify-center h-full">
        <div className="w-full max-w-md">
          <h1 className="text-center text-4xl text-gray-400 font-bold mb-8">
            ADD COURSE
          </h1>
          <form
            className="bg-#2c3e50 shadow-lg rounded px-8 pt-6 pb-8 mb-4 h-full mx-4"
            style={{
              background: "transparent",
              boxShadow: "5px 5px 20px grey",
            }}
          >
            <div className="mb-6">
              <label
                className="block text-gray-400 text-left text-md font-bold mb-2"
                htmlFor="email"
              >
                COURSE CODE
              </label>
              <input
                className="bg-yellow shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="course"
                placeholder="Course Code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-400 text-left text-md font-bold mb-2">
                NAME
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className={
                  hover
                    ? "text-white bg-gray-900 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    : "text-white bg-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                }
                type="button"
                onClick={handleAddLogic}
                onMouseEnter={() => {
                  setHover(true);
                }}
                onMouseLeave={() => {
                  setHover(false);
                }}
              >
                ADD
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CourseAddPage;
