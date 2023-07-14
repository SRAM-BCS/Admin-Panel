import React, { useEffect } from "react";
import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import StudentDashboard from "./Components/StudentDashboard";
import Layout from "./Components/Layout";
function App() {
  useEffect(() => {
    document.cookie = "foxxi-jwt" + "token";
  });
  const currentUser = "user-object";
  return (
    <div className="App">
      <Navbar currentUser={currentUser} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
