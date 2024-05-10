import {React,useEffect} from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { router } from 'expo-router';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate to the CreateProfile screen after 3 seconds
      router.push('/Screens/Onbourding');
    }, 2000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/Images/logo.png')}
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
    width: windowWidth * 0.7, // Adjust width based on screen width
    aspectRatio: 2, // Maintain aspect ratio
    marginTop:80,
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
