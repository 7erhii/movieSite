import { Input } from "@headlessui/react";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function SearchInput() {
  return (
    <div className="flex items-center border p-1 rounded">
      <Input
        type="text"
        placeholder="Введите текст"
        className="border-none p-0 focus:outline-none"
      />
      <IoSearchOutline />
    </div>
  );
}
