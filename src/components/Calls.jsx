import React from "react";
import Bdg from "../assets/images/bdg.jpeg";
import { IoCall, IoVideocam } from "react-icons/io5";
import { MdCallReceived, MdCallMade, MdMissedVideoCall } from "react-icons/md";

function CallLogPage() {
  const callLogs = [
    {
      id: 1,
      name: "Lucky Pam",
      type: "incoming",
      time: "Today, 9:45 AM",
      icon: <MdCallReceived className="text-green-500" size={18} />,
    },
    {
      id: 2,
      name: "Daniel James",
      type: "outgoing",
      time: "Today, 8:10 AM",
      icon: <MdCallMade className="text-blue-500" size={18} />,
    },
    {
      id: 3,
      name: "Sarah Wilson",
      type: "missed",
      time: "Yesterday, 10:22 PM",
      icon: <MdMissedVideoCall className="text-red-500" size={18} />,
    },
    {
      id: 4,
      name: "Michael Lee",
      type: "incoming",
      time: "Yesterday, 4:30 PM",
      icon: <MdCallReceived className="text-green-500" size={18} />,
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-200">
      {/* Header */}
      <div className="fixed top-0 left-30 right-250 h-16  shadow-sm z-50 flex items-center px-6">
        <h1 className="text-2xl font-semibold text-gray-800">Calls</h1>
      </div>

      {/* Call Logs */}
      <div className="flex-1 mt-16 overflow-y-auto px-4 py-4">
        <div className="flex flex-col gap-3">
          {callLogs.map((call) => (
            <div
              key={call.id}
              className="px-2 py-3 flex items-center justify-between border-b border-gray-200 hover:bg-gray-50 transition cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <img
                  src={Bdg}
                  alt="profile"
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <h2 className="font-medium text-gray-800 text-base">
                    {call.name}
                  </h2>

                  <div className="flex items-center gap-2 mt-1">
                    {call.icon}

                    <p className="text-xs text-gray-500">{call.time}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button className="p-2 rounded-full hover:bg-blue-100 transition">
                  <IoCall size={18} className="text-blue-600" />
                </button>

                <button className="p-2 rounded-full hover:bg-green-100 transition">
                  <IoVideocam size={18} className="text-green-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CallLogPage;
