import React from "react";
import Bdg from "../assets/images/bdg.jpeg";
import { BsChatDotsFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

function Profile() {
  return (
    <div className="flex flex-col h-screen overflow-y-auto">
      <div className=" fixed top-0 left-30 right-250 bg-white  h-64 flex flex-col">
        <div className="bg-black text-white h-34 flex justify-between px-5 py-2">
          <h1 className="text-xl">My Profile</h1>
        </div>
        <div className="bg-white flex flex-col text-center justify-center items-center">
          <div>
            <img
              src={Bdg}
              alt="Profile"
              className="w-16 h-16 rounded-full -mt-8"
            />
          </div>
          <div className="mt-3">
            <h1 className="text-xl font-semibold"> Lucky Pam</h1>
            <p className="text-sm text-gray-400">Software Engineer</p>
          </div>
        </div>

        <div className="w-full h-px bg-gray-300 mt-7"></div>
      </div>

      <div className="  h-screen mt-64">
        <div className="flex flex-col px-5 py-5">
          <div>
            <p className="text-gray-400 text-sm">
              Good in several languages, bringing solutions to onchain problems
            </p>
          </div>
          <div className="mt-10 ">
            <div className=" flex items-center gap-3 text-sm ">
              <FaUser className="text-gray-400" />
              <p>Lucky Pam</p>
            </div>
            <div className=" flex items-center gap-3 text-sm mt-4 ">
              <BsChatDotsFill className="text-gray-400" />
              <p>luckypam@hotmail.com</p>
            </div>
            <div className=" flex items-center gap-3 text-sm mt-4">
              <IoLocationSharp className="text-gray-400" />
              <p>San Francisco, CA</p>
            </div>

            <div className="w-full h-px bg-gray-300 mt-7"></div>

            {/* Media Upload Section */}
            <div className="px-5 mt-6">
              <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold">Media</h1>

                <button className="text-blue-500 hover:text-blue-600 text-sm px-4 py-2 cursor-pointer">
                  show all
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="bg-gray-200 h-24 rounded-xl overflow-hidden">
                  <img
                    src={Bdg}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="bg-gray-200 h-24 rounded-xl overflow-hidden">
                  <img
                    src={Bdg}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="bg-gray-200 h-24 rounded-xl overflow-hidden">
                  <img
                    src={Bdg}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Attached Files Section */}
            <div className="px-5 mt-8 pb-10">
              <h1 className="text-lg font-semibold">Attached Files</h1>

              <div className="mt-4 flex flex-col gap-4">
                <div className="flex items-center justify-between bg-gray-100 px-4 py-3 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-3 rounded-lg">📄</div>

                    <div>
                      <h2 className="text-sm font-medium">Project-Docs.pdf</h2>
                      <p className="text-xs text-gray-400">2.4 MB</p>
                    </div>
                  </div>

                  <button className="text-blue-500 text-sm cursor-pointer">
                    Download
                  </button>
                </div>

                <div className="flex items-center justify-between bg-gray-100 px-4 py-3 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-3 rounded-lg">🖼️</div>

                    <div>
                      <h2 className="text-sm font-medium">design-image.png</h2>
                      <p className="text-xs text-gray-400">1.1 MB</p>
                    </div>
                  </div>

                  <button className="text-blue-500 text-sm cursor-pointer">
                    Download
                  </button>
                </div>

                <div className="flex items-center justify-between bg-gray-100 px-4 py-3 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-100 p-3 rounded-lg">🎵</div>

                    <div>
                      <h2 className="text-sm font-medium">voice-note.mp3</h2>
                      <p className="text-xs text-gray-400">5.8 MB</p>
                    </div>
                  </div>

                  <button className="text-blue-500 text-sm cursor-pointer">
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
