import { SearchOutlined } from '@ant-design/icons';

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
      <h1 className="mt-3 px-4 text-left text-md font-semibold dark:text-white">Calls</h1>
      <div ></div>

      {/* Contact cards */}
      <div className="flex-1 flex flex-col p-2 space-y-2">
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
            <div className="ml-2 flex-1">
              <div className="flex justify-between mb-1">
                <span className="font-semibold text-xs dark:text-white">
                  {contact.name}
                </span>
                {contact.messageCount > 0 && (
                  <span className="ml-2 bg-green-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {contact.messageCount}
                  </span>
                )}
              </div>
              <span className="text-xs text-gray-600 dark:text-gray-400 text-left">
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
