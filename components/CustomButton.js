import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({
  text,
  onPress,
  bgc,
  borderColor,
  style,
  fs,
  fw,
  fc,
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      {...props}
      style={{
        backgroundColor: bgc || "transparent",
        borderColor: borderColor || "#ccc",
        borderWidth: 1,
        padding: 13,
        margin: 10,
        borderRadius: 10,
        alignItems: "center",
        ...style,
      }}
    >
      <Text style={{ fontSize: fs, fontWeight: fw, color: fc }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
