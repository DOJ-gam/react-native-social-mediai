import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Balance from "../components/Balance";

const TxDashboard = () => {
  return (
    <View style={styles.container}>
      <Balance />
    </View>
  );
};

export default TxDashboard;

const styles = StyleSheet.create({});
