import { Image } from "react-native";
import React from "react";
import { Text, View } from "react-native-ui-lib";

const LittleBorsaCard = ({ price, logo, chart }) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        marginLeft: 10,
        padding: 10,
        paddingBottom: 5,
        borderRadius: 10,
      }}
    >
      <Image
        className="w-10 h-10 object-contain rounded-full"
        source={{ uri: logo }}
      />

      <Text className="text-base font-medium mt-3 mb-3">{price} ₺</Text>

      <Image
        className="w-32 h-20 object-cover"
        source={{
          uri: chart,
        }}
      />
    </View>
  );
};

export default LittleBorsaCard;
