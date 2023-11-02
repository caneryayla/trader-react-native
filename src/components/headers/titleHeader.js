import { Text, View } from "react-native-ui-lib";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const TitleHeader = ({ goBack, title }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        borderBottomColor: "#E8E8E8",
        borderBottomWidth: 0.3,
        paddingBottom: 10,
      }}
    >
      <View className="w-[18%] items-center">
        <TouchableOpacity
          onPress={() => {
            navigation.goBack(goBack);
          }}
        >
          <Ionicons color="black" size={20} name="chevron-back" />
        </TouchableOpacity>
      </View>

      <View className="w-[62%] items-center">
        <Text numberOfLines={1} className=" font-bold text-base">
          {title}
        </Text>
      </View>
      <View className="w-[20%]">
        <Text>{""}</Text>
      </View>
    </View>
  );
};

export default TitleHeader;
