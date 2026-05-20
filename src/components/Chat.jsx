import React from "react";
import { useState } from "react";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import { BsBookmarkFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { TbBrain } from "react-icons/tb";
import Icons from "./Icons";
import ChatUi from "./ChatUi";
import Message from "./Message";
import Profile from "./Profile";
import CallLogPage from "./Calls";
import Bookmark from "./Bookmark";
import SettingsPage from "./Settings";

function Chat() {
  const [activePage, setActivePage] = useState("chat");
  return (
    <div className="flex overflow-hidden">
      <div className="bg-black/80 w-30 h-screen fixed text-white">
        <div className="flex flex-col items-center py-8 px-5">
          <HiChatBubbleLeftRight
            size={30}
            className="text-blue-400 cursor-pointer"
          />
          <div className="  flex flex-col items-center ">
            <div className=" relative group flex items-center text-center gap-1 ">
              <FaUserCircle
                size={25}
                className="text-gray-400 mt-12 cursor-pointer"
                onClick={() => setActivePage("profile")}
              />
              <p className="text-sm  bg-black/70 px-2 py-1 mt-12 hidden group-hover:block absolute left-8 rounded">
                Profile
              </p>
            </div>
            <div className=" relative group flex items-center text-center gap-1 ">
              <BsChatDotsFill
                size={25}
                className="text-blue-400 cursor-pointer mt-8"
                onClick={() => setActivePage("chat")}
              />
              <p className="text-sm  bg-black/70 px-2 py-1 mt-8 hidden group-hover:block absolute left-8 rounded">
                Chats
              </p>
            </div>
            <div className="relative group flex items-center text-center gap-1 ">
              <IoCall
                size={25}
                className="text-blue-400 cursor-pointer mt-8"
                onClick={() => setActivePage("calls")}
              />
              <p className="text-sm  bg-black/70 px-2 py-1 mt-8 hidden group-hover:block absolute left-8 rounded">
                Calls
              </p>
            </div>
            <div className="relative group flex items-center text-center gap-1 ">
              <BsBookmarkFill
                size={25}
                className="text-blue-400 cursor-pointer mt-8"
                onClick={() => setActivePage("bookmarks")}
              />
              <p className="text-sm  bg-black/70 px-2 py-1 mt-8 hidden group-hover:block absolute left-8 rounded">
                Bookmarks
              </p>
            </div>
            <div className="relative group flex items-center text-center gap-1 ">
              <FiSettings
                size={25}
                className="text-blue-400 cursor-pointer mt-8"
                onClick={() => setActivePage("settings")}
              />
              <p className="text-sm  bg-black/70 px-2 py-1 mt-8 hidden group-hover:block absolute left-8 rounded">
                Settings
              </p>
            </div>
            <div className="relative group flex items-center text-center gap-1 ">
              <TbBrain
                size={25}
                className="text-blue-400 cursor-pointer mt-8"
                onClick={() => setActivePage("ai")}
              />
              <p className="text-sm  bg-black/70 px-2 py-1 mt-8 hidden group-hover:block absolute left-8 rounded">
                AI Assistant
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-80 h-screen ml-30 ">
        {activePage === "chat" && <ChatUi />}

        {activePage === "profile" && <Profile />}

        {activePage === "calls" && <CallLogPage />}

        {activePage === "bookmarks" && <Bookmark />}

        {activePage === "settings" && <SettingsPage />}
      </div>
      {/* <div className="bg-gray-200 flex-1 flex flex-col justify-center items-center">
        <div className="bg-blue-200 px-5 py-5 rounded-full">
          <HiChatBubbleLeftRight size={70} className="text-blue-500" />
        </div>
        <div className="text-center mt-5">
          <h1 className="text-2xl font-bold">Welcome to Voxiq-chat</h1>
          <p className="text-sm ">The Best Online Messaging Platform</p>
        </div>
        <div className="mt-7">
          <button className=" text-white py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded cursor-pointer">
            Get Started
          </button>
        </div>
      </div> */}

      <div className="bg-gray-200 flex-1 overflow-y-auto">
        <Message />
      </div>
    </div>
  );
}

export default Chat;
