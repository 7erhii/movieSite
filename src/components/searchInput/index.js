import React, { useRef } from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function SearchInput() {
  const inputRef = useRef(null);

  const handleSearch = () => {
    console.log("Поиск");
  };

  const handleDivClick = () => {
    inputRef.current.focus();
  };

  return (
    <div
      className="flex items-center border p-1 px-6 rounded-2xl gap-4"
      onClick={handleDivClick}
      style={{ border: '1px solid rgb(255 255 255 / 30%)' }}

    >
      <input
        type="text"
        placeholder="Movie Search"
        ref={inputRef}
        className="flex-grow border-none p-0 focus:outline-none  bg-inherit text-gray-200"
        
      />
      <button
        onClick={handleSearch}
        className="p-0 border-none bg-transparent focus:outline-none"
      >
        <IoSearchOutline className="text-red-600" style={{ width: "20px", height: "20px" }} />
      </button>
    </div>
  );
}
