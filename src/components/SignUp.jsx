import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { Form } from "./Form";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignUp = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("user", userCredential.user);
        dispatch(
          setUser({
            id: userCredential.user.uid,
            email: userCredential.user.email,
            token: userCredential.user.accessToken,
          })
        );
        navigate("/");
      })
      .catch((error) =>
        alert("Invalid Credentials    " + error.code + "  " + error.message)
      );
  };

  return <Form title="Sign Up" handleClick={handleSignUp} />;
};

export { SignUp };
