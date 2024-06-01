// import React from 'react';
// import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
// import { Stack } from 'expo-router';
// import Constants from 'expo-constants';

// export default function Layout() {
//   const clerkPublishableKey = Constants.expoConfig.extra.clerkPublishableKey;

//   return (
//     <ClerkProvider publishableKey={clerkPublishableKey}>
//       <Stack>
//         <Stack.Screen name="index" options={{ headerShown: false }} />
//         <Stack.Screen name="Screens/CreateProfile" options={{ headerShown: false }} />
//         <Stack.Screen name="Screens/Feed" options={{ headerShown: false }} />
//         <Stack.Screen name="Screens/Login" options={{ headerShown: false }} />
//       </Stack>
//     </ClerkProvider>
//   );
// }
// // import React from 'react';
// // import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
// // import { Stack } from 'expo-router';
// // import Constants from 'expo-constants';

// // export default function Layout() {
// //   const clerkPublishableKey = Constants.expoConfig.extra.clerkPublishableKey;

// //   return (
// //     <ClerkProvider publishableKey={clerkPublishableKey}>
// //       <Stack>
// //         <Stack.Screen name="index" options={{ headerShown: false }} />
// //         <Stack.Screen name="Screens/CreateProfile" options={{ headerShown: false }} />
// //         <Stack.Screen name="Screens/FeedScreen" options={{ headerShown: false }} />
// //         <Stack.Screen name="Screens/Login" options={{ headerShown: false }} />
// //       </Stack>
// //     </ClerkProvider>
// //   );
// // }

// // import React from 'react';
// // import { ClerkProvider,SignedIn,SignedOut } from '@clerk/clerk-expo';
// // import { Stack } from 'expo-router';
// // import Constants from 'expo-constants';
// // import { feedLink, loginLink, forgotPasswordLink } from './link';

// // export default function Layout() {
// //   const clerkPublishableKey = Constants.expoConfig.extra.clerkPublishableKey;

// //   return (
// //     <ClerkProvider publishableKey={clerkPublishableKey}>
// //       <Stack>
// //         <Stack.Screen name="index" options={{ headerShown: false }} />
// //         <Stack.Screen name="Screens/CreateProfile" options={{ headerShown: false }} />
// //         <SignedIn>
// //           <Stack.Screen
// //             name="Screens/FeedScreen"
// //             options={{ headerShown: false, link: feedLink } as any}
// //           />
// //         </SignedIn>
// //         <SignedOut>
// //           <Stack.Screen
// //             name="Screens/Login"
// //             options={{ headerShown: false, link: loginLink } as any}
// //           />
// //         </SignedOut>
// //         <Stack.Screen
// //           name="Screens/ForgotPassword"
// //           options={{ headerShown: false, link: forgotPasswordLink } as any}
// //         />
// //       </Stack>
// //     </ClerkProvider>
// //   );
// // }