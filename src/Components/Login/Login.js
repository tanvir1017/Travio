import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { googleSignin, setError, setIsLoad, setUser } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  const handleGoogleLogin = () => {
    googleSignin()
      .then((result) => {
        history.push(redirect_uri);
        setUser(result.user);
      })
      .catch((error) => setError(error.message))
      .finally(() => {
        setIsLoad(false);
      });
  };
  return (
    <>
      <div className="card container text-center p-5 w-50 my-5">
        <div className="card-title fs-1 fw-bold">Please Log in first</div>
        <div
          onClick={handleGoogleLogin}
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
