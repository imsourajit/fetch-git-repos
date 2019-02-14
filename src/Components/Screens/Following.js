import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class Following extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Following",
    headerTitle: "Notifications"
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>Following Screen</Text>
      </View>
    );
  }
}

export default Following;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
