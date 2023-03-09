import React from 'react';

const SideBar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-20 flex flex-col
    bg-white dark:bg-gray-900 shadow-lg mt-36"
    >
      <div className="mt-10">
        <ul>
          <li>
            <button
              href="/#Read"
              class="my-5 rounded-none shadow-none capitalize text-gray-900 dark:text-white border-2 w-20 hover:underline bg-gray-700"
            >
              Read
            </button>
          </li>
          <li>
            <button
              href="/#Read"
              class="my-5 rounded-none shadow-none capitalize text-gray-900 dark:text-white border-2 w-20 hover:underline bg-gray-700"
            >
              Watch
            </button>
          </li>
          <li>
            <button
              href="/#Read"
              class="my-5 rounded-none shadow-none capitalize text-gray-900 dark:text-white border-2 w-20 hover:underline bg-gray-700"
            >
              Practice
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default SideBar;
