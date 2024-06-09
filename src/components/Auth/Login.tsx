import { useAuth } from '../../auth';

const Login = () => {
  const { login } = useAuth();
  return <button onClick={login}>Log In</button>;
};
export default Login;
