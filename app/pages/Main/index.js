import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../Home/index'
import Task from "../Task";
import Perform from "../Perform";
import Profile from "../Profile";
import Add from "../Add";

import {
  HomeIcon, TaskIcon,
  PerformIcon,
  ProfileIcon,
  AddIcon
} from '../../assets/svg'

const Tab = createBottomTabNavigator();
const tabBarActiveIconColor = "#04325F";

const Main = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <HomeIcon width={size} height={size} fill={focused ? tabBarActiveIconColor : color} />
            ),
            tabBarActiveTintColor: tabBarActiveIconColor
          }}
        />

        <Tab.Screen
          name="Task"
          component={Task}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <TaskIcon width={size} height={size} fill={focused ? tabBarActiveIconColor : color} />
            ),
            tabBarActiveTintColor: tabBarActiveIconColor
          }}
        />

        <Tab.Screen
          name="Add"
          component={Add}
          options={{
            tabBarIcon: ({ color, size }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#00629C",
                  borderRadius: 90,
                  marginTop: -40,
                  width: 60,
                  height: 60,
                }}
              >
                <AddIcon fill="#CED1D4" width={24} height={25} />
              </View>
            ),
            tabBarActiveTintColor: tabBarActiveIconColor
          }}
        />

        <Tab.Screen
          name="Perform"
          component={Perform}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <PerformIcon width={size} height={size} fill={focused ? tabBarActiveIconColor : color} />
            ),
            tabBarActiveTintColor: tabBarActiveIconColor
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <ProfileIcon width={size} height={size} fill={focused ? tabBarActiveIconColor : color} />
            ),
            tabBarActiveTintColor: tabBarActiveIconColor
          }}
        />

      </Tab.Navigator>
    </View>
  );
}

export default Main;