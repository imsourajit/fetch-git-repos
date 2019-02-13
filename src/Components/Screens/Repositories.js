import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class Repositories extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Repositories",
    headerTitle: "Notifications"
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>Repositories</Text>
      </View>
    );
  }
}

export default Repositories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
