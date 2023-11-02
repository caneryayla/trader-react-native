import React from "react";
import { Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, View } from "react-native-ui-lib";

const AppHeader = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderRadius: 15,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        paddingTop: top || 20,
        paddingBottom: 10,
      }}
    >
      <Image
        className="w-12 h-12 rounded-md"
        source={require("../../constants/img/appLogo2.png")}
      />
      <View>
        <Text className="font-bold text-sm">
          Trader ile tüm piyasaları anlık takip et {"  "}👀
        </Text>
      </View>
    </View>
  );
};

export default AppHeader;
