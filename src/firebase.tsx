import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBaYBKqb-Fa-bCGWNeEChuQr4ZNuaBLt7k',
  authDomain: 'todolisit-ea7e7.firebaseapp.com',
  projectId: 'todolisit-ea7e7',
  storageBucket: 'todolisit-ea7e7.appspot.com',
  messagingSenderId: '275368996288',
  appId: '1:275368996288:web:06b38f0f6f5410838e2c25',
  measurementId: 'G-P1B3MFC99V',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
