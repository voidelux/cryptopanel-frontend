import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

interface CryptoCardProps {
  name: string;
  symbol: string;
  price: string;
  change: number;
  chartData: number[];
  icon: string;
  color: string;
  isDark?: boolean;
}

const CryptoCard: React.FC<CryptoCardProps> = ({
  name,
  symbol,
  price,
  change,
  chartData,
  icon,
  color,
  isDark = false,
}) => {
  const isPositive = change >= 0;


  const labels = chartData.map((_, i) => i.toString());


  const validChartData =
    Array.isArray(chartData) && chartData.length > 0
      ? chartData
      : [0, 1, 0, 1, 0, 1, 0, 1];

  const data = {
    labels,
    datasets: [
      {
        label: `${name} Price`,
        data: validChartData,
        borderColor: color,
        backgroundColor: `${color}33`,
        fill: true,
        tension: 0.3,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
        min: Math.min(...validChartData) * 0.95,
        max: Math.max(...validChartData) * 1.05,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 0,
      },
    },
    animation: {
      duration: 1000,
    },
  };

  return (
    <div
      className={`rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border ${
        isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg`}
            style={{ backgroundColor: color }}
          >
            {icon}
          </div>
          <div>
            <h3
              className={`font-bold text-lg ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              {name}
            </h3>
            <p
              className={`text-sm uppercase ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {symbol}
            </p>
          </div>
        </div>
        <div
          className={`flex items-center space-x-1 px-2 py-1 rounded-full text-sm font-medium ${
            isPositive
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          <span>{change ? Math.abs(change).toFixed(2) : "0.00"}%</span>
        </div>
      </div>

      <div className="mb-4">
        <p
          className={`text-3xl font-bold ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {price}
        </p>
      </div>

      <div className="h-20 w-full relative">
        <div className="absolute inset-0">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;
