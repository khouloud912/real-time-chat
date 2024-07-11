import { SearchOutlined } from '@ant-design/icons';

const ContactSidebar = () => {
  // Sample contact data with one fake contact
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
    <div className="fixed top-0 flex flex-col h-full w-72 bg-white dark:bg-gray-800 shadow-xl">
      <div className="relative mt-3 px-4">
        <input
          type="search"
          id="default-search"
          className="block w-full h-7 py-2 pl-9 pr-4 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search..."
          required
        />
        <SearchOutlined className="absolute top-1/2 transform -translate-y-1/2 left-7 text-gray-400 dark:text-gray-300" />
      </div>

      <div className="flex justify-around p-2 border-b dark:border-gray-700 rounded-full bg-gray-100 dark:bg-gray-700">
        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white">
          All chats
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white">
          Groups
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white">
          Contacts
        </button>
      </div>

      {/* Contact cards */}
      <div className="flex-1 overflow-y-auto">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="flex items-center p-4 border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <img
              className="w-12 h-12 rounded-full object-cover"
              src={contact.imageUrl}
              alt={contact.name}
            />
            <div className="ml-4 flex-1">
              <div className="flex justify-between items-center">
                <span className="font-semibold dark:text-white">
                  {contact.name}
                </span>
                {contact.messageCount > 0 && (
                  <span className="ml-2 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {contact.messageCount}
                  </span>
                )}
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {contact.lastMessage}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactSidebar;
