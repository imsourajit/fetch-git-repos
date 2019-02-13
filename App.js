/**
 * @developer Sourajit Karada
 * @email sourajitkarada@gmail.com
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import GitRepos from "./GitRepos";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <GitRepos />
      </View>
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
