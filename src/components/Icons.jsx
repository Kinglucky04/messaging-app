import React from "react";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import { BsBookmarkFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { TbBrain } from "react-icons/tb";

function Icons() {
  return (
    <div className="  flex flex-col items-center ">
      <div className=" relative group flex items-center text-center gap-1 ">
        <FaUserCircle
          size={25}
          className="text-gray-400 mt-12 cursor-pointer"
        />
        <p className="text-sm  bg-black/70 px-2 py-1 mt-12 hidden group-hover:block absolute left-8 rounded">
          Profile
        </p>
      </div>
      <div className=" relative group flex items-center text-center gap-1 ">
        <BsChatDotsFill
          size={25}
          className="text-blue-400 cursor-pointer mt-8"
        />
        <p className="text-sm  bg-black/70 px-2 py-1 mt-8 hidden group-hover:block absolute left-8 rounded">
          Chats
        </p>
      </div>
      <div className="relative group flex items-center text-center gap-1 ">
        <IoCall size={25} className="text-blue-400 cursor-pointer mt-8" />
        <p className="text-sm  bg-black/70 px-2 py-1 mt-8 hidden group-hover:block absolute left-8 rounded">
          Calls
        </p>
      </div>
      <div className="relative group flex items-center text-center gap-1 ">
        <BsBookmarkFill
          size={25}
          className="text-blue-400 cursor-pointer mt-8"
        />
        <p className="text-sm  bg-black/70 px-2 py-1 mt-8 hidden group-hover:block absolute left-8 rounded">
          Bookmarks
        </p>
      </div>
      <div className="relative group flex items-center text-center gap-1 ">
        <FiSettings size={25} className="text-blue-400 cursor-pointer mt-8" />
        <p className="text-sm  bg-black/70 px-2 py-1 mt-8 hidden group-hover:block absolute left-8 rounded">
          Settings
        </p>
      </div>
      <div className="relative group flex items-center text-center gap-1 ">
        <TbBrain size={25} className="text-blue-400 cursor-pointer mt-8" />
        <p className="text-sm  bg-black/70 px-2 py-1 mt-8 hidden group-hover:block absolute left-8 rounded">
          AI Assistant
        </p>
      </div>
    </div>
  );
}

export default Icons;
