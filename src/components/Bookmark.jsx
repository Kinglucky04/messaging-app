import React from "react";
import Bdg from "../assets/images/bdg.jpeg";
import { BsBookmarkFill } from "react-icons/bs";
import { IoCheckmarkDone } from "react-icons/io5";

function Bookmark() {
  const bookmarkedMessages = [
    {
      id: 1,
      name: "Lucky Pam",
      message: "Don’t forget the UI meeting tomorrow.",
      time: "9:45 AM",
    },
    {
      id: 2,
      name: "Daniel James",
      message: "The new design looks really clean 🔥",
      time: "Yesterday",
    },
    {
      id: 3,
      name: "Sarah Wilson",
      message: "Can you send the React files later?",
      time: "Monday",
    },
    {
      id: 4,
      name: "Michael Lee",
      message: "Voice call starts in 10 mins.",
      time: "Sunday",
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-5">
        <h1 className="text-xl font-semibold text-gray-800">Bookmarks</h1>

        <BsBookmarkFill size={20} className="text-blue-500" />
      </div>

      {/* Bookmark List */}
      <div className="flex-1 overflow-y-auto px-3 py-2">
        {bookmarkedMessages.map((chat) => (
          <div
            key={chat.id}
            className="flex items-start justify-between gap-3 py-4 border-b border-gray-200 hover:bg-gray-50 transition cursor-pointer"
          >
            <div className="flex gap-3">
              <img
                src={Bdg}
                alt="profile"
                className="w-11 h-11 rounded-full object-cover"
              />

              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-sm font-medium text-gray-800">
                    {chat.name}
                  </h2>

                  <IoCheckmarkDone size={16} className="text-blue-500" />
                </div>

                <p className="text-sm text-gray-500 mt-1 max-w-xs">
                  {chat.message}
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-400 whitespace-nowrap">
              {chat.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bookmark;
