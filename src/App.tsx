import CryptoCard from "./components/CryptoCard";
import ThemeToggle from "./components/ThemeToggle";
import { Activity } from "lucide-react";
import FetchPrices from "./components/fetchprices";
import FetchChange from "./components/fetchchange";
import FetchChart from "./components/fetchchart";
import { useState, useEffect } from "react";

function App() {
  const [cryptoData, setCryptoData] = useState<
    {
      name: string;
      symbol: string;
      price: string;
      change: number;
      chartData: number[];
      icon: string;
      color: string;
    }[]
  >([]);
  useEffect(() => {
    const loadPrices = async () => {

      const formatPrice = (price: string): string => {

        const cleanPrice = price.replace(/,/g, "");


        const [intPart, decPart = ""] = cleanPrice.split(".");


        const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");


        return decPart ? `${formattedInt},${decPart}` : formattedInt;
      };

      try {
                  const prices = await FetchPrices();
        const changes = await FetchChange();
        const charts = await FetchChart();

        if (
          changes === undefined ||
          changes.BTCC === undefined ||
          changes.XMRC === undefined ||
          changes.TONC === undefined ||
          prices === undefined ||
          prices.BTC === undefined ||
          prices.XMR === undefined ||
          prices.TON === undefined ||
          charts === undefined ||
          !charts.BTC ||
          !charts.XMR ||
          !charts.TON
        ) {
          const defaultPrices = {
            BTCC: changes?.BTCC ?? "1",
            XMRC: changes?.XMRC ?? "1",
            TONC: changes?.TONC ?? "1",
            BTC: prices?.BTC ? formatPrice(prices.BTC) : "48.000",
            XMR: prices?.XMR ? formatPrice(prices.XMR) : "160",
            TON: prices?.TON ? formatPrice(prices.TON) : "2,1",
            BTCCHART: charts?.BTC ?? [
              40000, 41200, 40800, 42100, 41900, 43000, 42600, 43240,
            ],
            XMRCHART: charts?.XMR ?? [
              155, 157, 156, 159, 158, 160, 159, 158.92,
            ],
            TONCHART: charts?.TON ?? [
              2.2, 2.35, 2.28, 2.45, 2.52, 2.41, 2.46, 2.48,
            ],
          };

          const updatedData = [
            {
              name: "Bitcoin",
              symbol: "BTC",
              price: `$${defaultPrices.BTC}`,
              change: Number(defaultPrices.BTCC),
              chartData: defaultPrices.BTCCHART,
              icon: "₿",
              color: "#F7931A",
            },
            {
              name: "Monero",
              symbol: "XMR",
              price: `$${defaultPrices.XMR}`,
              change: Number(defaultPrices.XMRC),
              chartData: defaultPrices.XMRCHART,
              icon: "ɱ",
              color: "#FF6600",
            },
            {
              name: "Toncoin",
              symbol: "TON",
              price: `$${defaultPrices.TON}`,
              change: Number(defaultPrices.TONC),
              chartData: defaultPrices.TONCHART,
              icon: "⧨",
              color: "#0088CC",
            },
          ];
          setCryptoData(updatedData);
          return;
        }

        const updatedData = [
          {
            name: "Bitcoin",
            symbol: "BTC",
            price: `$${formatPrice(prices.BTC)}`,
            change: Number(changes.BTCC),
            chartData: charts.BTC,
            icon: "₿",
            color: "#F7931A",
          },
          {
            name: "Monero",
            symbol: "XMR",
            price: `$${formatPrice(prices.XMR)}`,
            change: Number(changes.XMRC),
            chartData: charts.XMR,
            icon: "ɱ",
            color: "#FF6600",
          },
          {
            name: "Toncoin",
            symbol: "TON",
            price: `$${formatPrice(prices.TON)}`,
            change: Number(changes.TONC),
            chartData: charts.TON,
            icon: "⧨",
            color: "#0088CC",
          },
        ];
                setCryptoData(updatedData);
      } catch (error) {
        console.error("Произошла ошибка при загрузке цен:", error);


        const defaultData = [
          {
            name: "Bitcoin",
            symbol: "BTC",
            price: "$48.000",
            change: 2.45,
            chartData: [40000, 41200, 40800, 42100, 41900, 43000, 42600, 43240],
            icon: "₿",
            color: "#F7931A",
          },
          {
            name: "Monero",
            symbol: "XMR",
            price: "$160,00",
            change: 0.87,
            chartData: [155, 157, 156, 159, 158, 160, 159, 158.92],
            icon: "ɱ",
            color: "#FF6600",
          },
          {
            name: "Toncoin",
            symbol: "TON",
            price: "$2,50",
            change: -1.23,
            chartData: [2.2, 2.35, 2.28, 2.45, 2.52, 2.41, 2.46, 2.48],
            icon: "⧨",
            color: "#0088CC",
          },
        ];
                setCryptoData(defaultData);
      }
    };

    loadPrices();
  }, []);

  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
      }`}
    >
      {/* Header */}
      <header
        className={`backdrop-blur-sm border-b sticky top-0 z-10 transition-colors duration-300 ${
          isDark
            ? "bg-gray-800/80 border-gray-700"
            : "bg-white/80 border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  CryptoTracker
                </h1>
                <p
                  className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}
                >
                  Devoloped by luxnoir
                </p>
              </div>
            </div>
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2
            className={`text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Track Your Favorite
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Cryptocurrencies
            </span>
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            Stay updated with real-time prices and trends for Bitcoin, Toncoin,
            and Monero
          </p>
        </div>

        {/* Crypto Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cryptoData.map((crypto) => (
            <CryptoCard
              key={crypto.symbol}
              name={crypto.name}
              symbol={crypto.symbol}
              price={crypto.price}
              change={crypto.change}
              chartData={crypto.chartData}
              icon={crypto.icon}
              color={crypto.color}
              isDark={isDark}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div
          className={`mt-16 rounded-2xl shadow-lg p-8 border transition-colors duration-300 ${
            isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
          }`}
        >
          <h3
            className={`text-2xl font-bold mb-6 text-center ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Market Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className={`text-center p-4 rounded-xl ${
                isDark
                  ? "bg-gradient-to-r from-green-900/30 to-green-800/30"
                  : "bg-gradient-to-r from-green-50 to-green-100"
              }`}
            >
              <p className="text-3xl font-bold text-green-600">$1.2T</p>
              <p
                className={`font-medium ${isDark ? "text-green-400" : "text-green-700"}`}
              >
                Total Market Cap
              </p>
            </div>
            <div
              className={`text-center p-4 rounded-xl ${
                isDark
                  ? "bg-gradient-to-r from-blue-900/30 to-blue-800/30"
                  : "bg-gradient-to-r from-blue-50 to-blue-100"
              }`}
            >
              <p className="text-3xl font-bold text-blue-600">$89B</p>
              <p
                className={`font-medium ${isDark ? "text-blue-400" : "text-blue-700"}`}
              >
                24h Volume
              </p>
            </div>
            <div
              className={`text-center p-4 rounded-xl ${
                isDark
                  ? "bg-gradient-to-r from-purple-900/30 to-purple-800/30"
                  : "bg-gradient-to-r from-purple-50 to-purple-100"
              }`}
            >
              <p className="text-3xl font-bold text-purple-600">48.2%</p>
              <p
                className={`font-medium ${isDark ? "text-purple-400" : "text-purple-700"}`}
              >
                BTC Dominance
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
