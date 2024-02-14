import React, { useEffect, useRef, useState } from "react";
import { Header } from "./Header";
import { checkValidate } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { bg_img } from "../utils/Constant";
const Login = () => {
  const navigate = useNavigate();
  const [isSign, setIsSign] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  useEffect(() => {
    const toggleForm = () => {
      setIsSign(!setIsSign);
    };
  }, [isSign]);

  const handleButtonClick = () => {
    //validation
    const msg = checkValidate(email.current.value, password.current.value);
    setErrorMsg(msg);
    if (msg) return;
    if (!isSign) {
      //SIgn up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL:
              "https://avatars.githubusercontent.com/u/116295222?s=400&u=bdf6c734c6240fd11b5c752f5abd5973952dda26&v=4",
          })
            .then(() => {
              // Profile updated!
              // ...
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMsg(error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      //Sign in logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="w-screen h-screen" src={bg_img} />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute text-white p-12 h-auto bg-black w-4/12  m-auto top-12 left-0 right-0  rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSign ? "Sign In" : "Sign Up"}
        </h1>
        {!isSign ? (
          <>
            <input
              ref={name}
              type="text"
              placeholder="Full Name..."
              className="p-4 my-4 w-full bg-gray-700"
            />
          </>
        ) : (
          ""
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address..."
          className="p-4 my-4 w-full bg-gray-700"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password "
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-600 font-bold transition-all ease-in-out duration-200 ">
          {errorMsg}
        </p>
        <button
          className="p-4 my-6 w-full bg-red-700 rounded-lg"
          onClick={() => handleButtonClick()}
        >
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
