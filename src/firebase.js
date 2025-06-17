// Import the function to initialize a Firebase app
import { initializeApp } from "firebase/app";

// Import Firebase Analytics for tracking user interaction
import { getAnalytics } from "firebase/analytics";

// Define the Firebase configuration object using environment variables
// These are loaded from your .env file (they start with VITE_ so Vite can expose them to your code)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,                     // Your unique Firebase API key
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,             // Domain for Firebase Auth (e.g. your-app.firebaseapp.com)
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,               // Your Firebase project ID
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,       // Bucket used for Firebase Storage (file uploads, etc.)
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID, // ID for Firebase Cloud Messaging (for push notifications)
  appId: import.meta.env.VITE_FIREBASE_APP_ID,                       // Unique ID for your web app (used by Firebase)
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID        // (Optional) Used by Google Analytics for Firebase
};

// Initialize the Firebase app with the provided configuration
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics with the app instance (for tracking usage and user data)
const analytics = getAnalytics(app);

// Export the initialized app and analytics so you can use them elsewhere in your project
export { app, analytics };
