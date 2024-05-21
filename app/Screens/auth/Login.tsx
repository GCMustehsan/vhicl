// app/screens/auth/Login.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const Login = () => {
  const router = useRouter();

  const handleLogin = () => {
    // Simulate a login and navigate to the feed screen
    router.replace('/Screens/CreateProfile');
  };

  return (
    <View style={styles.container}>
      <Text onPress={handleLogin}>Login Screen (Press to Login)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
