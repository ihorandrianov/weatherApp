import { FC } from "react";
import { WeatherCard } from "./WeatherCard";

export const WeatherList: FC = () => {
  return (
    <div className="h-[600px] w-[450px] absolute top-[260px] right-[150px] p-3 rounded-2xl flex flex-col gap-10">
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
    </div>
  );
};
