import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { facultyNavItems } from "./FacultyDashboard";
import { getToken } from "../Services/GetToken";
import { useAuth } from "../AuthContext";

const FacultyAddPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [hover, setHover] = useState(false);
  const authCtx = useAuth();
  const handleAddLogic = async () => {
    try {
      if (!email || !name) {
        alert("Please fill all the fields");
      } else {
        const response = await fetch(
          "http://127.0.0.1:8000/api/admin/faculty/new",
          {
            method: "POST",
            body: JSON.stringify({ name, email }),
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );
        if (response.ok) {
          const requestData = await response.json();
          alert("Successfully added faculty");
          setName("");
          setEmail("");
        } else {
          throw new Error("error in API call");
        }
      }
    } catch (e) {
      alert("Error in adding faculty");
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
    <Layout header={"FACULTY"} navItems={facultyNavItems}>
      <div className="flex items-center justify-center h-full">
        <div className="w-full max-w-md">
          <h1 className="text-center text-4xl text-gray-400 font-bold mb-8">
            ADD FACULTY
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
                EMAIL
              </label>
              <input
                className="bg-yellow shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-400 text-left text-md font-bold mb-2"
                htmlFor={"password"}
              >
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

export default FacultyAddPage;
