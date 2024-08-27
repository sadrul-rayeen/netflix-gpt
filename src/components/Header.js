import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { langauges, logo_url } from "../utils/constant";
import { gptActiveOrNot } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribes = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribes();
  }, []);

  const handleSignOut = async () => {
    try {
      const userSingout = signOut(auth);
    } catch (error) {
      console.log(error.message);
      navigate("/error");
    }
  };

  const handleIsGptActive = () => {
    dispatch(gptActiveOrNot());
  };

  const languageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={logo_url} alt="logo" />
      {user && (
        <div className="flex p-2">
          {showGptSearch && (
            <select
              className="rounded-lg m-2 p-2 bg-black text-white"
              onChange={languageChange}
            >
              {langauges &&
                langauges.map((d) => {
                  return (
                    <option key={d?.value} value={d?.value}>
                      {d?.label}
                    </option>
                  );
                })}
            </select>
          )}
          <button
            onClick={handleIsGptActive}
            className="py-2 px-4 m-2 bg-purple-500 text-white rounded-lg"
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <img
            className="w-12 h-12 rounded-full m-2 cursor-pointer"
            src={user?.photoURL}
            alt="usericon"
          />
          <button
            onClick={handleSignOut}
            className="font-bold text-red-600 text-xl"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
