// import admin from 'firebase-admin';
// import { ServiceAccount } from 'firebase-admin';

// // Initialize Firebase Admin
// const serviceAccount: ServiceAccount = {
//   projectId: process.env.FIREBASE_PROJECT_ID!,
//   privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, '\n'),  // Handle escaped newlines
//   clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
// };

// if (!admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//   });
// }

// export const auth = admin.auth();
// export const db = admin.firestore(); 