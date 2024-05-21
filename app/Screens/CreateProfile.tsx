import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useSignUp } from "@clerk/clerk-expo";
import { router } from 'expo-router';
import { Feather } from '@expo/vector-icons'; // Import Feather icons
import { useOAuth } from "@clerk/clerk-expo";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";
import * as AppleAuthentication from 'expo-apple-authentication';
import * as Facebook from 'expo-facebook';
import { LoginManager } from 'react-native-fbsdk-next';
WebBrowser.maybeCompleteAuthSession();

const CreateProfile = () => {
  const [logoMargin, setLogoMargin] = useState(20);
  const { isLoaded, signUp, setActive } = useSignUp();

  const [username, setUsername] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const [appleAuthSupported, setAppleAuthSupported] = useState(false);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      AppleAuthentication.isAvailableAsync().then((available) => {
        setAppleAuthSupported(available);
      });
    }
  }, []);
  
  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    if (!isValidEmail(emailAddress)) {
      setErrorMessage("Invalid email address");
      return;
    }

    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long");
      return;
    }

    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!hasLowercase) {
      setErrorMessage("Password must contain at least one lowercase letter");
      return;
    }

    if (!hasUppercase) {
      setErrorMessage("Password must contain at least one uppercase letter");
      return;
    }

    if (!hasSpecialChar) {
      setErrorMessage("Password must contain at least one special character");
      return;
    }

    try {
      console.log("Creating user account...");
      await signUp.create({
        emailAddress: emailAddress,
        password,
      });

      console.log("Preparing email verification...");
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
    
      console.log("Setting pending verification state to true...");
      setPendingVerification(true);
    } catch (err: any) {
      setErrorMessage("Error creating user account");
    }
  };

  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      // Attempt email verification
      const completeSignUp = await signUp.attemptEmailAddressVerification({ code });
    
      // If verification is successful, setActive session
      await setActive({ session: completeSignUp.createdSessionId });
    } catch (err: any) {
      // Handle verification errors and update errorMessage state
      setErrorMessage(err.message);
    }
  };

  const handleInputFocus = () => {
    setLogoMargin(-50);
  };

  const handleInputBlur = () => {
    setLogoMargin(20);
  };

  const handleLoginPress = () => {
    router.push('/Screens/Login')
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

  useEffect(() => {
    // Initialize Facebook SDK
    Facebook.initializeAsync({
      appId: '292887143789923',
    });
  }, []);
  
  const handleFacebookLogin = async () => {
    try {
      const result = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });

      if (result.type === 'success') {
        const { token } = result;

        // Get user information using the token
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        const data = await response.json();

        // Now you can use the data to sign up or sign in the user
        console.log('Facebook user data:', data);
      } else {
        // Handle the case where the user cancels the login process
        console.log('Facebook login cancelled');
      }
    } catch (error) {
      // Handle errors during Facebook login
      console.error('Facebook login error:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {!pendingVerification && (
          <View style={styles.container}>
            <Image
              source={require('../assets/Images/createprofile.png')}
              style={[styles.logo, { marginBottom: logoMargin }]}
              resizeMode="contain"
            />
            <Text style={styles.heading}>Create Profile</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Username</Text>
              <View style={styles.inputWrapper}>
                <Feather name="user" size={20} color="black" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Username"
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  value={username}
                  onChangeText={setUsername}
                />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <View style={styles.inputWrapper}>
                <Feather name="mail" size={20} color="black" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Enter your email"
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  value={emailAddress}
                  onChangeText={setEmailAddress}
                />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.inputWrapper}>
                <Feather name="lock" size={20} color="black" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry={!passwordVisible}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity style={styles.eyeIconWrapper} onPress={() => setPasswordVisible(!passwordVisible)}>
                  <Feather name={passwordVisible ? 'eye' : 'eye-off'} size={20} color="gray" />
                </TouchableOpacity>
              </View>
            </View>
            {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
            <TouchableOpacity style={styles.button} onPress={onSignUpPress}>
              <Text style={styles.buttonText}>Create Profile</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>Or Continue with</Text>
            <View style={styles.socialIcons}>
              <TouchableOpacity style={styles.socialIcon} onPress={handleFacebookLogin}>
                <Image source={require('../assets/Images/facebook.webp')} style={styles.socialImage} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialIcon} onPress={onPress}>
                <Image source={require('../assets/Images/google.webp')} style={styles.socialImage} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialIcon} onPress={handleAppleLogin}>
                <Image source={require('../assets/Images/apple.jpg')} style={styles.socialImage} />
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={handleLoginPress}>
              <Text style={styles.createProfileLink}>Already have an account? <Text style={styles.loginLink}>Log In</Text></Text>
            </TouchableOpacity>
          </View>
        )}
        {pendingVerification && (
          <View style={styles.pendingVerificationContainer}>
            <Text style={styles.pendingVerificationText}>Enter the verification code sent to your email:</Text>
            <TextInput
              style={styles.codeInput}
              value={code}
              placeholder="Verification Code"
              onChangeText={setCode}
            />
            <TouchableOpacity style={styles.verifyButton} onPress={onPressVerify}>
              <Text style={styles.verifyButtonText}>Verify Email</Text>
            </TouchableOpacity>
            {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
          </View>
        )}
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor:'white'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  logo: {
    width: 250,
    maxWidth: 300,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF8A00',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 14,
    width: 240,
  },
  errorMessage: {
    color: "red",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 16,
    textAlign: "center",
  },
  label: {
    color: '#848484',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 40,
    marginTop: 5,
    width: 230,
  },
  inputWrapper: {
    position: 'relative',
  },
  inputIcon: {
    color:'gray',
    position: 'absolute',
    top: 14,
    left: 10,
  },
  eyeIconWrapper: {
    position: 'absolute',
    top: 14,
    right: 20,
  },
  button: {
    backgroundColor: '#FF8A00',
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 8,
    marginBottom: 20,
    width: 230,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign:'center',
    alignSelf:'center'
  },
  orText: {
    marginBottom: 10,
    color: '#373737',
    textAlign:'center'
  },
  socialIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  socialIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  socialImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
  createProfileLink: {
    color: '#373737',
  },
  loginLink: {
    color: '#FF8A00',
  },
  pendingVerificationContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  pendingVerificationText: {
    marginBottom: 10,
    fontSize: 16,
    textAlign: 'center',
    color: '#373737',
  },
  codeInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 20,
    width: 230,
    marginBottom: 10,
  },
  verifyButton: {
    backgroundColor: '#FF8A00',
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 8,
    width: 230,
  },
  verifyButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CreateProfile;
