import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class Overview extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Overview",
    headerTitle: "Notifications"
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>Overview</Text>
      </View>
    );
  }
}

export default Overview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
