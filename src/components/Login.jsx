import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { Form } from "./Form";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
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
        alert("Invalid User    " + error.code + "  " + error.message)
      );
  };

  return <Form title="Log In" handleClick={handleLogin} />;
};

export { Login };
