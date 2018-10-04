import firebase from "firebase";

require("firebase/firestore");

import uuid from "react-native-uuid";

import RNFetchBlob from "react-native-fetch-blob";

import RNFS from "react-native-fs";

import ImgToBase64 from "react-native-image-base64";

import Base64 from "base-64";
global.atob = Base64.encode;

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
  return firebase.auth().currentUser.uid.toString();
  //return "2kccav5F5bgBCWpCMDpR1cWFRry2";
}

export async function updateProfile(userID, name, username, biography) {
  const docRef = firebase.firestore().doc("users/" + userID);
  return docRef
    .set({
      name: name,
      username: username,
      biography: biography
    })
    .then(function() {
      console.log("Success");
    })
    .catch(function(error) {
      console.log("Error: " + error);
    });
}

export async function getUserInfo(userID) {
  var docRef = firebase
    .firestore()
    .collection("users")
    .doc(userID);
  return Promise.resolve(
    docRef
      .get()
      .then(function(doc) {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          return doc.data();
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      })
  );
}

export async function uploadPhoto(image) {
  const userID = getUserID();
  photoID = uuid.v4().toString();

  ImgToBase64.getBase64String(image.path)
    .then(base64String => {
      /* base64String = 'data:image/jpg;base64,' + base64String; */
      firebase
        .storage()
        .ref("/test/thephoto.jpg")
        .putString(base64String, "base64", { contentType: "image/jpg" });
    })
    .catch(err => console.log(err));
}

/* RNFetchBlob.fs.readFile(image.path, 'base64').then(data => {
    data = 'data:image/jpg;base64,' + data;
    console.log(data);
    firebase.storage().ref('/test/thephoto.jpg').putString(data, 'data_url', {
      contentType: 'image/jpg'
    });
  }); */

/* RNFetchBlob.fs.readFile(image.path, 'base64')
    .then((data) => {
      // handle the data ..
      console.log('yeet');
      console.log(data);
      const ref = firebase.storage().ref('test/myphoto.jpeg');
      ref.putFile(image.path, {
        contentType: 'image/jpeg'
      }).then(function () {
        return ref.getDownloadURL();
      }).then(function (url) {
        LOG.debug("Image url", {
          url: url
        });
        onSuccess(url);
      }).catch(function (error) {
        LOG.error("Error while saving the image.. ", error);
        onError(error);
      });
    }) */

/* const Blob = RNFetchBlob.polyfill.Blob
  const fs = RNFetchBlob.fs
  window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
  window.Blob = Blob
  let uploadBlob = null
  let mime = 'image/jpg'
  const storageLocation = firebase.storage().ref(
    "users/" + userID + "/photos/" + photoID + ".jpg"
  );
  return fs.readFile(image.path, 'base64').then((data) => {
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
    })
  }); */

export async function createPhotoDoc(photoData) {
  console.log("Uploading...");
  const ref = db.doc("users/" + photoData.userID + "/photos/" + photoID);
  await ref
    .set({
      photoData
    })
    .then(function() {
      console.log("Success");
    })
    .catch(function(error) {
      console.log("Error: " + error);
    });
  console.log("After");
}

/* const storageLocation = firebase.storage().ref(
    "users/" + userID + "/photos/" + photoID + ".jpg"
  );

  const base64 = 'data:image/jpeg;base64,' + data;

  console.log(base64);

  storageLocation.putString(base64, 'data_url').then(data => {
    console.log(data);
  });
}); */
