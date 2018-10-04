import firebase from "firebase";

require("firebase/firestore");

import uuid from 'react-native-uuid';

import RNFetchBlob from 'react-native-fetch-blob'

const config = {
  apiKey: "AIzaSyAPCjIBhQz9Z71MefUIauXb92YtMQuxPIU",
  authDomain: "photon-1532314056313.firebaseapp.com",
  databaseURL: "https://photon-1532314056313.firebaseio.com",
  projectId: "photon-1532314056313",
  storageBucket: "photon-1532314056313.appspot.com",
  messagingSenderId: "181426765723"
};

firebase.initializeApp(config);

const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});

export default firebase;

export async function loginWithEmail(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

export async function registerWithEmail(email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}

export function getUserID() {
  //return firebase.auth().currentUser.uid.toString();
  return "2kccav5F5bgBCWpCMDpR1cWFRry2";
}

export async function updateProfile(userID, name, username, biography) {
  //console.log(firebase.firestore().collection("users").doc(userID).onSnapshot());
  const docRef = firebase.firestore().doc("users/" + userID);
  return docRef
    .set({
      name: name,
      username: username,
      biography: biography,
    })
    .then(function () {
      console.log("Success");
    })
    .catch(function (error) {
      console.log("Error: " + error);
    });
}

export function uploadPhoto(photoData, image) {
  const userID = getUserID();
  const photoID = uuid.v4();

  const Blob = RNFetchBlob.polyfill.Blob
  const fs = RNFetchBlob.fs
  window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
  window.Blob = Blob
  let uploadBlob = null
  let mime = 'image/jpg'
  const storageLocation = firebase.storage().ref(
    "users/" + userID + "/photos/" + photoID + ".jpg"
  );
  fs.readFile(image.path, 'base64').then((data) => {
    return Blob.build(data, {
      type: `${mime};BASE64`
    });
  }).then((blob) => {
    uploadBlob = blob;
    return storageLocation.put(blob, {
      contentType: mime
    }).then(() => {
      uploadBlob.close();
      return storageLocation.getDownloadURL();
    }).then((url) => {
      console.log('uploaded image url: ' + url);
    });
  });




  /* const storageLocation = firebase.storage().ref(
    "users/" + userID + "/photos/" + photoID + ".jpg"
  );

  const base64 = 'data:image/jpeg;base64,' + data;

  console.log(base64);

  storageLocation.putString(base64, 'data_url').then(data => {
    console.log(data);
  });
}); */

}