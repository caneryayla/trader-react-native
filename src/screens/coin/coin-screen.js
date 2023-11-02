import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import AppHeader from "../../components/headers/appHeader";
import CoinCard from "../../components/cards/CoinCard";
import DovizHeader from "../../components/headers/dovizHeader";

const CoinScreen = () => {
  const CoinLogo = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png",
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      img: "https://v2.info.uniswap.org/static/media/eth.5fc0c9bd.png",
    },
    {
      name: "Bnb",
      symbol: "BNBUSDT",
      img: "https://seeklogo.com/images/B/binance-coin-bnb-logo-CD94CC6D31-seeklogo.com.png",
    },
    {
      name: "Sol",
      symbol: "SOLUSDT",
      img: "https://s2.coinmarketcap.com/static/img/coins/200x200/5426.png",
    },
    {
      name: "Avax",
      symbol: "AVAXUSDT",
      img: "https://s2.coinmarketcap.com/static/img/coins/200x200/5805.png",
    },
    {
      name: "Dot",
      symbol: "DOTUSDT",
      img: "https://s2.coinmarketcap.com/static/img/coins/200x200/6636.png",
    },
    {
      name: "Matic",
      symbol: "MATICUSDT",
      img: "https://s3.coinmarketcap.com/static-gravity/image/b8db9a2ac5004c1685a39728cdf4e100.png",
    },
    {
      name: "Xrp",
      symbol: "XRPUSDT",
      img: "https://s3-symbol-logo.tradingview.com/crypto/XTVCXRP--600.png",
    },
    {
      name: "Mana",
      symbol: "MANAUSDT",
      img: "https://s2.coinmarketcap.com/static/img/coins/200x200/1966.png",
    },
    {
      name: "Sand",
      symbol: "SANDUSDT",
      img: "https://icodrops.com/wp-content/uploads/2020/08/The_Sandbox_logo.png",
    },
    {
      name: "Ada",
      symbol: "ADAUSDT",
      img: "https://s2.coinmarketcap.com/static/img/coins/200x200/2010.png",
    },
    {
      name: "Trx",
      symbol: "TRXUSDT",
      img: "https://s2.coinmarketcap.com/static/img/coins/200x200/1958.png",
    },
    {
      name: "Doge",
      symbol: "DOGEUSDT",
      img: "https://s2.coinmarketcap.com/static/img/coins/200x200/74.png",
    },

    {
      name: "Shib",
      symbol: "SHIBUSDT",
      img: "https://s2.coinmarketcap.com/static/img/coins/200x200/5994.png",
    },
  ];

  const [coinData, setCoinData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const apiUrl = "https://api2.binance.com/api/v3/ticker/24hr";
      const response = await axios.get(apiUrl);

      const selectedCoins = [
        "BTCUSDT",
        "ETHUSDT",
        "BNBUSDT",
        "XRPUSDT",
        "SOLUSDT",
        "ADAUSDT",
        "DOGEUSDT",
        "TRXUSDT",
        "MATICUSDT",
        "DOTUSDT",
        "SHIBUSDT",
        "AVAXUSDT",
        "SANDUSDT",
        "MANAUSDT",
      ];

      const filteredData = response.data.filter((coin) =>
        selectedCoins.includes(coin.symbol)
      );

      filteredData.forEach((coin) => {
        coin.priceChange =
          parseFloat(coin.lastPrice) - parseFloat(coin.openPrice);
        coin.priceChangePercent =
          (coin.priceChange / parseFloat(coin.openPrice)) * 100;
      });

      const sortedData = filteredData.sort(
        (a, b) => parseFloat(b.highPrice) - parseFloat(a.highPrice)
      );

      setCoinData(sortedData);
      setRefreshing(false);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setRefreshing(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  return (
    <View className="flex-1">
      <AppHeader />
      <DovizHeader />
      {loading ? (
        <ActivityIndicator
          style={{
            flex: 1,
          }}
          size="large"
          color="#0000ff"
        />
      ) : (
        <FlatList
          data={coinData}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <CoinCard
              key={index}
              name={item.symbol}
              price={item.lastPrice}
              percentChange={item.priceChange}
              change={item.priceChangePercent}
              logo={CoinLogo[index]?.img}
            />
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
  );
};

export default CoinScreen;
