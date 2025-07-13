const FetchChange = async () => {
  try {

    let btcChange = { change: 1 };
    let xmrChange = { change: 1 };
    let tonChange = { change: 1 };

    try {









      btcChange = { change: 1.29 };
          } catch (error) {
      console.error("Ошибка при запросе Bitcoin:", error);
    }

    try {









      xmrChange = { change: 3.44 };
          } catch (error) {
      console.error("Ошибка при запросе Monero:", error);
    }

    try {









      tonChange = { change: 1.95 };
          } catch (error) {
      console.error("Ошибка при запросе Toncoin:", error);
    }

        return {
      BTCC: Number(btcChange.change),
      XMRC: Number(xmrChange.change),
      TONC: Number(tonChange.change),
    };
  } catch (error) {
    console.error("Критическая ошибка в FetchPrices:", error);

    return {
      BTCC: 1,
      XMRC: 1,
      TONC: 1,
    };
  }
};
export default FetchChange;
