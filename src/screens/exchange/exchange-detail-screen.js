import axios from "axios";
import TitleHeader from "../../components/headers/titleHeader";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, View } from "react-native-ui-lib";
import { Ionicons } from "@expo/vector-icons";
import LittleBorsaCard from "../../components/cards/LittleBorsaCard";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../constants/ROUTES";

const ExchangeDetailScreen = ({ route }) => {
  const { symbol, name, logo } = route.params;
  const { top, bottom } = useSafeAreaInsets();
  const navigation = useNavigation();

  const LittleBorsaLogo = [
    {
      price: "397,49",
      symbol: "QNBFB",
      img: "https://s3-symbol-logo.tradingview.com/qnb-finansbank--600.png",
      chartImage:
        "https://pnghq.com/wp-content/uploads/free-candlestick-graph-bar-png-design-76740.png",
    },
    {
      price: "139,60",
      symbol: "KCHOL",
      img: "https://s3-symbol-logo.tradingview.com/koc--600.png",
      chartImage:
        "https://static.vecteezy.com/system/resources/thumbnails/022/659/642/small/3d-growth-stock-diagram-financial-graph-isolated-on-transparent-background-business-candlestick-chart-investment-market-trade-exchange-analysis-and-economy-finance-report-png.png",
    },
    {
      price: "218,10",
      symbol: "THYAO",
      img: "https://s3-symbol-logo.tradingview.com/turk-hava-yollari--600.png",
      chartImage:
        "https://www.sohomarkets.eu/upload/image/20220509/20220509154654045404.png",
    },
    {
      price: "43,94",
      symbol: "SASA",
      img: "https://web-node-cdn.foreks.com/cdn/symbol-logos/BIST/SASA.png",
      chartImage:
        "https://pnghq.com/wp-content/uploads/free-candlestick-graph-bar-png-design-76740.png",
    },
    {
      price: "702,50",
      symbol: "PGSUS",
      img: "https://s3-symbol-logo.tradingview.com/pegasus--600.png",
      chartImage:
        "https://www.sohomarkets.eu/upload/image/20220509/20220509154654045404.png",
    },
  ];

  const [stockData, setStockData] = useState({
    yuzdedegisimS1: 0,
    alis: 0,
    enDusuk: 0,
    enYuksek: 0,
    oncekiKapanis: 0,
    tavanFiyat: 0,
    tabanFiyat: 0,
  });

  const fetchData = async (symbol) => {
    try {
      const apiUrl = `https://bigpara.hurriyet.com.tr/api/v1/borsa/hisseyuzeysel/${symbol}`;
      const response = await axios.get(apiUrl);

      if (response.status === 200) {
        const data = response.data.data?.hisseYuzeysel;
        setStockData({
          yuzdedegisimS1: data?.yuzdedegisimS1,
          alis: data?.alis,
          enDusuk: data?.dusuk,
          enYuksek: data?.yuksek,
          oncekiKapanis: data?.dunkukapanis,
          tavanFiyat: data?.tavan,
          tabanFiyat: data?.taban,
        });
      } else {
        console.error("API isteği başarısız oldu.");
      }
    } catch (error) {
      console.error("Hata:", error);
    }
  };

  useEffect(() => {
    fetchData(symbol);
  }, [symbol]);

  return (
    <View
      style={{
        paddingTop: top || 20,
        paddingBottom: bottom,
        alignItems: "center",
        flex: 1,
      }}
    >
      <TitleHeader goBack title={name} />

      <Image
        className="w-[32%] h-[17%] rounded-2xl object-contain mt-7 mb-7"
        source={{ uri: logo }}
      />

      <View
        style={{
          width: "90%",
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.2,
          shadowRadius: 5,
        }}
        className="border-solid border-gray-200 rounded-2xl p-6"
      >
        <View className="w-[100%] flex-row justify-between ">
          <View className="w-[45%] flex-row">
            <Text className="text-base pb-5">🏦 Alış Değeri: </Text>
            <Text className="text-base font-bold pb-5">{stockData.alis} ₺</Text>
          </View>

          <View className="w-[25%] items-end">
            <Ionicons
              color={stockData.yuzdedegisimS1 > 0 ? "green" : "red"}
              size={20}
              name={
                stockData.yuzdedegisimS1 > 0
                  ? "caret-up-outline"
                  : "caret-down-outline"
              }
            />
          </View>

          <View className="w-[25%] ">
            <Text className="text-base font-bold pb-5">
              % {stockData.yuzdedegisimS1}
            </Text>
          </View>
        </View>

        <View className="flex-row">
          <Text className="text-base pb-5">⬇️ Bugün En Düşük: </Text>
          <Text className="text-base font-bold pb-5">
            {stockData.enDusuk} ₺
          </Text>
        </View>

        <View className="flex-row">
          <Text className="text-base pb-5">⬆️ Bugün En Yüksek: </Text>
          <Text className="text-base font-bold pb-5">
            {stockData.enYuksek} ₺
          </Text>
        </View>

        <View className="flex-row">
          <Text className="text-base pb-5">📈 Tavan Fiyat: </Text>
          <Text className="text-base font-bold pb-5">
            {stockData.tavanFiyat}
          </Text>
        </View>

        <View className="flex-row">
          <Text className="text-base ">📉 Taban Fiyat: </Text>
          <Text className="text-base font-bold ">{stockData.tabanFiyat}</Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation?.navigate(ROUTES.bottomScreen)}
        className=" w-[89%] justify-between flex-row pt-7"
      >
        <Text className="font-medium">Tümünü Gör 👀</Text>
        <Text>➡️</Text>
      </TouchableOpacity>

      <ScrollView
        contentContainerStyle={{
          paddingTop: 20,
          paddingLeft: 10,
          paddingBottom: 15,
          paddingRight: 20,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        {LittleBorsaLogo.map((item, index) => (
          <LittleBorsaCard
            key={index}
            logo={item.img}
            chart={item.chartImage}
            price={item.price}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default ExchangeDetailScreen;
