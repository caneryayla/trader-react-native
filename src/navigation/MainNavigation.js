import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NAVIGATION_OPTIONS } from "./options";
import { ROUTES } from "../constants/ROUTES";
import BottomNavigation from "./bottom-tab/BottomNavigation";
import CoinScreen from "../screens/coin/coin-screen";
import CurrencyScreen from "../screens/currency/currency-screen";
import ExchangeScreen from "../screens/exchange/exchange-screen";
import ExchangeDetailScreen from "../screens/exchange/exchange-detail-screen";

const MainNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={NAVIGATION_OPTIONS.screenOptions}>
        <Stack.Screen name={ROUTES.bottomScreen} component={BottomNavigation} />

        <Stack.Screen name={ROUTES.coinScreen} component={CoinScreen} />
        <Stack.Screen name={ROUTES.currencyScreen} component={CurrencyScreen} />
        <Stack.Screen name={ROUTES.exchangeScreen} component={ExchangeScreen} />
        <Stack.Screen
          name={ROUTES.exchangeDetailScreen}
          component={ExchangeDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
