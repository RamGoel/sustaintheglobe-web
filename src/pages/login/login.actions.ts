import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { UserProps } from "../../types/user.types";

export const loginUser = (
  email: string,
  password: string,
  callback: (user: UserProps) => void
) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (callback) callback(user);
    })
    .catch((error) => {
      const errorMessage = error.message;
      toast(errorMessage);
    });
};
