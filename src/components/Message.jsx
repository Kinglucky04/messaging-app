import React from "react";
import Bdg from "../assets/images/bdg.jpeg";
import { MdVideoCall } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import ChatMessages from "./ChatMessages";

function Message() {
  return (
    <div className="flex flex-col h-screen">
      <div className="fixed top-0 right-0 left-110  h-16 bg-gray-300 z-50">
        <div className="flex justify-between items-center h-full px-5 ">
          <div className="flex items-center gap-4">
            <div>
              <img src={Bdg} alt="Profile" className="w-12 h-12 rounded-full" />
            </div>
            <div className="flex flex-col ">
              <h1 className="text-xl text-black/80 font-semibold cursor-pointer">
                Lucky Pam
              </h1>
              <p className="text-sm text-gray-500">Active</p>
            </div>
          </div>
          <div className="flex items-center justify-center bg-blue-200 px-3 py-2 rounded ">
            <div className="relative group">
              <MdVideoCall size={25} className="text-gray-500 cursor-pointer" />
              <p className="text-sm text-white hidden group-hover:block absolute bottom-[-50px] left-0 bg-black/70 px-1 py-1 text-center rounded">
                Video Call
              </p>
            </div>
            <div className="w-px h-5 ml-2 bg-black/50"></div>
            <div className="relative group">
              <IoCall size={25} className="text-gray-500 ml-4 cursor-pointer" />
              <p className="text-sm text-white hidden group-hover:block absolute bottom-[-50px] right-0 bg-black/70 px-1 py-1 text-center rounded">
                Voice Call
              </p>
            </div>
          </div>
        </div>
      </div>
      <ChatMessages />
      <div className=" fixed bottom-0 right-0 left-110  h-24 bg-gray-300 z-50">
        <div className="flex justify-center items-center h-full gap-5 px-5">
          <div className="w-30 flex items-center justify-center gap-8">
            <div className="relative group flex items-center justify-center">
              <BsThreeDots size={20} className="text-gray-600 cursor-pointer" />
              <p className="text-sm text-white hidden group-hover:block absolute bottom-[-30px] left-0 bg-black/70 px-1 py-1 text-center rounded">
                More
              </p>
            </div>
            <div className="relative group flex items-center justify-center">
              <BsEmojiSmile
                size={20}
                className="text-gray-600 cursor-pointer"
              />
            </div>
          </div>
          <div className="flex-1">
            <input
              type="text"
              placeholder="Type a message..."
              className="bg-gray-100 w-full text-sm outline-0 px-3 py-2 rounded"
            />
          </div>
          <div className="w-30 flex items-center justify-center gap-4">
            <FaMicrophone size={20} className="text-gray-500 cursor-pointer" />
            <div className="bg-blue-500 px-3 py-2 rounded cursor-pointer hover:bg-blue-600">
              <IoSend size={20} className="text-white  " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
