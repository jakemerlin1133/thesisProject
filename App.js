import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";

import Login from "./screens/Login";
import Register from "./screens/Register";
import SuccessRegister from "./screens/SuccessRegister";
import BottomTabNavigator from "./screens/Navigator/BottomTabNavigator";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SuccessRegister"
            component={SuccessRegister}
            options={{ headerShown: false, animation: "none" }}
          />
          <Stack.Screen
            name="DashboardTabs"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
