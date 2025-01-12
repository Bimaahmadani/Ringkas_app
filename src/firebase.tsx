import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCy0H27i1c652qJdJTcU8LCbARuaHhBg0A",
  authDomain: "ringkas-app-project.firebaseapp.com",
  projectId: "ringkas-app-project",
  storageBucket: "ringkas-app-project.appspot.com",
  messagingSenderId: "1091435269841",
  appId: "1:1091435269841:web:b9da1da8c9ea5a02ecbff0",
  measurementId: "G-JST1V55M48"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

// export default db;