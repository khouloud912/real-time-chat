import {
  HomeOutlined,
  SaveOutlined,
  SearchOutlined,
  SettingOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-full max-w-[5rem] flex-col rounded-xl bg-white bg-clip-border p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5">
      <nav className="flex min-w-[60px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
        <div
          role="button"
          className="flex flex-col items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-center hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <div className="grid mr-4 place-items-center">
            <HomeOutlined style={{ fontSize: '20px' }} />
          </div>
          Home
        </div>
        <div
          role="button"
          className="flex flex-col items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-center hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <div className="grid mr-4 place-items-center">
            <SearchOutlined style={{ fontSize: '20px' }} />
          </div>
          Search
        </div>
        <div
          role="button"
          className="flex flex-col items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-center hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <div className="grid mr-4 place-items-center">
            <SaveOutlined style={{ fontSize: '20px' }} />
          </div>
          Save
        </div>
        <div
          role="button"
          className="flex flex-col items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-center hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <div className="grid mr-4 place-items-center">
            <ShareAltOutlined style={{ fontSize: '20px' }} />
          </div>
          Share
        </div>
        <div
          role="button"
          className="flex flex-col items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-center hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <div className="grid mr-4 place-items-center">
            <SettingOutlined style={{ fontSize: '20px' }} />
          </div>
          Settings
        </div>
      </nav>
    </div>
  );
};
export default Sidebar;
