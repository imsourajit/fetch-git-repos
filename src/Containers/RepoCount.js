import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { connect } from "react-redux";
import { getRepositories, searchRepositories } from "@action/repos";

class RepoCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
    this.props.getRepos();
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <Text style={{ textTransform: "capitalize" }}>
          {this.props.children}
        </Text>
        <Text>{this.props.repos.repos.length}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  repos: state.repos
});

const mapDispatchToProps = dispatch => ({
  getRepos: () => dispatch(getRepositories())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoCount);

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ebebeb",
    padding: 10
  },
  innerRightContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingRight: 10
  }
});
