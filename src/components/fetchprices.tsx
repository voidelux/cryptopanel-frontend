const FetchPrices = async () => {
  try {

    let btcData = { price: "48000" };
    let xmrData = { price: "160" };
    let tonData = { price: "2.50" };

    try {
            const btcResponse = await fetch("http://localhost:5174/bitcoin");
      if (!btcResponse.ok) {
        throw new Error(
          `Ошибка получения данных Bitcoin: ${btcResponse.status}`,
        );
      }
      btcData = await btcResponse.json();
          } catch (error) {
      console.error("Ошибка при запросе Bitcoin:", error);
    }

    try {
            const xmrResponse = await fetch("http://localhost:5174/monero");
      if (!xmrResponse.ok) {
        throw new Error(
          `Ошибка получения данных Monero: ${xmrResponse.status}`,
        );
      }
      xmrData = await xmrResponse.json();
          } catch (error) {
      console.error("Ошибка при запросе Monero:", error);
    }

    try {
            const tonResponse = await fetch("http://localhost:5174/toncoin");
      if (!tonResponse.ok) {
        throw new Error(
          `Ошибка получения данных Toncoin: ${tonResponse.status}`,
        );
      }
      tonData = await tonResponse.json();
          } catch (error) {
      console.error("Ошибка при запросе Toncoin:", error);
    }

        return {
      BTC: btcData.price,
      XMR: xmrData.price,
      TON: tonData.price,
    };
  } catch (error) {
    console.error("Критическая ошибка в FetchPrices:", error);

    return {
      BTC: "48000",
      XMR: "160",
      TON: "2.50",
    };
  }
};
export default FetchPrices;
