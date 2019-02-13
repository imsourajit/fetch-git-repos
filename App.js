/**
 * @developer Sourajit Karada
 * @email sourajitkarada@gmail.com
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";

import GitRepos from "./GitRepos";

import store from "@store/index";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GitRepos />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
