import React, { useState } from "react";
import Message from "../components/Message";
import { FaVideo } from "react-icons/fa";
import { IoCall, IoSend } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { CiLink } from "react-icons/ci";
import { MdOutlineUploadFile } from "react-icons/md";
const messageArray = [
  {
    id: 1,
    messageText:
      "That's awesome. I think our users will really appreciate the improvements.",
    status: "recive",
  },
  {
    id: 2,
    messageText:
      "Text messaging, or texting, is the act of composing and sending electronic.",
    status: "send",
  },
  {
    id: 3,
    // messageText:
    //   "That's awesome. I think our users will really appreciate the improvements.",
    status: "recive",
    img: "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    messageText:
      "Text messaging, or texting, is the act of composing and sending electronic.",
    status: "send",
  },
  {
    id: 5,
    messageText:
      "That's awesome. I think our users will really appreciate the improvements.",
    status: "recive",
    img: "https://images.pexels.com/photos/1382726/pexels-photo-1382726.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    messageText:
      "Text messaging, or texting, is the act of composing and sending electronic.",
    status: "send",
    img: "WhatsApp Image 2024-02-03 at 4.19.51 PM.jpeg",
  },
  {
    id: 7,
    messageText:
      "That's awesome. I think our users will really appreciate the improvements.",
    status: "recive",
  },
  {
    id: 8,
    messageText:
      "Text messaging, or texting, is the act of composing and sending electronic.",
    status: "send",
  },
];
export default function Chat() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isMessageDropDownOpen, setIsMessageDropDownOpen] = useState(null);
  const toggleDropDownOpen = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const toggleMessageDropDownOpen = (messageId) => {
    setIsMessageDropDownOpen((prevState) =>
      prevState === messageId ? null : messageId
    );
    console.log(isMessageDropDownOpen);
  };
  return (
    <>
      <div className="relative bg-gray-300 h-full  md:h-screen ">
        <div className="info flex flex-row justify-between items-center md:absolute md:top-0 md:z-50 py-5 px-6 bg-[#111827] italic font-semibold text-white border-t border-white md:border-none w-full ">
          <p className="text-xl">Syed Saad</p>
          <div className="flex flex-row text-2xl space-x-6 ">
            <FaVideo cursor={"pointer"} />
            <IoCall cursor={"pointer"} />
            <BsThreeDots cursor={"pointer"} onClick={toggleDropDownOpen} />
            {isDropDownOpen ? (
              <div className="bg-white px-2 py-2  absolute top-16 right-4 w-[120px] h-[105px] rounded-sm text-center">
                <p
                  className="text-sm text-black  my-2 "
                  onClick={toggleDropDownOpen}
                >
                  Profile
                </p>
                <hr />
                <div
                  className="text-sm bg-[#111827] py-2  my-2 rounded-sm text-white "
                  onClick={toggleDropDownOpen}
                >
                  Logout
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        {/* <div className="bg-red-200 overflow-y-scroll md:h-[83%] space-y-7 py-5 absolute w-full"> */}
        <div className=" overflow-y-scroll no-scrollbar  space-y-7 py-6 lg:py-20 h-[335px] sm:h-[250px] md:absolute w-full  md:h-full">
          {messageArray.map((message, index) => (
            <Message
              key={index}
              message={message}
              isDropDownOpen={isMessageDropDownOpen}
              setIsDropDownOpen={setIsMessageDropDownOpen}
              toggleDropDownOpen={toggleMessageDropDownOpen}
            />
          ))}
        </div>

        <div className=" w-full md:absolute md:bottom-0">
          <div className="info flex flex-row justify-between items-center px-4 bg-slate-400 italic font-semibold text-white border-t border-white md:border-none w-full ">
            <input
              type="input"
              className="border-none outline-none py-5 px-2 w-full  bg-transparent  italic text-slate-900 placeholder-slate-900"
              placeholder="Type Something..."
            ></input>
            <div className="flex flex-row items-center space-x-3 text-[#111827]">
              <CiLink size={29} cursor={"pointer"} />
              <MdOutlineUploadFile size={25} cursor={"pointer"} />
              <IoSend className=" text-4xl" cursor={"pointer"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
