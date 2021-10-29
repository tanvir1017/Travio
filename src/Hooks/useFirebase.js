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
    const googleProvider = new GoogleAuthProvider();
    setIsLoad(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => setError(error.message))
      .finally(() => {
        setIsLoad(false);
      });
  };
  const logout = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);
  return {
    error,
    googleSignin,
    user,
    logout,
    isLoad,
  };
};

export default useFirebase;
