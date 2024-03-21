import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";

export default function Message({
  message,
  isDropDownOpen,
  toggleDropDownOpen,
}) {
  // const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  // const toggleDropDownOpen = () => {
  //   setIsDropDownOpen(!isDropDownOpen);
  // };

  return (
    <>
      {/* <div class="flex items-start gap-2.5 mx-2">
        <img
          class="w-8 h-8 rounded-full"
          src={
            "https://static.vecteezy.com/system/resources/previews/007/409/979/original/people-icon-design-avatar-icon-person-icons-people-icons-are-set-in-trendy-flat-style-user-icon-set-vector.jpg"
          }
          alt="Jese image"
        />
        <div class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
          <div class="flex items-center space-x-2 rtl:space-x-reverse">
            <span class="text-sm font-semibold text-gray-900 dark:text-white">
              Bonnie Green
            </span>
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
              11:46
            </span>
          </div>
          <p class="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
            That's awesome. I think our users will really appreciate the
            improvements.
          </p>
          <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
            Delivered
          </span>
        </div>
        <button className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600">
          <HiDotsVertical />
        </button>
        <div className=" bg-white w-[120px]  px-2 py-2 absolute left-[377px] top-44 rounded-md space-y-[5px] font-semibold italic">
          <p>Reply</p>
          <hr />
          <p>Forward</p>
          <hr />
          <p>Copy</p>
          <hr />
          <p>Report</p>
          <hr />
          <p>Delete</p>
          <hr />
        </div>
      </div> */}

      <div
        className={`flex ${
          message.status === "recive" ? "" : "flex-row-reverse items-end"
        }  gap-2.5 mx-2 relative`}
      >
        <img
          className="w-8 h-8 rounded-full"
          src={
            "https://static.vecteezy.com/system/resources/previews/007/409/979/original/people-icon-design-avatar-icon-person-icons-people-icons-are-set-in-trendy-flat-style-user-icon-set-vector.jpg"
          }
          alt="Jese image"
        />
        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              Bonnie Green
            </span>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              11:46
            </span>
          </div>
          {message.img && (
            <img src={message.img } className=""></img>
            )}
            {message.messageText && (
              <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                {message.messageText}
              </p>)}
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            {message.status === "recive" ? "Recived" : "Delivered"}
          </span>
        </div>
        <button
          className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
          onClick={() => toggleDropDownOpen(message.id)}
        >
          <HiDotsVertical />
        </button>
        {isDropDownOpen === message.id && (
          <div
            className={`${
              message.status === "recive" ? "left-[410px]" : "right-[410px]"
            } bg-white w-[100px] md:w-[120px]  px-2 py-2 absolute  top-24 z-50 rounded-md space-y-[2px] font-semibold italic`}
          >
            <p>Reply</p>
            <hr />
            <p>Forward</p>
            <hr />
            <p>Copy</p>
            <hr />
            <p>Report</p>
            <hr />
            <p>Delete</p>
            <hr />
          </div>
        )}
      </div>
    </>
  );
}
