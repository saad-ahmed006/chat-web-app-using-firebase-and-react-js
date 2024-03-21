import React from "react";

export default function Search() {
  return (
    <div className=" shadow-lg shadow-white/ border-b border-slate-700  ">
      <input
        type="search"
        className="w-full py-2 px-2   outline-none bg-transparent text-white placeholder-indigo-100 italic text-sm  "
        placeholder="Find a user "
      ></input>
    </div>
  );
}
