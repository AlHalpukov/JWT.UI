import { SignUp } from "components/SignUp";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div>
      <h1>Register</h1>
      <SignUp/>
      Already have account? <Link to="/login">Login</Link>
    </div>
  );
};

export default RegisterPage;
