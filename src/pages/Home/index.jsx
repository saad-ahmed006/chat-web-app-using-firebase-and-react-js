import React from "react";
import SlideBar from "../../components/Slidebar";
import Chat from "../../components/Chat";

export default function Home() {
  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* <div className='bg-[#111827] md:w-[40%] lg:w-[33%]'> */}
      <div className="bg-[#111827] w-[100%] lg:w-[500px]">
        <SlideBar />
      </div>
      {/* <div className='bg-teal-500 md:w-[60%]  lg:w-[67%] h-full'>    */}
      <div className="bg-teal-500 w-[100%]  lg:w-[1000px] h-full">
        <Chat />
      </div>
    </div>
  );
}
