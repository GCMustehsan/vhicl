// app/screens/auth/CreateProfile.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CreateProfile = () => {
  return (
    <View style={styles.container}>
      <Text>Create Profile Screen</Text>
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

export default CreateProfile;
