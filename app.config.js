module.exports = {
    name: 'CURTAIN',
    version: '1.0.0',
    scheme: 'CURTAIN', // Add a custom URL scheme for your app
    extra: {
      clerkPublishableKey: process.env.CLERK_PUBLISHABLE_KEY,
    },
  };