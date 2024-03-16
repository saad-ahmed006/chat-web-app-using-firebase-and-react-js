import React from "react";
import { FaRocketchat } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center py-5 px-2 bg-gray-100">
      <div className="">
        <p className="mx-1 flex flex-row items-center text-lg italic">
          ChatSite
          <span>
            <FaRocketchat className="text-md mx-1 text-indigo-600" />
          </span>
        </p>
      </div>
      <div className="flex flex-row justify-end items-center w-[80%]">
        <img
          src={
            "https://static.vecteezy.com/system/resources/previews/007/409/979/original/people-icon-design-avatar-icon-person-icons-people-icons-are-set-in-trendy-flat-style-user-icon-set-vector.jpg"
          }
          className="w-6 h-6 rounded-full mx-2"
        ></img>
        <p className="mx-1.5 text-sm italic ">Syed Saad</p>
        <div className="mx-1.5 bg-[#111827] text-white px-2.5 py-1.5 rounded-sm font-bold italic">
          Logout
        </div>
      </div>
    </div>
  );
}
