import {
  PlusCircleOutlined,
  PhoneOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const MeetingSidebar = () => {
  const contacts = [
    {
      id: 1,
      name: 'John Doe',
      lastMessage: 'Hey, how are you?',
      messageCount: 3,
      imageUrl: 'https://via.placeholder.com/50', // Replace with actual image URL
    },
    {
      id: 2,
      name: 'Jane Smith',
      lastMessage: "Let's catch up later.",
      messageCount: 1,
      imageUrl: 'https://via.placeholder.com/50',
    },
    {
      id: 3,
      name: 'Fake Contact',
      lastMessage: 'This is a fake contact.',
      messageCount: 0,
      imageUrl: 'https://via.placeholder.com/50',
    },
  ];
  return (
    <div className="fixed top-[52vh] flex flex-col h-[50vh] w-72 bg-white dark:bg-gray-800 shadow-xl rounded-lg">
      <div className="flex justify-between mt-3 px-4">
        <h1 className="text-left text-md font-semibold dark:text-white">
          Calls
        </h1>
        <div className="flex items-center">
          <PlusCircleOutlined className=" mr-1 text-md dark:text-white" />
          <h1 className="text-right text-md font-semibold dark:text-white">
            New Meet
          </h1>
        </div>
      </div>

      <div className="flex-1 flex flex-col p-3 space-y-3">
        {contacts.map((contact, index) => (
          <div
            key={contact.id}
            className={`flex items-start bg-gray-100 dark:bg-gray-700 rounded-lg p-2 border-b dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 ${index !== 0 ? 'mt-2' : ''}`}
          >
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={contact.imageUrl}
              alt={contact.name}
            />
            <div className="ml-3 flex-0">
              <div className="flex justify-between mb-1">
                <span className="font-semibold text-xs dark:text-white">
                  {contact.name}
                </span>
                <div className="flex space-x-2 items-center">
                  <PhoneOutlined className="text-gray-600 dark:text-gray-400 cursor-pointer" />
                  <VideoCameraOutlined className="text-gray-600 dark:text-gray-400 cursor-pointer" />
                </div>
              </div>
              <span className="text-xs text-gray-600 dark:text-gray-400 text-left w-full">
                {contact.lastMessage}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetingSidebar;
