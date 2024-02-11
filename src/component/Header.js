import React from "react";
import logo from "../assets/logo.png";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
export const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-8 flex justify-between py-2 bg-gradient-to-b from-black z-50">
      <img src={logo} className="w-44" />

      <div className="flex p-2 items-center gap-2">
        <img
          className="w-10 h-10 rounded-full"
          src="https://tse2.explicit.bing.net/th?id=OIP.xNVHMQZeGGLge2GkMXbrXwAAAA&pid=Api&P=0&h=180"
        />
        <button
          onClick={() => handleSignOut()}
          className="font-bold text-white hover:text-red-700"
        >
          SignOut
        </button>
      </div>
    </div>
  );
};
