import React, { useState } from "react";

const AddAdminComponent: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [hover, setHover] = useState(false);
  const handleAddLogic = () => {
    // Handle login logic here
  };
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-full max-w-md">
        <h1 className="text-center text-4xl text-gray-400 font-bold mb-8">
          ADD ADMIN
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
  );
};

export default AddAdminComponent;
