import { Link, router } from 'expo-router';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Login = () => {
  const hanldelogin=()=>{
    router.push('/Screens/Profile');
  }
  return (
    <View style={styles.container}>
      {/* Login Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/Images/login.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      {/* Login Heading */}
      <Text style={styles.heading}>Log In</Text>
      {/* Username Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Username"
          />
        </View>
      </View>
      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
          />
        </View>
      </View>
      {/* Forgot Password Link */}
      <View style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </View>
      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={hanldelogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      {/* Social Media Login Options */}
      <Text style={styles.orText}>Or Continue with</Text>
      <View style={styles.socialIcons}>
        <TouchableOpacity  style={styles.socialIconTouchable}>
          <Image source={require('../assets/Images/face.webp')} style={[styles.socialIcon, { height: 50 }]} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIconTouchable}>
          <Image source={require('../assets/Images/google.webp')} style={[styles.socialIcon, { height: 50 }]} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIconTouchable}>
          <Image source={require('../assets/Images/apple.jpg')} style={[styles.socialIcon, { height: 50 }]} />
        </TouchableOpacity>
      </View>
      
      {/* Create Profile Link */}
      <Text style={styles.createProfileLink}>Don't have an account? <Link href='/Screens/CreateProfile'><Text style={styles.createProfileLinkText}>Create profile</Text></Link></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 180,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF8A00',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
    width: 240,
  },
  label: {
    color: '#848484',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 20,
    marginTop: 5,
    width: '100%', // Increase input width
  },
  button: {
    backgroundColor: '#FF8A00',
    paddingVertical: 10, // Increase button height
    paddingHorizontal: 100, // Increase button width
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16, // Increase button text size
  },
  orText: {
    marginBottom: 10,
    color: '#373737',
  },
  inputIcon: {
    position: 'absolute',
    left: 10,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#848484',
  },
  forgotPassword: {
    alignSelf: 'flex-end', // Align to the right
    marginBottom: 10, // Adjust margin bottom if needed
  },
  forgotPasswordText: {
    color: '#848484',
    fontSize: 12,
  },
  socialIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  socialIcon: {
    width: 50,
    marginRight: 10,
  },
  createProfileLink: {
    color: '#373737',
  },
  createProfileLinkText: {
    color: '#FF8A00',
  },
});

export default Login;
