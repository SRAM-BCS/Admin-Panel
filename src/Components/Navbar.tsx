import React, { useEffect, useState } from "react";
import Logo from "../assets/iiitm.png";
import { useAuth } from "../AuthContext";
interface NavProps {
  currentUser: any;
}
const Navbar: React.FC<NavProps> = ({ currentUser }) => {
  const authCtx = useAuth()
  const [url, setUrl] = useState(window?.location?.href);
  const navStyle: React.CSSProperties = {
    background: "#222831",
  };

  const linkStyle: React.CSSProperties = {
    color: "white",
    padding: "0.75rem",
    borderRadius: "0.25rem",
    fontSize: "1.1rem",
    fontWeight: "500",
    marginLeft: "0.5rem",
    textDecoration: "none",
  };
  useEffect(() => {
    setUrl(window?.location?.href);
  }, [url]);
  return (
    <nav className="border-gray-200 bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            <img src={Logo} alt="Logo" width={45} height={25} />
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none text-gray-400"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          {currentUser ? (
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
              <li>
                <a
                  href="/student-dashboard"
                  className={
                    !url?.includes("student")
                      ? "block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 hover:text-blue-500"
                      : "block py-2 pl-3 pr-4 md:text-blue-500 text-white md:bg-transparent bg-blue-700 rounded md:bg-transparent md:p-0 hover:text-blue-500"
                  }
                >
                  Student
                </a>
              </li>
              <li>
                <a
                  href="/faculty-dashboard"
                  className={
                    !url?.includes("faculty")
                      ? "block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-white hover:text-blue-500"
                      : "block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 md:bg-transparent md:text-blue-500 bg-blue-700 text-white hover:text-blue-500"
                  }
                >
                  Faculty
                </a>
              </li>
              <li>
                <a
                  href="/admin-dashboard"
                  className={
                    !url?.includes("admin")
                      ? "block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-white hover:text-blue-500"
                      : "block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 md:bg-transparent md:text-blue-500 text-white bg-blue-700 hover:text-blue-500"
                  }
                >
                  Admin
                </a>
              </li>
              <li>
                <a
                  href="/classroom-dashboard"
                  className={
                    !url?.includes("classroom")
                      ? "block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-white hover:text-blue-500"
                      : "block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 md:bg-transparent md:text-blue-500 text-white bg-blue-700 hover:text-blue-500"
                  }
                >
                  Classroom
                </a>
              </li>
              <li>
                <span
                  className={
                    "block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-white hover:text-blue-500"
                  }
                  onClick={() => {
                    authCtx.logout()
                  }}
                >
                  Logout
                </span>
              </li>
            </ul>
          ) : null}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

