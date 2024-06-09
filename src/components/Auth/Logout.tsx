import { useAuth } from '../../auth';

const LogoutButton = () => {
  const { logout } = useAuth();

  return <button onClick={logout}>Log Out</button>;
};

export default LogoutButton;
