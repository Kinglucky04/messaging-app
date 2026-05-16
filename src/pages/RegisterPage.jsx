import React from "react";
import { useState } from "react";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function RegisterPage() {
  const handleFormInput = (event) => {};
  return (
    <div className="bg-blue-500 w-full h-screen flex">
      <div className="flex-1 flex py-10 px-5">
        <HiChatBubbleLeftRight size={40} className="text-white" />
        <div className="text-white text-sm font-semibold ">
          <h1 className="uppercase font-bold">voxig</h1>
          <p>Best online messaging platform</p>
        </div>
      </div>
      <div className="py-6 px-12 flex justify-end ">
        <div className=" bg-white w-250 h-190 py-8 text-black rounded-xl">
          <div className="flex flex-col justify-center items-center ">
            <div>
              <h1 className="text-center text-4xl font-semibold text-blue-500">
                Register
              </h1>
              <p className="text-sm text-gray-600">
                Register to chat with friends around the world
              </p>
            </div>

            <form
              action=""
              className="mt-4 bg-gray-50 px-12 py-12 w-150 rounded-2xl"
            >
              <div className="flex flex-col mb-4">
                <label htmlFor="">Full Name</label>
                <input
                  type="text"
                  placeholder="enter your name"
                  className="border-1 border-gray-200 px-2 py-1 rounded outline-0"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  placeholder="enter your email"
                  className="border-1 border-gray-200 px-2 py-1 rounded outline-0"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  placeholder="enter your password"
                  className="border-1 border-gray-200 px-2 py-1 rounded outline-0"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="">Confirm Password</label>
                <input
                  type="password"
                  placeholder="confirm your password"
                  className="border-1 border-gray-200 px-2 py-1 rounded outline-0"
                />
              </div>
              <div className="flex text-center gap-2 mb-6">
                <input type="radio" />
                Remember me
              </div>
              <div className="flex justify-center items-center">
                <button className="bg-blue-500 px-6 py-3 w-full rounded text-white font-semibold text-xl cursor-pointer">
                  Register
                </button>
              </div>
            </form>

            <div className="flex justify-center items-center gap-2 mt-1">
              <div className="w-60 h-[1px] bg-black/10"></div>
              <div>sign up with</div>
              <div className="w-60 h-[1px] bg-black/10"></div>
            </div>
            <div className="flex mt-2 gap-2 items-center">
              <div className="bg-gray-200 px-5 py-2 rounded cursor-pointer">
                <FcGoogle className="" />
              </div>
              <div className="bg-gray-200 px-5 py-2 rounded cursor-pointer">
                <FaFacebook className="text-blue-600" />
              </div>
              <div className="bg-gray-200 px-5 py-2 rounded cursor-pointer">
                <FaInstagram className="text-pink-500" />
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-400 flex gap-1">
              <p>already have an account?</p>
              <a href="" className="underline text-blue-500">
                login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
