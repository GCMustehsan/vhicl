import {React,useEffect} from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { router } from 'expo-router';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/Images/image.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      {/* Picture */}
      <View style={styles.pictureContainer}>
        <Image
          source={require('../assets/Images/Frame.png')}
          style={styles.picture}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF8A00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
   width:windowWidth-100,
   borderRadius: windowWidth/3, // Make the logo image round
  },
  pictureContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picture: {
    width: windowWidth * 0.8, // Adjust width based on screen width
    aspectRatio: 1, // Maintain aspect ratio
  },
});

export default App;
