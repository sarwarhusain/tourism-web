import { useEffect, useState } from "react";

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState();
  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        sessionStorage.setItem("email", result.user.email);
        // console.log(result.user);
        setError("");
      })
      .catch((error) => setError(error.message));
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });

  }, [])


  return {
    user,
    signInUsingGoogle,
    logOut

  }
}
export default useFirebase;