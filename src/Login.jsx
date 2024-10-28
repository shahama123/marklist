import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="border mx-96 mt-10 mb-20 py-20 border-black rounded-3xl shadow-lg flex flex-col justify-center items-center w-auto bg-black ">
        <h1 className="text-white text-center text-3xl font-extrabold font-serif">
          LOGIN
        </h1>
        <div className="pt-10 px-40">
          <label className="text-white font-semibold font-serif">
            User Name
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            className="mt-3 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring "
          />
          <div className="mt-10">
            <label className="text-white font-semibold font-serif ">
              Password
            </label>
            <input
              type="password"
              className="mt-3 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring "
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={() => navigate("/marklist")}
              className="border rounded mt-10 px-7 py-2  bg-white text-black hover:bg-stone-400 font-serif"
            >
              Login
            </button>
          </div>
          <div className="text-white font-serif mt-4">
            <p className="">
              Don't have an account ?
              <a href="#" className="hover:underline ml-2">
                sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
