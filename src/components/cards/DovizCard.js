import React from "react";
import { Image } from "react-native";
import { Text, View } from "react-native-ui-lib";
import { Ionicons } from "@expo/vector-icons";
import classNames from "classnames";

const DovizCard = ({ name, price, change, percentChange, logo }) => {
  return (
    <View
      className={classNames(
        "items-center",
        "flex-row",
        "justify-between",
        "border-solid",
        "border-2",
        "rounded-lg",
        "border-gray-100",
        "bg-white",
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

      <View className="w-[40%] flex-row items-center justify-around">
        <Text>{name} </Text>
        <Text>{parseFloat(price).toFixed(2)}</Text>
      </View>

      <View
        className={classNames(
          "w-[24%]",
          "items-center",
          "justify-between",
          "flex-row"
        )}
      >
        <Ionicons
          size={20}
          name={
            change < 0
              ? "trending-down-outline"
              : change > 0
              ? "trending-up-outline"
              : ""
          }
        />
        <Text color={change > 0 ? "green" : "red"}>
          % {parseFloat(change).toFixed(2)}
        </Text>
      </View>

      <View className={classNames("w-[18%]", "items-center")}>
        <Text>
          {percentChange ? parseFloat(percentChange).toFixed(2) : "-"}
        </Text>
      </View>
    </View>
  );
};

export default DovizCard;
