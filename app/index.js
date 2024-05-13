import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Splash from './Screens/Splash'
import SupportScreen from "./Screens/Support";
import FeedScreen from './Screens/FeedScreen'
import SidebarProfile from "./Screens/Sidebar";
import Login from "./Screens/Login";
import AddPaymentCardScreen from "./Screens/Payment";
export default function HomePage() {

  return (
    <View style={styles.container}>
      {/* <Login/> */}
      <FeedScreen/>
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
