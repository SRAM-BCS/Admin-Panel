import React, { FormEvent, useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from 'react-router-dom';

const AuthPage: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hover, setHover] = useState(false);
  const [passwordHidden, setPasswordHidden] = useState(true);
  const handleLogin = async(e:FormEvent) => {
    // Handle login logic here
    e.preventDefault()
    if (!email || !password) return alert("Please fill in all fields")
    else
    {
      await login(email, password)
      navigate("/student-dashboard")
    }
  };

  return (
    <div className="flex items-center justify-center h-full mt-12">
      <div className="w-full max-w-md">
        <h1 className="text-center text-4xl text-white font-bold mb-8">
          SIGN IN
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
              className="block text-white text-left text-md font-bold mb-2"
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
              className="block text-white text-left text-md font-bold mb-2"
              htmlFor={"password"}
            >
              PASSWORD
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type={passwordHidden ? "password" : "text"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              onClick={(e) => setPasswordHidden(!passwordHidden)}
              className="text-right text-white text-sm font-bold cursor-pointer text-left"
            >
              {passwordHidden ? "SHOW" : "HIDE"}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className={
                hover
                  ? "text-white bg-gray-900 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  : "text-white bg-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              }
              type="button"
              onClick={handleLogin}
              onMouseEnter={() => {
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
            >
              SIGN IN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AuthPage;
