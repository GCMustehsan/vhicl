import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { router } from 'expo-router';
const windowWidth = Dimensions.get('window').width;

const Onboarding2 = () => {
  const handleskip=()=>{
    router.push('/Screens/Login')
  }
  return (
    <View style={styles.container}>
      {/* Skip Link */}
      <TouchableOpacity style={styles.skipLink} onPress={handleskip}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/Images/Group2.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Description */}
      <Text style={styles.description}>
        Explore multiple jobs and Bid on it according to your expertise by uploading your audition
      </Text>
      <Text style={styles.additionalDescription}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident ipsam placeat laudantium cupiditate obcaecati neque ipsa repellendus et nisi quod! Qui, soluta voluptatibus? Quis sint voluptas adipisci quia quibusdam laborum ad dicta.
      </Text>

      {/* Step Line */}
      <View style={styles.stepLine}>
        <View style={styles.grayLine}></View>
        <View style={styles.yellowLine}></View>
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={handleskip}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
    padding: 20,
    marginTop:30,
  },
  skipLink: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  skipText: {
    color: '#FF8A00',
    fontSize: windowWidth < 400 ? 14 : 16, // Adjust font size based on screen width
  },
  logoContainer: {
    marginBottom: windowWidth < 600 ? 10 : 20,
  },
  logo: {
    width: windowWidth * 0.6,
    height: windowWidth * 0.55,
  },
  description: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#606060',
    fontSize: windowWidth < 600 ? 14 : 16,
    marginBottom: windowWidth < 600 ? 5 : 10,
  },
  additionalDescription: {
    textAlign: 'center',
    color: '#A7A7A7',
    fontSize: windowWidth < 600 ? 12 : 14,
    marginTop: windowWidth < 600 ? 5 : 10,
  },
  stepLine: {
    flexDirection: 'row',
    gap:3,
    alignItems: 'center',
    marginTop: windowWidth < 600 ? 10 : 20,
  }, 
  yellowLine: {
    width: windowWidth < 400 ? 30 : 30, // Adjust width based on screen width
    height: 2,
    backgroundColor: '#FFD700',
    paddingRight:40,
  },
  grayLine: {
    width: windowWidth < 400 ? 20 : 30,
    height: 2,
    backgroundColor: '#D1D5DB',
  },
  nextButton: {
    backgroundColor: '#FF8A00',
    marginTop: windowWidth < 600 ? 20 : 30,
    paddingVertical: 12,
    paddingHorizontal: windowWidth * 0.4,
    borderRadius: 10,
  },
  nextButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: windowWidth < 600 ? 14 : 16,
  },
});

export default Onboarding2;
