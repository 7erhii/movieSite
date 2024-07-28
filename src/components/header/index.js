import React from "react";
import SearchInput from "../searchInput";
// import ThemeSwitcher from '../ui/switcher'

export default function Header() {
  return (
    <div className="flex w-full px-10 py-2  justify-between bg-gray-600 bg">
      <div>LOGO</div>
      <div>
        <SearchInput />
      </div>
      <div>{/* <ThemeSwitcher/> */}</div>
    </div>
  );
}
