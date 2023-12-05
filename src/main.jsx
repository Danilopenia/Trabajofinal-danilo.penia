import React, {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcywNBol_t92Dvb7RW0EEdLoEh6oQqVKw",
  authDomain: "proyectofinal-react-72f26.firebaseapp.com",
  projectId: "proyectofinal-react-72f26",
  storageBucket: "proyectofinal-react-72f26.appspot.com",
  messagingSenderId: "851019935945",
  appId: "1:851019935945:web:2d8ff6d10ff52cd6b41d18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <ChakraProvider>
    <App />
    </ChakraProvider>
  
)
