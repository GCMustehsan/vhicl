import React from "react";
import { View,Text,StyleSheet } from "react-native";
import FeedScreen from "../FeedScreen";

const Home=()=>{
    return(
    <View style={styles.container}>
    <FeedScreen/>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    }
  });
export default Home;