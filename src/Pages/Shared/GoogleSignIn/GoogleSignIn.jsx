import React, { useContext } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AuthContext } from "../../Provider/AuthProvider";

const GoogleSignIn = () => {
  const { googleSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="divider">Or</div>
      <div className="text-center">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle btn-outline"
        >
          <AiFillGoogleCircle className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default GoogleSignIn;
