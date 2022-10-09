import { FC } from "react";
import { Header } from "./Components/Header";
import { Pin } from "./Components/Pin";
import { WeatherList } from "./Components/WeatherList";
import { DayWeather } from "./Components/DayWeather";
import { WeatherGraph } from "./Components/WeatherGraph";

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <Pin />
      <div className="flex gap-5">
        <DayWeather />
        <WeatherGraph />
      </div>

      <WeatherList />
    </div>
  );
};

export default App;
