import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  Image,
  StatusBar,
} from "react-native";
import React from "react";
import Input from "../components/Input";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const Signin = () => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar backgroundColor={"transparent"} translucent />
        <Image source={require("../assets/pro.jpg")} style={styles.image} />
        <Text style={styles.headingSmall}>Welcome to KeurDeret</Text>
        <View style={styles.top}>
          <Text style={styles.headingBig}>Sign in</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>help</Text>

            <Ionicons name="help-circle" size={34} color="#112277" />
          </View>
        </View>
        <Input placeholder="Enter Email" />
        <Input placeholder="Enter your password" secureTextEntry />
        <CustomButton
          text="Sign in"
          fs={17}
          bgc="#112277"
          fc="white"
          onPress={() => navigation.navigate("Profile")}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            margin: 10,
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#112277" }}> don't have an account?</Text>
          <TouchableOpacity>
            <Text style={{ color: "red", marginLeft: 5 }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    // paddingTop: 50,
    flex: 1,
  },
  image: {
    height: 280,
    width: width,
    marginBottom: 10,
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 20,
  },
  headingSmall: {
    marginHorizontal: 10,
    fontSize: 20,
  },
  headingBig: {
    fontSize: 35,
    fontWeight: "bold",
  },
});
