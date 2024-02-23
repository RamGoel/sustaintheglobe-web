import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

export const loginUser = (
  email: string,
  password: string,
  callback: () => void
) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      //   const user = userCredential.user;
      if (callback) callback();
    })
    .catch((error) => {
      const errorMessage = error.message;
      toast(errorMessage);
    });
};
