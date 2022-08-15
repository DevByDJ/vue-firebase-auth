import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBqDIKjVG2XlU0kZWaA1vjC5T-KTCT6Sg",
  authDomain: "vue-firebase-auth-d3a9c.firebaseapp.com",
  projectId: "vue-firebase-auth-d3a9c",
  storageBucket: "vue-firebase-auth-d3a9c.appspot.com",
  messagingSenderId: "6078157801",
  appId: "1:6078157801:web:a3e4666147e3865fd83178",
  measurementId: "G-BESHFC2Y28"
};

// Initialize Firebase
initializeApp(firebaseConfig);

//const analytics = getAnalytics(app);

const app  = createApp(App)

app.use(router)             

app.mount('#app')
