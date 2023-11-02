import classNames from "classnames";
import React from "react";
import { Text, View } from "react-native-ui-lib";

const BorsaHeader = () => {
  return (
    <View
      className={classNames(
        "p-1",
        "items-center",
        "justify-around",
        "rounded-lg",
        "bg-white",
        "border-2",
        "border-gray-100",
        "mt-3",
        "mb-2.5",
        "mx-4",
        "flex-row"
      )}
    >
      <View className="w-[22%] items-end  ">
        <Text style={{ fontWeight: "600" }} color="black">
          Sembol
        </Text>
      </View>

      <View className="w-[25%]">
        <Text style={{ fontWeight: "600" }} color="black">
          Ad
        </Text>
      </View>
    </View>
  );
};

export default BorsaHeader;
