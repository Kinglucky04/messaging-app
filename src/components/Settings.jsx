import React from "react";
import Bdg from "../assets/images/bdg.jpeg";
import {
  IoPersonCircle,
  IoNotifications,
  IoLockClosed,
  IoMoon,
  IoHelpCircle,
  IoLogOut,
} from "react-icons/io5";
import { FiChevronRight } from "react-icons/fi";

function SettingsPage() {
  const settingsOptions = [
    {
      id: 1,
      title: "Account",
      subtitle: "Profile, privacy, security",
      icon: <IoPersonCircle size={22} className="text-blue-500" />,
    },
    {
      id: 2,
      title: "Notifications",
      subtitle: "Messages, calls, sounds",
      icon: <IoNotifications size={22} className="text-yellow-500" />,
    },
    {
      id: 3,
      title: "Privacy",
      subtitle: "Blocked contacts, visibility",
      icon: <IoLockClosed size={22} className="text-green-500" />,
    },
    {
      id: 4,
      title: "Dark Mode",
      subtitle: "Theme and appearance",
      icon: <IoMoon size={22} className="text-purple-500" />,
    },
    {
      id: 5,
      title: "Help",
      subtitle: "Support and FAQ",
      icon: <IoHelpCircle size={22} className="text-orange-500" />,
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="h-16 bg-white border-b border-gray-200 flex items-center px-5">
        <h1 className="text-xl font-semibold text-gray-800">Settings</h1>
      </div>

      {/* Profile Section */}
      <div className="bg-white px-5 py-5 flex items-center gap-4 border-b border-gray-200">
        <img
          src={Bdg}
          alt="profile"
          className="w-14 h-14 rounded-full object-cover"
        />

        <div>
          <h2 className="text-base font-medium text-gray-800">Lucky Pam</h2>

          <p className="text-sm text-gray-500">Frontend Developer</p>
        </div>
      </div>

      {/* Settings Options */}
      <div className="flex-1 overflow-y-auto">
        {settingsOptions.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between px-5 py-4 border-b border-gray-200 hover:bg-gray-50 transition cursor-pointer"
          >
            <div className="flex items-center gap-4">
              {item.icon}

              <div>
                <h2 className="text-sm font-medium text-gray-800">
                  {item.title}
                </h2>

                <p className="text-xs text-gray-500 mt-1">{item.subtitle}</p>
              </div>
            </div>

            <FiChevronRight size={18} className="text-gray-400" />
          </div>
        ))}
      </div>

      {/* Logout */}
      <div className="px-5 py-4 border-t border-gray-200 bg-white">
        <button className="flex items-center gap-3 text-red-500 hover:text-red-600 transition cursor-pointer">
          <IoLogOut size={22} />

          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}

export default SettingsPage;
