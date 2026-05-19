import React from "react";
import Bdg from "../assets/images/bdg.jpeg";

function ChatMessages() {
  return (
    <div className="flex-1 mt-16 mb-24 overflow-auto px-5 py-4 bg-gray-100">
      <div className="flex flex-col gap-4">
        {/* Receiver Message */}
        <div className="flex items-end gap-2">
          <img src={Bdg} alt="profile" className="w-8 h-8 rounded-full" />

          <div className="bg-white px-4 py-2 rounded-2xl rounded-bl-sm max-w-xs shadow">
            <p className="text-sm text-gray-800">Hey, how are you doing?</p>
          </div>
        </div>

        {/* Sender Message */}
        <div className="flex justify-end">
          <div className="bg-blue-500 px-4 py-2 rounded-2xl rounded-br-sm max-w-xs shadow">
            <p className="text-sm text-white">
              I’m good! Working on the chat UI.
            </p>
          </div>
        </div>

        {/* Receiver Message */}
        <div className="flex items-end gap-2">
          <img src={Bdg} alt="profile" className="w-8 h-8 rounded-full" />

          <div className="bg-white px-4 py-2 rounded-2xl rounded-bl-sm max-w-xs shadow">
            <p className="text-sm text-gray-800">
              Nice It’s looking clean already.
            </p>
          </div>
        </div>

        {/* Sender Message */}
        <div className="flex justify-end">
          <div className="bg-blue-500 px-4 py-2 rounded-2xl rounded-br-sm max-w-xs shadow">
            <p className="text-sm text-white">Thanks </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatMessages;
