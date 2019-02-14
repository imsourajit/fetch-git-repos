import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import AppContainer from "@components/Elements/Navigator";

class GitRepos extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    );
  }
}

export default GitRepos;

const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject
    flex: 1,
    justifyContent: "center"
  }
});
