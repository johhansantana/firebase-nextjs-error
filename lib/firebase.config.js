import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/messaging";

const config = {
  apiKey: "replace",
  authDomain: "replace",
  databaseURL: "replace",
  storageBucket: "replace",
  messagingSenderId: "replace",
  projectId: "replace"
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
