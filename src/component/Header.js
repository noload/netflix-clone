import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../store/reducers/userSlice";
import { toggleGPTSearch } from "../store/reducers/gptSlice";
import { supported_language } from "../utils/LanguageConstant";
import { changeLanguage } from "../store/reducers/configSlice";
export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showSelector = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGPTSearch = () => {
    //toggle GPT Search
    dispatch(toggleGPTSearch());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        // ...
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unsubscribe(); //this will be called when component unmount
    };
  }, []);
  return (
    <div className="absolute w-screen px-8 flex justify-between py-2 bg-gradient-to-b from-black z-50">
      <img src={logo} className="w-44" />

      {user && (
        <div className="flex p-2 items-center gap-2">
          {showSelector && (
            <select
              onChange={(e) => {
                handleLanguageChange(e);
              }}
              className="p-2 bg-gray-900 text-white m-2"
            >
              {supported_language.map((lang) => {
                return (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                );
              })}
            </select>
          )}
          <button
            onClick={() => {
              handleGPTSearch();
            }}
            className="p-2 m-2 px-4 rounded bg-purple-500 text-white"
          >
            {showSelector ? "homepage" : "GPT Search"}
          </button>
          <img
            className="w-10 h-10 rounded-full"
            src={
              user
                ? user.photoURL
                : "https://tse2.explicit.bing.net/th?id=OIP.xNVHMQZeGGLge2GkMXbrXwAAAA&pid=Api&P=0&h=180"
            }
          />
          <button
            onClick={() => handleSignOut()}
            className="font-bold text-white hover:text-red-700"
          >
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};
