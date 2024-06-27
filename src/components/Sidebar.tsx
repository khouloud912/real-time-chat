import {
  HomeOutlined,
  SaveOutlined,
  SearchOutlined,
  SettingOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import ToggleSwitch from './ToggleSwitch';
import { useState } from 'react';

const Sidebar = ({ toggleDarkMode }: any) => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    toggleDarkMode();
  };
  return (
    <div className="fixed top-0 left-0 h-full w-full max-w-[5rem] flex-col rounded-xl bg-white bg-clip-border p-2 text-gray-700 shadow-xl shadow-blue-gray-900/5 dark:bg-gray-800 dark:text-white">
      <nav className="flex min-w-[60px] flex-col gap-0.5 p-1 font-sans text-base font-normal text-blue-gray-700 dark:text-white">
        <div
          role="button"
          className="flex flex-col items-center w-full p-2 leading-tight transition-all rounded-lg outline-none text-center hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 dark:hover:bg-gray-700 dark:hover:bg-opacity-80 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:bg-opacity-80 dark:focus:text-white dark:active:bg-gray-700 dark:active:bg-opacity-80 dark:active:text-white"
        >
          <HomeOutlined style={{ fontSize: '20px' }} />
          <span className="mt-0.5 text-sm">Home</span>
        </div>
        <div
          role="button"
          className="flex flex-col items-center w-full p-2 leading-tight transition-all rounded-lg outline-none text-center hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 dark:hover:bg-gray-700 dark:hover:bg-opacity-80 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:bg-opacity-80 dark:focus:text-white dark:active:bg-gray-700 dark:active:bg-opacity-80 dark:active:text-white"
        >
          <SearchOutlined style={{ fontSize: '20px' }} />
          <span className="mt-0.5 text-sm">Search</span>
        </div>
        <div
          role="button"
          className="flex flex-col items-center w-full p-2 leading-tight transition-all rounded-lg outline-none text-center hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 dark:hover:bg-gray-700 dark:hover:bg-opacity-80 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:bg-opacity-80 dark:focus:text-white dark:active:bg-gray-700 dark:active:bg-opacity-80 dark:active:text-white"
        >
          <SaveOutlined style={{ fontSize: '20px' }} />
          <span className="mt-0.5 text-sm">Save</span>
        </div>
        <div
          role="button"
          className="flex flex-col items-center w-full p-2 leading-tight transition-all rounded-lg outline-none text-center hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 dark:hover:bg-gray-700 dark:hover:bg-opacity-80 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:bg-opacity-80 dark:focus:text-white dark:active:bg-gray-700 dark:active:bg-opacity-80 dark:active:text-white"
        >
          <ShareAltOutlined style={{ fontSize: '20px' }} />
          <span className="mt-0.5 text-sm">Share</span>
        </div>
        <div
          role="button"
          className="flex flex-col items-center w-full p-2 leading-tight transition-all rounded-lg outline-none text-center hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 dark:hover:bg-gray-700 dark:hover:bg-opacity-80 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:bg-opacity-80 dark:focus:text-white dark:active:bg-gray-700 dark:active:bg-opacity-80 dark:active:text-white"
        >
          <SettingOutlined style={{ fontSize: '20px' }} />
          <span className="mt-0.5 text-sm">Settings</span>
        </div>
        <ToggleSwitch darkMode={darkMode} onToggle={handleToggleDarkMode} />
      </nav>
    </div>
  );
};

export default Sidebar;
