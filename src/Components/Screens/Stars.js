import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class Stars extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Stars",
    headerTitle: "Notifications"
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>Stars</Text>
      </View>
    );
  }
}

export default Stars;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
