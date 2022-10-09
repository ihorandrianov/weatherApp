import { FC } from "react";
import cloudyDay from "../assets/cloudy-1-day.svg";

export const WeatherCard: FC = () => {
  return (
    <div className="bg-white rounded-2xl h-[160px] shadow-2xl">
      <div className="flex">
        <div className="h-28 w-28 flex justify-center items-center bg-green-200 rounded-2xl shadow-md">
          <img src={cloudyDay} alt="" className="w-[100%] h-[90%] mt-6 ml-2" />
        </div>
        <div className="flex mb-4 justify-center items-center ml-10 mt-6">
          <h1 className="text-5xl font-bold">29°</h1>
          <div className="divider divider-horizontal h-[50px] mt-4"></div>
          <div className="flex flex-col">
            <h2 className="">Kuala Lumpur</h2>
            <p className="text-sm text-gray-500 font-thin">Malaisya</p>
          </div>
        </div>
      </div>
      <div className="flex w-full gap-4 justify-center items-center mt-4 ">
        <p className="text-sm text-gray-400 font-light text-center">Humidity</p>
        <div className="divider divider-horizontal" />
        <p className="text-sm text-gray-400 font-light text-center">
          Northwest
        </p>
        <div className="divider divider-horizontal" />
        <p className="text-sm text-gray-400 font-light text-center">9.3km/h</p>
      </div>
    </div>
  );
};
