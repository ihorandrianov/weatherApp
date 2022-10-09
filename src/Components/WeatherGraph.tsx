import { FC } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ScriptableContext,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const WeatherGraph: FC = () => {
  const options = {
    responsive: true,
    tension: 0.3,
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const data = () => ({
    labels,
    datasets: [
      {
        label: "Weather",
        data: [21.5, 22, 30, 25, 30, 35, 27],
        fill: "start",
        borderColor: "rgba(187,247,208, 1)",
        backgroundColor: (context: ScriptableContext<"line">) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, "rgba(187,247,208,1)");
          gradient.addColorStop(1, "rgba(187,247,208,0)");
          return gradient;
        },
      },
    ],
  });
  return (
    <div className="w-[500px] h-[455px] rounded-2xl shadow-xl p-2">
      <h1 className="text-xl p-2">7 days weather chart</h1>
      <div className="h-[340px]">
        <Line data={data()} options={options} />
      </div>
    </div>
  );
};
