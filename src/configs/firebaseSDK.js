import firebase from 'firebase';

class FirebaseSDK {
  constructor() {
    if (!firebase.apps.length) {
      //avoid re-initializing
      firebase.initializeApp({
        apiKey: 'AIzaSyAzclOJusoyXpvyB9GHpk4_3ddwtOm-36w',
        authDomain: 'spotafinder-c42a6.firebaseapp.com',
        databaseURL: 'https://spotafinder-c42a6.firebaseio.com',
        projectId: 'spotafinder-c42a6',
        storageBucket: 'spotafinder-c42a6.appspot.com',
        messagingSenderId: '655792265694'
      });
    }
  }
  login = async (user, success_callback, failed_callback) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(success_callback, failed_callback);
  };
}
const firebaseSDK = new FirebaseSDK();
export default firebaseSDK;