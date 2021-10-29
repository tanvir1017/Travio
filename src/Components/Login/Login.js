import React from "react";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { googleSignin } = useAuth();
  return (
    <>
      <div className="card container text-center p-5 w-50 my-5">
        <div className="card-title fs-1 fw-bold">Please Log in first</div>
        <div
          onClick={googleSignin}
          style={{ cursor: "pointer" }}
          className="googleSignIn mt-4 card-body alert alert-success p-3 w-75 mx-auto "
        >
          <i className=" fa-3x fab fa-google"></i>
        </div>
        <div>______________________________</div>
      </div>
    </>
  );
};

export default Login;
