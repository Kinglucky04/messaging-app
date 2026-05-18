import React from "react";
import Bdg from "../assets/images/bdg.jpeg";

function DirectMessages() {
  return (
    <div className=" ">
      <div className="flex gap-3 items-center overflow-hidden">
        <img src={Bdg} className="w-8 h-8 rounded-full" />
        <p className="text-black/80 text-sm cursor-pointer">Lucky Pam</p>
      </div>
    </div>
  );
}

export default DirectMessages;
