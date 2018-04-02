import { initializeApp } from "firebase";

const app = initializeApp({
  apiKey: "AIzaSyBHHV35tpIvfm9NEpFXj-i-ZNwn3u0okFg",
  authDomain: "vuejs-chat-75063.firebaseapp.com",
  databaseURL: "https://vuejs-chat-75063.firebaseio.com",
  projectId: "vuejs-chat-75063",
  storageBucket: "vuejs-chat-75063.appspot.com",
  messagingSenderId: "305631813880"
})
export const db = app.database();
export const itemsRef = db.ref('items');

const firebaseService = {};
firebaseService.auth = () => {
  return app.auth()
};
export default firebaseService;