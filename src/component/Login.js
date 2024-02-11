import React, { useEffect, useState } from "react";
import { Header } from "./Header";
const Login = () => {
  const [isSign, setIsSign] = useState(true);

  useEffect(() => {
    const toggleForm = () => {
      setIsSign(!setIsSign);
    };
  }, [isSign]);
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-screen h-screen"
          src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg"
        />
      </div>
      <form className="absolute text-white p-12 bg-black w-4/12 top-16 m-auto left-0 right-0  rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSign ? "Sign In" : "Sign Up"}
        </h1>
        {!isSign ? (
          <>
            <input
              type="text"
              placeholder="Full Name..."
              className="p-4 my-4 w-full bg-gray-700"
            />
          </>
        ) : (
          ""
        )}

        <input
          type="text"
          placeholder="Email Address..."
          className="p-4 my-4 w-full bg-gray-700"
        />

        <input
          type="password"
          placeholder="Password "
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-6 w-full bg-red-700 rounded-lg">
          {isSign ? "Sign In" : "Sign Up"}
        </button>
        <p>
          {isSign ? (
            <>
              New to netflix?
              <span
                onClick={() => {
                  setIsSign(false);
                }}
                className="cursor-pointer mx-2 hover:text-blue-700"
              >
                Sign up now
              </span>
            </>
          ) : (
            <>
              Already Registered ?
              <span
                onClick={() => {
                  setIsSign(true);
                }}
                className="cursor-pointer mx-2 hover:text-blue-700"
              >
                Sign In
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
