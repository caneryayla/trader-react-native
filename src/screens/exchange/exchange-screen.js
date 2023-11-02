import React, { useEffect, useRef, useState } from "react";
import AppHeader from "../../components/headers/appHeader";
import axios from "axios";

import { Text, View } from "react-native-ui-lib";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import BorsaCard from "../../components/cards/BorsaCard";
import BorsaHeader from "../../components/headers/borsaHeader";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../constants/ROUTES";

const ExchangeScreen = () => {
  const [currencyData, setCurrencyData] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const flatListRef = useRef(null);

  const navigation = useNavigation();

  const BorsaLogo = [
    {
      symbol: "QNBFB",
      img: "https://s3-symbol-logo.tradingview.com/qnb-finansbank--600.png",
    },
    {
      symbol: "KCHOL",
      img: "https://s3-symbol-logo.tradingview.com/koc--600.png",
    },
    {
      symbol: "THYAO",
      img: "https://s3-symbol-logo.tradingview.com/turk-hava-yollari--600.png",
    },
    {
      symbol: "FROTO",
      img: "https://web-node-cdn.foreks.com/cdn/symbol-logos/BIST/FROTO.png",
    },
    {
      symbol: "SASA",
      img: "https://web-node-cdn.foreks.com/cdn/symbol-logos/BIST/SASA.png",
    },
    {
      symbol: "ASELS",
      img: "https://web-node-cdn.foreks.com/cdn/symbol-logos/BIST/ASELS.png",
    },
    {
      symbol: "AKBNK",
      img: "https://s3-symbol-logo.tradingview.com/akbank--600.png",
    },
    {
      symbol: "YKBNK",
      img: "https://s3-symbol-logo.tradingview.com/yapi-ve-kredi--600.png",
    },
    {
      symbol: "SISE",
      img: "https://fintables-prod.storage.googleapis.com/media/uploads/company-logos/sise_icon.png",
    },
    {
      symbol: "EREGL",
      img: "https://s3-symbol-logo.tradingview.com/eregli-demir--600.png",
    },
    {
      name: "",
      symbol: "OYAKC",
      img: "https://s3-symbol-logo.tradingview.com/oyak-cimento--600.png",
    },
    {
      symbol: "PGSUS",
      img: "https://s3-symbol-logo.tradingview.com/pegasus--600.png",
    },
    {
      symbol: "KOZAL",
      img: "https://s3-symbol-logo.tradingview.com/koza-altin--600.png",
    },
    {
      symbol: "MGROS",
      img: "https://s3-symbol-logo.tradingview.com/migros-ticaret--600.png",
    },
    {
      symbol: "ENJSA",
      img: "https://s3-symbol-logo.tradingview.com/enerjisa-enerji--600.png",
    },
    {
      symbol: "HEKTS",
      img: "https://s3-symbol-logo.tradingview.com/hektas--600.png",
    },
    {
      symbol: "PETKM",
      img: "https://s3-symbol-logo.tradingview.com/petkim--600.png",
    },
    {
      symbol: "AKSEN",
      img: "https://s3-symbol-logo.tradingview.com/aksa-enerji--600.png",
    },
    {
      symbol: "TAVHL",
      img: "https://s3-symbol-logo.tradingview.com/tav-havalimanlari--600.png",
    },
    {
      symbol: "CIMSA",
      img: "https://s3-symbol-logo.tradingview.com/cimsa-cimento--600.png",
    },
    {
      symbol: "AYGAZ",
      img: "https://s3-symbol-logo.tradingview.com/aygaz--600.png",
    },
    {
      symbol: "ULKER",
      img: "https://s3-symbol-logo.tradingview.com/ulker-biskuvi--600.png",
    },
    {
      symbol: "CLEBI",
      img: "https://s3-symbol-logo.tradingview.com/celebi--600.png",
    },
    {
      symbol: "VAKKO",
      img: "https://s3-symbol-logo.tradingview.com/vakko-tekstil--600.png",
    },
    {
      symbol: "FENER",
      img: "https://s3-symbol-logo.tradingview.com/fenerbahce-futbol--600.png",
    },
    {
      name: "",
      symbol: "GSRAY",
      img: "https://s3-symbol-logo.tradingview.com/galatasaray-sportif--600.png",
    },
    {
      name: "",
      symbol: "TKNSA",
      img: "https://s3-symbol-logo.tradingview.com/teknosa-ic-ve-dis-ticaret--600.png",
    },
    {
      symbol: "LOGO",
      img: "https://s3-symbol-logo.tradingview.com/logo-yazilim--600.png",
    },
    {
      symbol: "TUPRS",
      img: "https://s3-symbol-logo.tradingview.com/tupras--600.png",
    },
    {
      symbol: "BRSAN",
      img: "https://s3-symbol-logo.tradingview.com/borusan-mannesmann--600.png",
    },
    {
      symbol: "MAVI",
      img: "https://i0.wp.com/halkarz.com/wp-content/uploads/2017/06/mavi-giyim-san-ve-tic-a-s-2.jpg?fit=740%2C418&ssl=1",
    },
    {
      symbol: "PNSUT",
      img: "https://s3-symbol-logo.tradingview.com/pinar-sut--600.png",
    },
    {
      symbol: "SAHOL",
      img: "https://s3-symbol-logo.tradingview.com/sabanci-holding--600.png",
    },
    {
      symbol: "TCELL",
      img: "https://s3-symbol-logo.tradingview.com/turkcell--600.png",
    },
    {
      symbol: "TATGD",
      img: "https://s3-symbol-logo.tradingview.com/tat-gida--600.png",
    },
    {
      name: "",
      symbol: "DOHOL",
      img: "https://fintables-prod.storage.googleapis.com/media/uploads/company-logos/DOHOL.png",
    },
  ];

  const fetchData = async () => {
    setIsRefreshing(true);

    try {
      const apiUrl = "https://bigpara.hurriyet.com.tr/api/v1/hisse/list";
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

  const findLogoBySymbol = (symbol) => {
    const matchingLogo = BorsaLogo.find((logo) => logo.symbol === symbol);

    return matchingLogo ? matchingLogo.img : null;
  };

  return (
    <View className="flex-1">
      <AppHeader />
      <BorsaHeader />

      <FlatList
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        data={currencyData?.data}
        ListEmptyComponent={() => (
          <View center>
            <Text>Eşleşen veri bulunamadı veya veri yok.</Text>
          </View>
        )}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
        ListFooterComponent={() =>
          isRefreshing ? <ActivityIndicator size="large" color="blue" /> : null
        }
        renderItem={({ item, index }) => {
          const logo = findLogoBySymbol(item.kod);

          if (logo) {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(ROUTES.exchangeDetailScreen, {
                    symbol: item.kod,
                    name: item.ad,
                    logo: findLogoBySymbol(item.kod),
                  });
                }}
              >
                <BorsaCard name={item.ad} symbol={item.kod} logo={logo} />
              </TouchableOpacity>
            );
          } else {
            return (
              <View style={{ display: "none" }}>
                <Text>Veri Yok</Text>
              </View>
            );
          }
        }}
      />
    </View>
  );
};

export default ExchangeScreen;
