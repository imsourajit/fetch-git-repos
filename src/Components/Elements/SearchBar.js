import React from "react";
import { TextInput, StyleSheet } from "react-native";

const SearchBar = props => (
  <TextInput
    style={styles.textInput}
    {...props}
    value={props.value}
    placeholder={props.placeholder}
    onChangeText={props.onChangeText}
  />
);

export default SearchBar;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#bcbcbc",
    width: "97%",
    margin: 5,
    padding: 5
  }
});
