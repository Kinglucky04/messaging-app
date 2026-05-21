import React from "react";
import Bdg from "../assets/images/bdg.jpeg";

function FavMessage() {
  let message = "Hello there! hope u are doing well trust everything is grat";
  const wordLimit = (text, limit) => {
    const words = text.trim().split(" ");
    return words.length > limit
      ? words.slice(0, limit).join(" ") + " ..."
      : text;
  };
  return (
    <div className="">
      {Array(3)
        .fill("")
        .map((item, index) => (
          <div
            key={index}
            className="flex gap-3 items-center overflow-hidden mb-4"
          >
            <img
              src={Bdg}
              className="w-8 h-8 rounded-full object-cover shrink-0"
            />
            <div>
              <h1 className="text-black/80 text-sm cursor-pointer">
                Lucky Pam
              </h1>
              <p className="text-gray-500 text-xs truncate">
                {wordLimit(message, 4)}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default FavMessage;
