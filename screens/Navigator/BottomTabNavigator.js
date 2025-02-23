import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Menu, Provider } from "react-native-paper";
import { Colors } from "../../constants/Colors";
import { View, StyleSheet } from "react-native";

import Dashboard from "../Home/Dashboard";
import Report from "../Home/Report";
import Profile from "../Home/Profile";
import Analysis from "../Home/Analysis";
import Guide from "../Home/Guide";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator({ route, navigation }) {
  const { userId } = route.params;
  const [menuVisible, setMenuVisible] = useState(false);

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  return (
    <Provider>
       <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Colors.brown400,
          tabBarInactiveTintColor: "white",
          tabBarStyle: {
            backgroundColor: "#805e40",
            borderTopWidth: 0,
          },
          headerStyle: {
            backgroundColor: "#805e40",
          },
          headerTintColor: Colors.brown100,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      >
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          initialParams={{ userId }}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="home" color={color} size={size} />;
            },
            headerRight: () => (
              <Menu
                visible={menuVisible}
                onDismiss={closeMenu}
                anchor={
                  <Ionicons
                    name="add-outline"
                    size={30}
                    color={Colors.brown50}
                    style={{ marginRight: 15 }}
                    onPress={openMenu}
                  />
                }
              >
                <Menu.Item
                  onPress={() => {
                    closeMenu();
                    navigation.navigate("Scan", { userId });
                  }}
                  title="Scan Receipt"
                />
                <Menu.Item
                  onPress={() => {
                    closeMenu();
                    navigation.navigate("Upload", { userId });
                  }}
                  title="Upload Receipt"
                />
                <Menu.Item
                  onPress={() => {
                    closeMenu();
                    navigation.navigate("Input", { userId });
                  }}
                  title="Input Expenses"
                />
              </Menu>
            ),
          }}
        />

        <Tab.Screen
          name="Analysis"
          component={Analysis}
          initialParams={{ userId }}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="stats-chart" color={color} size={size} />;
            },
          }}
        />

        <Tab.Screen
          name="Report"
          component={Report}
          initialParams={{ userId }}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="newspaper" color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          initialParams={{ userId }}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="person" color={color} size={size} />;
            },
          }}
        />
      </Tab.Navigator>


          <Guide userId={userId}/>
      </View>
    </Provider>
  );
}