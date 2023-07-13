import React, { useEffect } from 'react';
import logo from './logo.svg'; 
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
function App() {
  useEffect(() => {
    document.cookie = "foxxi-jwt"+"token"
  })
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/login" element={<Login/>} />
          <Route
            path="/"
            element={
              <>
                <main className="h-screen w-screen grid grid-cols-[18%_82%]">
                </main>
              </>
            }
          />
      </Routes>   */}
      <Navbar/>
      <Login/>
    </div>
)}

export default App;
