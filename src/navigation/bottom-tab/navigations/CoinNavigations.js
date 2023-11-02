import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "../../../constants/ROUTES";
import { NAVIGATION_OPTIONS } from "../../options";
import CoinScreen from "../../../screens/coin/coin-screen";

const CoinNavigations = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={NAVIGATION_OPTIONS.screenOptions}
        name={ROUTES.coinScreen}
        component={CoinScreen}
      />
    </Stack.Navigator>
  );
};

export default CoinNavigations;
