import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "../../../constants/ROUTES";
import { NAVIGATION_OPTIONS } from "../../options";
import ExchangeScreen from "../../../screens/exchange/exchange-screen";

const ExchangeNavigations = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={NAVIGATION_OPTIONS.screenOptions}
        name={ROUTES.exchangeScreen}
        component={ExchangeScreen}
      />
    </Stack.Navigator>
  );
};

export default ExchangeNavigations;
