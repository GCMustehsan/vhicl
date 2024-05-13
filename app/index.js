import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Splash from './Screens/Splash'
import SupportScreen from "./Screens/Support";
import FeedScreen from './Screens/FeedScreen'
import CreateProfile from "./Screens/CreateProfile";
export default function HomePage() {

  return (
    <View style={styles.container}>
      {/* <Splash/> */}
      <CreateProfile/>
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
