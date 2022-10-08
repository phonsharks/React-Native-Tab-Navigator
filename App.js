import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import UpdateScreen from "./screens/UpdateScreen";
import createscreen from "./screens/CreateScreen";

const App = () => {
  const tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      {/*Gösterilmesi gereken ilk ekranı HomeScreen olarak ayarladım.Burada dikkate edilmesi gereken 
      durum initialRouteName ile screen etiketi içinde bulunan name == durumunun sağlanmasıdır.*/}
      <tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          tabBarActiveTintColor: "tomato",
          tabBarInActiveTintColor: "grey",
        }}
      >
        <tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
          }}
        />
        <tab.Screen
          name="Update"
          component={UpdateScreen}
          options={{
            /* Yönlendirme aynı şekilde component yardımı ile olmakta diğer
          navigationlarda olduğu gibi */
            tabBarLabel: "updatescreen",
          }}
        />

        <tab.Screen
          name="Create"
          component={createscreen}
          options={{
            /* Yönlendirme aynı şekilde component yardımı ile olmakta diğer
          navigationlarda olduğu gibi */
            tabBarLabel: "updatescreen",
          }}
        />
      </tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
