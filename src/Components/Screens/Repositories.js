import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import ReposList from "@containers/ReposList";

import RepoCount from "@containers/RepoCount";

class Repositories extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Repositories"
  });

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <ReposList />
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
