import React from "react";
import FavMessage from "./FavMessage";
import DirectMessages from "./DirectMessages";

function ChatUi() {
  return (
    <div className="flex flex-col py-7 px-5">
      <div className="flex justify-between">
        <h1 className="text-2xl text-black/70">Chats</h1>
        <p className="bg-blue-200 py-1 px-3 rounded cursor-pointer text-blue-500">
          +
        </p>
      </div>
      <div className="mt-5">
        <input
          type="text"
          placeholder="Search chats..."
          className="bg-gray-100 w-full text-sm py-2 px-4 rounded outline-0"
        />
      </div>
      <div className="mt-8">
        <h1 className="text-sm uppercase text-black/70 mb-4">favorites</h1>
        <FavMessage />
      </div>
      <div className="mt-15">
        <h1 className="text-sm uppercase text-black/70 mb-4">
          direct messages
        </h1>
        <DirectMessages />
      </div>
    </div>
  );
}

export default ChatUi;
