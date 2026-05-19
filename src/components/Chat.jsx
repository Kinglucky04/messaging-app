import React from "react";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import Icons from "./Icons";
import ChatUi from "./ChatUi";
import Message from "./Message";

function Chat() {
  return (
    <div className="flex">
      <div className="bg-black/80 w-30 h-screen fixed text-white">
        <div className="flex flex-col items-center py-8 px-5">
          <HiChatBubbleLeftRight
            size={30}
            className="text-blue-400 cursor-pointer"
          />
          <Icons />
        </div>
      </div>
      <div className="w-80 h-screen ml-30 ">
        <ChatUi />
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

      <div className="bg-gray-200 flex-1">
        <Message />
      </div>
    </div>
  );
}

export default Chat;
