import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import CurrencyNavigations from "./navigations/CurrencyNavigations";
import ExchangeNavigations from "./navigations/ExchangeNavigations";
import CoinNavigations from "./navigations/CoinNavigations";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const activeColor = "black";
  const deactiveColor = "gray";

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        options={{
          tabBarLabel: "Döviz",
          tabBarActiveTintColor: activeColor,
          tabBarInactiveTintColor: deactiveColor,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="cash-outline"
              color={focused ? activeColor : deactiveColor}
              size={26}
            />
          ),
        }}
        name="Currency"
        component={CurrencyNavigations}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Borsa",
          tabBarActiveTintColor: activeColor,
          tabBarInactiveTintColor: deactiveColor,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="trending-up-outline"
              color={focused ? activeColor : deactiveColor}
              size={26}
            />
          ),
        }}
        name="Exchange"
        component={ExchangeNavigations}
      />

      <Tab.Screen
        options={{
          tabBarLabel: "Coinler",
          tabBarActiveTintColor: activeColor,
          tabBarInactiveTintColor: deactiveColor,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="logo-bitcoin"
              color={focused ? activeColor : deactiveColor}
              size={26}
            />
          ),
        }}
        name="Coin"
        component={CoinNavigations}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
