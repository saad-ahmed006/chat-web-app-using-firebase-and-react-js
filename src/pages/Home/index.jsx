import React from "react";
import SlideBar from "../../components/Slidebar";
import Chat from "../../components/Chat";

export default function Home() {
  return (
    // <div className="h-screen flex flex-col md:flex-row">
    <div className="h-screen flex flex-col md:flex-row ">
      {/* <div className="overflow-auto no-scrollbar h-screen bg-[#111827]   w-[100%] md:w-[40%] lg:w-[25%]"> */}
      <div className="overflow-auto no-scrollbar  h-screen bg-[#111827]   w-[100%] md:w-[40%] lg:w-[25%]">
        <SlideBar />
      </div>
      <div className="bg-white w-[100%] md:w-[60%]  lg:w-[75%] h-full">
        <Chat />
      </div>
    </div>
  );
}
