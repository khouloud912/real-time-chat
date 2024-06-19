import { useAuth0 } from '@auth0/auth0-react';
import Sidebar from '../components/Sidebar';

const Home = () => {
  const { user, isAuthenticated } = useAuth0();

  console.log('user', user);
  console.log('isAuthenticated', isAuthenticated);

  return (
    <div>
      <Sidebar />
    </div>
  );
};

export default Home;
