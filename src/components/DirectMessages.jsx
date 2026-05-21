import React from "react";
import Bdg from "../assets/images/bdg.jpeg";

function DirectMessages() {
  const messages = "hello hope you are doing well";
  const wordLimit = (text, limit) => {
    const words = text.trim().split("");
    return words.length > limit
      ? words.slice(0, limit).join("") + " ..."
      : text;
  };

  return (
    <div>
      {Array(12)
        .fill("")
        .map((item, index) => (
          <div className="mb-4 ">
            <div className="flex gap-3 items-center overflow-hidden">
              <img src={Bdg} className="w-8 h-8 rounded-full" />
              <div className="flex flex-col">
                <h1 className="text-black/80 text-sm cursor-pointer">
                  Lucky Pam
                </h1>

                <p className="text-gray-500 text-xs truncate">
                  {wordLimit(messages, 5)}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default DirectMessages;
