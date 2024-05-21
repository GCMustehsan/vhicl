import React from 'react';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { Stack } from 'expo-router';
import Constants from 'expo-constants';

export default function Layout() {
  const clerkPublishableKey = Constants.expoConfig.extra.clerkPublishableKey;

  return (
    <ClerkProvider publishableKey={clerkPublishableKey}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="Screens/CreateProfile" options={{ headerShown: false }} />
        <Stack.Screen name="Screens/FeedScreen" options={{ headerShown: false }} />
        <Stack.Screen name="Screens/Login" options={{ headerShown: false }} />
      </Stack>
    </ClerkProvider>
  );
}
