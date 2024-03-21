import React from "react";
const array = [
  { name: "saad" },
  { name: "saad" },
  { name: "saad" },
  { name: "saad" },
  { name: "saad" },
  { name: "saad" },
  { name: "saad" },
  { name: "saad" },
  { name: "saad" },
  { name: "saad" },
  { name: "saad" },
  { name: "saad" },
];
export default function Chats() {
  return (
    <>
      {/* <div className="overflow-y-auto no-scrollbar  border-red-300 h-[160px] md:h-[620px]"> */}
      <div className=" border-red-300 ">
        {array.map((i) => {
          return (
            <div className="flex flex-row items-center py-5 px-2  ">
              <img
                src={
                  "https://static.vecteezy.com/system/resources/previews/007/409/979/original/people-icon-design-avatar-icon-person-icons-people-icons-are-set-in-trendy-flat-style-user-icon-set-vector.jpg"
                }
                className="rounded-full w-11 h-11  mx-2 mr-4"
              ></img>
              <div>
                <p className="text-white italic text-lg font-semibold">Saad</p>
                <p className="text-slate-400 italic text-xs">Hello Laiba</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
