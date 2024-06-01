import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendResetLink = () => {
    if (email.trim() === '') {
      setMessage('Please enter your email');
      return;
    }

    // Implement your password reset logic here
    // For demonstration purposes, we'll just set a success message
    setMessage('A reset link has been sent to your email');

    // Navigate to the Login screen after showing the success message
    setTimeout(() => {
      router.push('/Screens/Login');
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Forgot Password</Text>
      <Text style={styles.label}>Enter your email to receive a reset link</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      {message !== '' && <Text style={styles.message}>{message}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleSendResetLink}>
        <Text style={styles.buttonText}>Send Reset Link</Text>
      </TouchableOpacity>
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
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF8A00',
    marginBottom: 20,
  },
  label: {
    color: '#848484',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF8A00',
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  message: {
    color: 'green',
    marginBottom: 20,
  },
});

export default ForgotPassword;
