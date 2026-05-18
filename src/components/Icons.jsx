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
    <div>
      <FaUserCircle size={25} className="text-gray-400 mt-12 cursor-pointer" />
      <BsChatDotsFill size={25} className="text-blue-400 cursor-pointer mt-8" />
      <IoCall size={25} className="text-blue-400 cursor-pointer mt-8" />
      <BsBookmarkFill size={25} className="text-blue-400 cursor-pointer mt-8" />
      <FiSettings size={25} className="text-blue-400 cursor-pointer mt-8" />
      <TbBrain size={25} className="text-blue-400 cursor-pointer mt-8" />
    </div>
  );
}

export default Icons;
