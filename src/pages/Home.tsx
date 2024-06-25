import { useAuth0 } from '@auth0/auth0-react';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';

const Home = () => {
  const { user, isAuthenticated } = useAuth0();

  console.log('user', user);
  console.log('isAuthenticated', isAuthenticated);
  const [darkMode, setDarkMode] = useState(false); // State to track dark mode

  const toggleDarkMode = () => {
    console.log('mode', darkMode);
    setDarkMode(!darkMode); // Toggle dark mode state
    document.body.classList.toggle('dark'); // Toggle dark mode class on body
  };
  return (
    <div className={`flex ${darkMode ? 'dark' : ''}`}>
      <Sidebar toggleDarkMode={toggleDarkMode} />
    </div>
  );
};

export default Home;
