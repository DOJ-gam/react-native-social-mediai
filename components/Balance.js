import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Balance = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>D</Text>
        <Text>42,011.50</Text>
      </View>
      <Text>Available Balance</Text>
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
});
