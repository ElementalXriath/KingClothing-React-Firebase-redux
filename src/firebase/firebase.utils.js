
import { initializeApp } from 'firebase/app';
import { getFirestore, getDoc , doc, setDoc } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const config = {
    apiKey: "AIzaSyBrSO226iIVvl79DyUCsCLwAUfqzf7_q3I",
    authDomain: "reactix-7170c.firebaseapp.com",
    projectId: "reactix-7170c",
    storageBucket: "reactix-7170c.appspot.com",
    messagingSenderId: "455860143065",
    appId: "1:455860143065:web:8fe71af194408a1eb18fc8"
  };

  const app = initializeApp(config);

  export const auth = getAuth(app);
  export const firestore = getFirestore(app);


  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = await doc(firestore, "users" , `${userAuth.uid}`);
  
    const snapShot = getDoc(userRef);
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await setDoc(doc(firestore, "users", `${userAuth.uid}`),{
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  };

    const provider = new GoogleAuthProvider();

    export const signInWithGoogle = () => {
      signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
        }

    export default app;



