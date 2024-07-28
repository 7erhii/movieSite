import React from "react";
import SearchInput from "../searchInput";
import collageImage from "../../assets/images/collage.jpg";

export default function Header() {
  return (
    <div
      className="relative flex flex-col w-full px-10 py-2 bg-cover bg-center"
      style={{ backgroundImage: `url(${collageImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="flex  justify-between relative z-10 py-3">
        <div>LOGO</div>
        <div>
          <ul className="flex gap-5 text-white">
            <li>
              <a href="/">
                <p>Movies</p>
              </a>
            </li>
            <li>
              <a href="/">
                <p>Home</p>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative z-10 text-center text-white pt-10 pb-2">
        <h1 className="text-lg font-semibold">Movies</h1>
      </div>
    </div>
  );
}
