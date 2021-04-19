import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyCBUU6IhX7Hux4S4s3h3Ce4s2OKQIbiL1E",
    authDomain: "super-categories.firebaseapp.com",
    projectId: "super-categories",
    storageBucket: "super-categories.appspot.com",
    messagingSenderId: "759108332706",
    appId: "1:759108332706:web:c5802d442711dacf8cfbfb",
    measurementId: "G-R4GKR4BJWN"
  };

  


  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const  userRef = db.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();

   if (!snapShot.exists) {
     const {displayName, email} = userAuth;
     const createdAt = new Date();

     try {
       await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
       })
     } catch (error) {
        console.log(error);
     }

   }
   return userRef;
  }

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export const auth = firebase.auth();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();

  export default db;