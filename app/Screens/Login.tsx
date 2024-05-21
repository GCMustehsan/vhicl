import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet,Platform } from 'react-native';
import { Link, router } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { useOAuth } from "@clerk/clerk-expo";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";
import * as AppleAuthentication from 'expo-apple-authentication';
import { useSignUp } from "@clerk/clerk-expo";
const staticData = {
  username: 'Mustehsan',
  password: 'Ali',
};
WebBrowser.maybeCompleteAuthSession();

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  useWarmUpBrowser();
  const [appleAuthSupported, setAppleAuthSupported] = useState(false);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      AppleAuthentication.isAvailableAsync().then((available) => {
        setAppleAuthSupported(available);
      });
    }
  }, []);
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

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err:any) {
      setErrorMessage(err.message);
    }
  }, []);
  
  const handleAppleLogin = async () => {
    if (Platform.OS === 'ios') {
      try {
        const credential = await AppleAuthentication.signInAsync({
          requestedScopes: [AppleAuthentication.AppleAuthenticationScope.FULL_NAME],
        });
        console.log('Apple Login credential:', credential);
        // Handle the Apple login credential
      } catch (error:any) {
        setErrorMessage('Apple Login Error')
      }
    } else {
      setErrorMessage('Apple Login is not supported on Android.')
    }
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
          <Feather name="user" size={20} color="gray" style={styles.inputIcon} />
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
          <Feather name="lock" size={20} color="gray" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={styles.eyeIconWrapper}
          >
            <Feather name={passwordVisible ? "eye" : "eye-off"} size={20} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </View>
      {/* Error Message */}
      {error !== '' && <Text style={styles.error}>{error}</Text>}
      {/* Login Button */}
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      {/* Social Media Login Options */}
      <Text style={styles.orText}>Or Continue with</Text>
      <View style={styles.socialIcons}>
        <TouchableOpacity>
          <Image source={require('../assets/Images/facebook.webp')} style={[styles.socialIcon, { height: 50 }]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <Image source={require('../assets/Images/google.webp')}  style={[styles.socialIcon, { height: 50 }]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAppleLogin}>
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
  errorMessage: {
    color: "red",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 16,
    textAlign: "center",
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 5,
    width: '100%',
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  inputIcon: {
    marginRight: 10,
  },
  eyeIconWrapper: {
    padding: 5,
  },
  button: {
    backgroundColor: '#FF8A00',
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  orText: {
    marginBottom: 10,
    color: '#373737',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 10,
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