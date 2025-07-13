const FetchChart = async () => {
  try {

    let btcChart = {
      chart: { data: [40000, 41200, 40800, 42100, 41900, 43000, 42600, 43240] },
    };
    let xmrChart = {
      chart: { data: [155, 157, 156, 159, 158, 160, 159, 158.92] },
    };
    let tonChart = {
      chart: { data: [2.2, 2.35, 2.28, 2.45, 2.52, 2.41, 2.46, 2.48] },
    };

    try {
            const btcResponse = await fetch("http://localhost:5174/bitcoin/chart");
      if (!btcResponse.ok) {
        throw new Error(
          `Ошибка получения графика Bitcoin: ${btcResponse.status}`,
        );
      }
      btcChart = await btcResponse.json();
          } catch (error) {
      console.error("Ошибка при запросе графика Bitcoin:", error);
    }

    try {
            const xmrResponse = await fetch("http://localhost:5174/monero/chart");
      if (!xmrResponse.ok) {
        throw new Error(
          `Ошибка получения графика Monero: ${xmrResponse.status}`,
        );
      }
      xmrChart = await xmrResponse.json();
          } catch (error) {
      console.error("Ошибка при запросе графика Monero:", error);
    }

    try {
            const tonResponse = await fetch("http://localhost:5174/toncoin/chart");
      if (!tonResponse.ok) {
        throw new Error(
          `Ошибка получения графика Toncoin: ${tonResponse.status}`,
        );
      }
      tonChart = await tonResponse.json();
          } catch (error) {
      console.error("Ошибка при запросе графика Toncoin:", error);
    }

        return {
      BTC: btcChart.chart?.data || [
        40000, 41200, 40800, 42100, 41900, 43000, 42600, 43240,
      ],
      XMR: xmrChart.chart?.data || [155, 157, 156, 159, 158, 160, 159, 158.92],
      TON: tonChart.chart?.data || [
        2.2, 2.35, 2.28, 2.45, 2.52, 2.41, 2.46, 2.48,
      ],
    };
  } catch (error) {
    console.error("Критическая ошибка в FetchChart:", error);
    return {
      BTC: [40000, 41200, 40800, 42100, 41900, 43000, 42600, 43240],
      XMR: [155, 157, 156, 159, 158, 160, 159, 158.92],
      TON: [2.2, 2.35, 2.28, 2.45, 2.52, 2.41, 2.46, 2.48],
    };
  }
};

export default FetchChart;
