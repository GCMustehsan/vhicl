import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, KeyboardAvoidingView, Platform,ScrollView } from 'react-native';

const CreateProfile = () => {
  const [logoMargin, setLogoMargin] = useState(20);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleInputFocus = () => {
    setLogoMargin(-50); // Move logo upwards when input is focused
  };

  const handleInputBlur = () => {
    setLogoMargin(20); // Reset logo margin when input is blurred
  };
  const handleLoginPress = () => {
    router.push('/Screens/Login')
  };
  const validateForm = () => {
    let valid = true;

    if (!username.trim()) {
      setUsernameError('Username is required');
      valid = false;
    } else {
      setUsernameError('');
    }

    if (!email.trim()) {
      setEmailError('Email is required');
      valid = false;
    } else if (!isValidEmail(email)) {
      setEmailError('Invalid email format');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!password.trim()) {
      setPasswordError('Password is required');
      valid = false;
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters');
      valid = false;
    } else if (!isStrongPassword(password)) {
      setPasswordError('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character');
      valid = false;
    } else {
      setPasswordError('');
    }

    return valid;
  };

  const handleCreateProfile = () => {
    if (validateForm()) {
      // Submit the form or navigate to the next screen
      Alert.alert('Success', 'Profile created successfully');
    }
  };

  const isValidEmail = (email) => {
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isStrongPassword = (password) => {
    // Password validation regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Image
        source={require('../assets/Images/createprofile.png')}
        style={[styles.logo, { marginBottom: logoMargin }]}
        resizeMode="contain"
      />
      <Text style={styles.heading}>Create Profile</Text>
       {/* Username Input */}
       <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}
        </View>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
        </View>

        {/* Create Profile Button */}
        <TouchableOpacity style={styles.button} onPress={handleCreateProfile}>
          <Text style={styles.buttonText}>Create Profile</Text>
        </TouchableOpacity>
      <Text style={styles.orText}>Or Continue with</Text>
      <View style={styles.socialIcons}>
        <TouchableOpacity style={styles.socialIcon}>
          <Image source={require('../assets/Images/face.webp')} style={styles.socialImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <Image source={require('../assets/Images/google.webp')} style={styles.socialImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <Image source={require('../assets/Images/apple.jpg')} style={styles.socialImage} />
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity onPress={handleLoginPress}>
          <Text style={styles.createProfileLink}>Already have an account? <Text style={styles.loginLink}>Log In</Text></Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
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
  
  label: {
    color: '#848484',
    alignItems:'flex-start'

  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 20,
    marginTop: 5,
    width: 230,
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
  },
  orText: {
    marginBottom: 10,
    color: '#373737',
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
  errorText:{
    color:"red"
  }
});

export default CreateProfile;
