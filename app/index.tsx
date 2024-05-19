import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import Constants from "expo-constants"
import * as SecureStore from "expo-secure-store";
import CreateProfile from "./Screens/CreateProfile";
import Login from "./Screens/Login";
import FeedScreen from "./Screens/FeedScreen";
import Splash from './Screens/Splash'

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};
// tokenCache={tokenCache}
export default function App() {
  
  return (
    <ClerkProvider tokenCache={tokenCache}  publishableKey={Constants.expoConfig.extra.clerkPublishableKey}>
      <SafeAreaView style={styles.container}>
        <SignedIn>
          <Splash/>
        </SignedIn>
        <SignedOut>
          <CreateProfile />
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});