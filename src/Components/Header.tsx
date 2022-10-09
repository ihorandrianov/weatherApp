import { FC } from "react";
import header from "../assets/header-img.jpg";
import location from "../assets/location.svg";
import { LocationLogo } from "./LocationLogo";

export const Header: FC = () => (
  <div
    className="w-[90%] h-[300px] bg-no-repeat bg-cover bg-center m-14 mb-5 rounded-3xl shadow-2xl relative"
    style={{ backgroundImage: `url(${header})` }}
  >
    <div className="absolute top-20 left-20 flex gap-2">
      <LocationLogo />
      <div className="">
        <h1 className="text-2xl text-white mb-2">Singapore</h1>
        <p className="text-base text-gray-200">Country in asia.</p>
      </div>
    </div>
  </div>
);
