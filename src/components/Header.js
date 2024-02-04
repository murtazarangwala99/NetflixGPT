import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  // console.log(user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        // Navigate to Error Page
        // navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User SignIn
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL })
        );
        navigate("/browse");
      } else {
        // User SignOut
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component unmount
    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);

  const handleGptSearchClick = () => {
    // Toggle GPT Search button
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute z-10 flex justify-between items-center w-screen px-12 py-2 bg-gradient-to-b from-black">
      <img src={LOGO_URL} alt="logo" className="w-[250px]" />
      {/* Show only when sing-in */}
      {user && (
        <div className="flex items-center gap-2">
          {/* <button
            className="py-2 px-4 bg-purple-700 my-2 mx-4 text-white rounded-lg"
            onClick={handleGptSearchClick}>
            GPT Search
          </button> */}

          {showGptSearch && (
            <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}>
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>

          <img src={user.photoURL} alt="user" className="w-[50px] rounded-lg " />
          <button
            className="p-2 m-2 bg-red-300 rounded-lg hover:underline font-semibold"
            onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
