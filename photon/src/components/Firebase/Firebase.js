import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAPCjIBhQz9Z71MefUIauXb92YtMQuxPIU',
  authDomain: 'photon-1532314056313.firebaseapp.com',
  databaseURL: 'https://photon-1532314056313.firebaseio.com',
  projectId: 'photon-1532314056313',
  storageBucket: 'photon-1532314056313.appspot.com',
  messagingSenderId: '181426765723'
}; 

firebase.initializeApp(config);

export default firebase;

export async function loginWithEmail(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

export async function registerWithEmail(email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

export async function getUserID() {
  return firebase.auth().currentUser.uid;
}


 