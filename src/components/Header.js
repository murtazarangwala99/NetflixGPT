import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  // console.log(user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        // Navigate to Error Page
        // navigate("/error");
      });
  };
  return (
    <div className="absolute flex justify-between items-center w-screen px-12 py-2 bg-gradient-to-b from-black">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-[250px]"
      />
      {/* Show only when sing-in */}
      {user && (
        <div className="flex items-center gap-2">
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
