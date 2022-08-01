import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const Input = (props) => {
  return <TextInput style={styles.input} {...props} />;
};

export default Input;

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 10,
    padding: 10,
    height: 60,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 17,
  },
});
