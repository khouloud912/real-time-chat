import { useAuth0 } from '@auth0/auth0-react';

const Home = () => {
  const { user, isAuthenticated } = useAuth0();

  console.log('user', user);
  console.log('isAuthenticated', isAuthenticated);

  return (
    isAuthenticated && (
      <div>
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
      </div>
    )
  );
};

export default Home;
