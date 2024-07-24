import { useAuth0 } from '@auth0/auth0-react';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import ContactSidebar from '../components/ContactSidebar';
import MeetingSidebar from '../components/MeetingSidebar';

const Home = () => {
  const { user, isAuthenticated } = useAuth0();

  console.log('user', user);
  console.log('isAuthenticated', isAuthenticated);
  const [darkMode, setDarkMode] = useState(false); // State to track dark mode

  const toggleDarkMode = () => {
    console.log('mode', darkMode);
    setDarkMode(!darkMode); // Toggle dark mode state
  };
  return (
    <div
      className={`grid ${darkMode ? 'dark' : ''}  grid-cols-[max-content_1fr] gap-x-3`}
    >
      <div>
        <Sidebar toggleDarkMode={toggleDarkMode} />
      </div>
      <div className="relative">
        <ContactSidebar />
        <MeetingSidebar/>
      </div>
    </div>
  );
};

export default Home;
