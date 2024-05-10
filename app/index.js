import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Splash from './Screens/Splash'
import SupportScreen from "./Screens/Support";
export default function HomePage() {

  return (
    <View style={styles.container}>
      {/* <Splash/> */}
      <SupportScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});
