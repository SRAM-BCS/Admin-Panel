import React, { useEffect, useState } from "react";
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
import RequestPanelPage from "./Components/ReqeustPanel";
import FacultyDashboardPage from "./Components/FacultyDashboard";
import FacultyAddPage from "./Components/AddFaculty";
import AdminDashboardPage from "./Components/AdminDashboard";
import AdminAddPage from "./Components/AddAdmin";
import ClassroomDashboardPage from "./Components/ClassroomDashboard";
import BatchAddPage from "./Components/AddBatch";
import CourseAddPage from "./Components/AddCourse";
import GenerateQR from "./Components/GenerateQR";
import { ToastContainer } from "react-toastify";
import { getToken } from "./Services/GetToken";
import "react-toastify/dist/ReactToastify.css";
import AddBatchCourseFaculty from "./Components/AddBatchCourseFaculty";
function App() {
  const [token, setToken] = useState<string>("");
  useEffect(() => {
    const jwt = getToken();
    setToken(jwt);
  }, []);
  const currentUser = "user-object";
  return (
    <div className="App">
      <Navbar currentUser={token} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/student/request-panel" element={<RequestPanelPage />} />
          <Route path="/faculty-dashboard" element={<FacultyDashboardPage />} />
          <Route path="/faculty/add-faculty" element={<FacultyAddPage />} />
          <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
          <Route path="/admin/add-admin" element={<AdminAddPage />} />
          <Route
            path="/classroom-dashboard"
            element={<ClassroomDashboardPage />}
          />
          <Route path="/classroom/add-batch" element={<BatchAddPage />} />
          <Route path="/classroom/add-course" element={<CourseAddPage />} />
          <Route path="/classroom/generate-qr" element={<GenerateQR />} />
          <Route
            path="/classroom/add-fac-batch-course"
            element={<AddBatchCourseFaculty />}
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
