import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "../../../constants/ROUTES";
import { NAVIGATION_OPTIONS } from "../../options";
import CurrencyScreen from "../../../screens/currency/currency-screen";

const CurrencyNavigations = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={NAVIGATION_OPTIONS.screenOptions}
        name={ROUTES.currencyScreen}
        component={CurrencyScreen}
      />
    </Stack.Navigator>
  );
};

export default CurrencyNavigations;
