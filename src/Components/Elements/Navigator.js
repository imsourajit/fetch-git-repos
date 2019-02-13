import React, { Component } from "react";
import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";

import Overview from "@components/Screens/Overview";
import Repositories from "@components/Screens/Repositories";
import Stars from "@components/Screens/Stars";
import Following from "@components/Screens/Following";

// icons import
import Logo from "@components/Elements/Logo";
import Notifications from "@components/Elements/Notifications";
import IconSet from "@components/Elements/IconSet";

const AppTopBarNavigator = createMaterialTopTabNavigator(
  {
    home: Overview,
    repositories: Repositories,
    stars: Stars,
    following: Following
  },
  {
    swipeEnabled: true,
    tabBarOptions: {
      style: {
        backgroundColor: "#24282D",
        borderWidth: 0
      }
    }
  }
);

const AppDrawNavigator = createDrawerNavigator(
  {
    home: AppTopBarNavigator
  },
  {
    navigationOptions: {
      headerTitle: <Logo />,
      headerRight: <Notifications />,
      headerLeft: <IconSet />,
      headerStyle: {
        backgroundColor: "#24282D",
        borderWidth: 0,
        margin: 0
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const AppStackNavigator = createStackNavigator({
  home: AppDrawNavigator
});

const AppContainer = createAppContainer(AppStackNavigator);

export default AppContainer;
