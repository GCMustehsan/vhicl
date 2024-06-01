import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';
import CreateProfile from './Screens/CreateProfile';
import FeedScreen from './Screens/Feed/index';
import Splash from './Screens/Splash';
import Login from './Screens/Login';
import Recording from './Screens/Camera'
import SupportScreen from './Screens/Support';
import Onboarding from './Screens/Onbourding';


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


  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Splash />;
  }
  return (
    <ClerkProvider tokenCache={tokenCache}  publishableKey={Constants.expoConfig.extra.clerkPublishableKey}>
      <SafeAreaView style={styles.container}>
      
        <SignedIn>
          <FeedScreen/>
        </SignedIn>
        <SignedOut>
          <Login/>
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
  }
});
// import React, { useState, useEffect } from 'react';
// import { SafeAreaView, StyleSheet, View } from 'react-native';
// import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
// import Constants from 'expo-constants';
// import * as SecureStore from 'expo-secure-store';
// import CreateProfile from './Screens/CreateProfile';
// import FeedScreen from './Screens/FeedScreen';
// import Splash from './Screens/Splash';
// import Login from './Screens/Login';
// import Recording from './Screens/Camera'
// import SupportScreen from './Screens/Support';
// import Onboarding from './Screens/Onbourding';


// const tokenCache = {
//   async getToken(key: string) {
//     try {
//       return SecureStore.getItemAsync(key);
//     } catch (err) {
//       return null;
//     }
//   },
//   async saveToken(key: string, value: string) {
//     try {
//       return SecureStore.setItemAsync(key, value);
//     } catch (err) {
//       return;
//     }
//   },
// };

// // tokenCache={tokenCache}
// export default function App() {


//   const [isLoading, setIsLoading] = useState(true);
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   if (isLoading) {
//     return <Splash />;
//   }
//   return (
  
//     <View style={styles.container}>
//       <CreateProfile/>
//     </View>
   
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   }
// });





