import React, { Component } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import SearchBar from "@components/Elements/SearchBar";

import { connect } from "react-redux";
import { getRepositories, searchRepositories } from "@action/repos";

class ReposList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
    this.props.getRepos();
  }

  onChangeTextHandler = text => {
    this.setState({ searchText: text });
    this.props.searchRepos(text);
    if (text === "") {
      this.props.getRepos();
    }
  };

  render() {
    let listitems =
      this.props.repos.repos.length === 0 ? (
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <Text>No Repositories</Text>
        </View>
      ) : (
        <ScrollView style={{}}>
          {this.props.repos.repos.map(repo => (
            <View key={repo.id} style={styles.container}>
              <View>
                <Icon
                  name="ios-git-compare"
                  color="#0D66D6"
                  size={16}
                  style={{ marginRight: 10, marginTop: 4 }}
                />
              </View>
              <View style={styles.innerRightContainer}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ color: "#0366d6", fontSize: 16 }}>
                    {repo.owner.login}
                  </Text>
                  <Text style={{ fontSize: 16 }}>/</Text>
                  <Text
                    style={{
                      color: "#0366d6",
                      fontWeight: "bold",
                      fontSize: 16
                    }}
                  >
                    {repo.name}
                  </Text>
                </View>

                <Text
                  style={{ color: "#586069", fontSize: 12, paddingRight: 20 }}
                >
                  {repo.description}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    marginTop: 5
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row"
                    }}
                  >
                    <Icon
                      name="ios-star"
                      color="#ababab"
                      size={10}
                      style={{ padding: 2 }}
                    />
                    <Text style={{ fontSize: 10, marginRight: 10 }}>
                      {repo.stargazers_count}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row"
                    }}
                  >
                    <Icon
                      name="ios-radio-button-on"
                      color="orange"
                      size={10}
                      style={{ padding: 2 }}
                    />
                    <Text style={{ fontSize: 10, marginRight: 10 }}>
                      {repo.language}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      );

    if (this.props.repos.isFetching === false) {
      return (
        <View style={{ flex: 1, width: "100%" }}>
          <SearchBar
            placeholder="Find a repository.."
            value={this.state.searchText}
            onChangeText={text => this.onChangeTextHandler(text)}
          />
          {listitems}
        </View>
      );
    } else {
      return <ActivityIndicator />;
    }
  }
}

const mapStateToProps = state => ({
  repos: state.repos
});

const mapDispatchToProps = dispatch => ({
  getRepos: () => dispatch(getRepositories()),
  searchRepos: text => dispatch(searchRepositories(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReposList);

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
