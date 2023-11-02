import React from "react";
import { Image } from "react-native";
import { Text, View } from "react-native-ui-lib";
import classNames from "classnames";
import { Ionicons } from "@expo/vector-icons";

const BorsaCard = ({ name, symbol, logo }) => {
  return (
    <View
      className={classNames(
        "items-center",
        "flex-row",
        "border-solid",
        "border-2",
        "rounded-lg",
        "border-gray-100",
        "mx-4",
        "mb-2",
        "p-2.5"
      )}
    >
      <View className="w-[14%]">
        <Image
          source={{ uri: logo }}
          className={classNames("object-contain", "h-9", "w-9", "rounded-full")}
        />
      </View>

      <View className="w-[26%] flex-row items-center justify-around">
        <Text>{symbol} </Text>
      </View>
      <View className="w-[50%] flex-row items-center justify-around ">
        <Text numberOfLines={1}>{name} </Text>
      </View>
      <View className="w-[10%] flex-row items-center justify-around ">
        <Ionicons size={18} name="caret-forward-outline" />
      </View>
    </View>
  );
};

export default BorsaCard;
