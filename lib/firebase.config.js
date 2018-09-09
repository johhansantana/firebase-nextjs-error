import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/messaging";

const config = {
  apiKey: "AIzaSyD7P2l0Oc8GHfF81pTM2vB46cFocFbNgVA",
  authDomain: "test-7bba0.firebaseapp.com",
  databaseURL: "https://test-7bba0.firebaseio.com",
  projectId: "test-7bba0",
  storageBucket: "gs://test-7bba0.appspot.com",
  messagingSenderId: "315095427952"
};
const db = !firebase.apps.length
  ? firebase.initializeApp(config).firestore()
  : firebase.app().firestore();
db.settings({ timestampsInSnapshots: true });
if (typeof window !== "undefined") {
  db.enablePersistence().catch(function(err) {
    if (err.code == "failed-precondition") {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
      console.log("failed-precondition");
    } else if (err.code == "unimplemented") {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
      console.log("unimplemented");
    }
  });
}

const storage = firebase.storage();
// const messaging = firebase.messaging();

export { db, storage };
