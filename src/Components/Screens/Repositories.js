import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { connect } from "react-redux";

class Repositories extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Repositories",
    headerTitle: "Notifications"
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>Repositories Screen</Text>
      </View>
    );
  }
}

export default connect()(Repositories);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
