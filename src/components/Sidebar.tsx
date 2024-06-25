import {
  HomeOutlined,
  SaveOutlined,
  SearchOutlined,
  SettingOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';

const Sidebar = ({ toggleDarkMode }: any) => {
  return (
    <div className="fixed top-0 left-0 h-full w-full max-w-[5rem] flex-col rounded-xl bg-white bg-clip-border p-2 text-gray-700 shadow-xl shadow-blue-gray-900/5">
      <nav className="flex min-w-[60px] flex-col gap-0.5 p-1 font-sans text-base font-normal text-blue-gray-700">
        <div
          role="button"
          className="flex flex-col items-center w-full p-2 leading-tight transition-all rounded-lg outline-none text-center hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <HomeOutlined style={{ fontSize: '20px' }} />
          <span className="mt-0.5 text-sm">Home</span>
        </div>
        <div
          role="button"
          className="flex flex-col items-center w-full p-2 leading-tight transition-all rounded-lg outline-none text-center hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <SearchOutlined style={{ fontSize: '20px' }} />
          <span className="mt-0.5 text-sm">Search</span>
        </div>
        <div
          role="button"
          className="flex flex-col items-center w-full p-2 leading-tight transition-all rounded-lg outline-none text-center hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <SaveOutlined style={{ fontSize: '20px' }} />
          <span className="mt-0.5 text-sm">Save</span>
        </div>
        <div
          role="button"
          className="flex flex-col items-center w-full p-2 leading-tight transition-all rounded-lg outline-none text-center hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <ShareAltOutlined style={{ fontSize: '20px' }} />
          <span className="mt-0.5 text-sm">Share</span>
        </div>
        <div
          role="button"
          className="flex flex-col items-center w-full p-2 leading-tight transition-all rounded-lg outline-none text-center hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <SettingOutlined style={{ fontSize: '20px' }} />
          <span className="mt-0.5 text-sm">Settings</span>
        </div>
        <div
          role="button"
          className="flex flex-col items-center w-full p-2 leading-tight transition-all rounded-lg outline-none text-center hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          onClick={toggleDarkMode}
        >
          <HomeOutlined style={{ fontSize: '20px' }} />
          <span className="mt-0.5 text-sm">Toggle Dark Mode</span>
        </div>
      </nav>
    </div>
  );
};
export default Sidebar;
