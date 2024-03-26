import { Login } from 'components/Login';
import {Link} from 'react-router-dom'

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <Login/>
      or <Link to="/register">Register</Link>
    </div>
  );
};

export default LoginPage;
