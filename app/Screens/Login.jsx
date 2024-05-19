import { Link, router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
const staticData = {
  username: 'Mustehsan',
  password: 'Ali',
};
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username.trim() === '') {
      setError('Please enter your username');
      return;
    }
    if (password.trim() === '') {
      setError('Please enter your password');
      return;
    }

    if (username === staticData.username && password === staticData.password) {
      // Perform login logic here, e.g., send request to server

      // For demonstration purposes, just navigating to Profile screen
      router.push('/Screens/FeedScreen');
    } else {
      setError('Invalid username or password');
    }
  };

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
            value={username}
            onChangeText={setUsername}
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
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>
      <View style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </View>
      {/* Error Message */}
      {error !== '' && <Text style={styles.error}>{error}</Text>}
      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      {/* Social Media Login Options */}
      <Text style={styles.orText}>Or Continue with</Text>
      <View style={styles.socialIcons}>
        <TouchableOpacity  style={styles.socialIconTouchable}>
          <Image source={require('../assets/Images/facebook.webp')} style={[styles.socialIcon, { height: 50 }]} />
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
  forgotPassword: {
    alignSelf: 'flex-end', // Align to the right
    marginBottom: 10, // Adjust margin bottom if needed
  },
  forgotPasswordText: {
    color: '#848484',
    fontSize: 12,
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
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Login;
