import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initAuthentication from "../Firebase/Firebase.init";

initAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoad, setIsLoad] = useState(true);
  const auth = getAuth();
  const googleSignin = () => {
    setIsLoad(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };
  const logout = () => {
    setIsLoad(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsLoad(false));
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoad(false);
    });
  }, [auth]);
  return {
    error,
    googleSignin,
    user,
    logout,
    setError,
    setIsLoad,
    setUser,
    isLoad,
  };
};

export default useFirebase;
