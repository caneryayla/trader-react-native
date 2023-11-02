import React, { useEffect, useRef, useState } from "react";
import AppHeader from "../../components/headers/appHeader";
import DovizCard from "../../components/cards/DovizCard";
import axios from "axios";
import DovizHeader from "../../components/headers/dovizHeader";
import { Text, View } from "react-native-ui-lib";
import { FlatList, RefreshControl } from "react-native";

const CurrencyScreen = () => {
  const DovizLogo = [
    {
      name: "DOLAR",
      symbol: "USD",
      img: "https://cdn.pixabay.com/photo/2020/07/07/19/33/america-5381699_640.png",
    },
    {
      name: "EURO",
      symbol: "EUR",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Europe_flag_circle.png",
    },
    {
      name: "STERLİN",
      symbol: "GBP",
      img: "https://w7.pngwing.com/pngs/729/891/png-transparent-flag-of-the-united-kingdom-pound-sterling-flag-of-england-exchange-rate-area-miscellaneous-flag-logo-thumbnail.png",
    },
    {
      name: "GR. ALTIN",
      symbol: "GA",
      img: "https://s3-symbol-logo.tradingview.com/metal/gold--600.png",
    },
    {
      name: "ÇEY. ALTIN",
      symbol: "C",
      img: "https://s3-symbol-logo.tradingview.com/metal/gold--600.png",
    },
    {
      name: "GÜMÜŞ",
      symbol: "GAG",
      img: "https://s3-symbol-logo.tradingview.com/metal/silver--600.png",
    },
    {
      name: "BITCOIN",
      symbol: "BTC",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png",
    },
    {
      name: "ETHEREUM",
      symbol: "ETH",
      img: "https://v2.info.uniswap.org/static/media/eth.5fc0c9bd.png",
    },
    {
      name: "BIST",
      symbol: "XU100",
      img: "https://s3-symbol-logo.tradingview.com/indices/bist-katilim-tum--600.png",
    },
  ];

  const [currencyData, setCurrencyData] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showMessage, setShowMessage] = useState(true);
  const flatListRef = useRef(null);

  const fetchData = async () => {
    setIsRefreshing(true);

    try {
      const apiUrl = "https://api.genelpara.com/embed/para-birimleri.json";
      const response = await axios.get(apiUrl);
      setCurrencyData(response.data);
      setIsRefreshing(false);
    } catch (error) {
      console.error("Hata:", error);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = () => {
    fetchData();
  };

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  return (
    <View className="flex-1">
      <AppHeader />
      <DovizHeader />
      {showMessage && (
        <Text marginB-9 center>
          Yenilemek için yukarıdan aşağıya kaydır ⬇️
        </Text>
      )}

      <FlatList
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        data={Object.keys(currencyData)}
        keyExtractor={(currency) => currency}
        renderItem={({ item, index }) => (
          <DovizCard
            name={DovizLogo[index].name}
            price={currencyData[item].alis}
            change={currencyData[item].degisim}
            percentChange={currencyData[item].d_oran}
            direction={currencyData[item].d_yon}
            logo={DovizLogo[index].img}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

export default CurrencyScreen;
